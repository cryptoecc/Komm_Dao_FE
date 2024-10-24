import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Modal from 'react-modal';
import {
  ParticipantListContainer,
  LeftSection,
  RightSection,
  ParticipantItem,
  RatingSection,
  RatingContainer,
  ClaimXPButton,
  BtnWrap,
  Xp,
  LoadingOverlay,
  LoadingSpinner,
  ModalContent,
  CloseButton,
} from './DiscoverParticipantList.style';
import { images } from 'src/assets/discover/images';
import ClaimModal from './ClaimModal';
import checkedStar from 'src/assets/discover/checkedStar.svg';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';
import { XpClaim_ABI } from 'src/configs/contract-abi/XpClaim';
import { useLocation } from 'react-router-dom';
import { ReactComponent as CloseIcon } from 'src/assets/modal/close.svg';

Modal.setAppElement('#root');

// 환경 변수에서 어드민 계정 정보를 가져옵니다.
const adminAddress = process.env.REACT_APP_ADMIN_WALLET_ADDRESS || '';
const adminPrivateKey = process.env.REACT_APP_ADMIN_WALLET_PRIVATE_KEY || '';

interface ParticipantListProps {
  participants: { id: number; user: string }[];
  onXpClaimed: () => void; // XP 클레임 후 호출할 콜백 함수
}

const DiscoverParticipantList: React.FC<ParticipantListProps> = ({ participants, onXpClaimed }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [points, setPoints] = useState<number>(4); // 점수(평점)
  const [rating, setRating] = useState<number>(0);
  const [isRatingFixed, setIsRatingFixed] = useState<boolean>(false); // 클릭 후 고정되는 상태
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isClaimed, setIsClaimed] = useState<boolean>(false); // XP가 이미 클레임 되었는지 여부
  const contractAddress = '0x15e7a34b6a5aBf8b0aD4FcD85D873FD7e7163E97';
  const contractABI = XpClaim_ABI;
  const location = useLocation();
  const projectData = location.state;
  const projectName = projectData?.pjt_name || 'Unknown Project';
  const projectId = projectData?.pjt_id;

  useEffect(() => {
    const checkIfClaimed = async () => {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const walletAddress = accounts[0];

        const response = await axios.post(`${API_BASE_URL}/api/user/profile/check-already-claimed`, {
          walletAddress,
          project_id: projectData?.pjt_id, // project_id 전송
          participation: 'Discover',
        });

        if (response.data.alreadyClaimed) {
          setIsClaimed(true); // 이미 클레임한 경우 버튼을 비활성화
        }
      } catch (error) {
        console.error('Error checking claim status:', error);
      }
    };

    checkIfClaimed(); // 컴포넌트 마운트 시 클레임 상태 확인
  }, [projectData]);

  const truncateProjectName = (name: string, maxLength: number) => {
    return name.length > maxLength ? name.substring(0, maxLength) + '...' : name;
  };
  // const truncatedProjectName = truncateProjectName(projectName, 6);

  // 메타마스크 서명창이 안뜨는 경우
  const handleClaimXPClick = async () => {
    if (isLoading || isClaimed) return; // 중복 처리 및 이미 클레임한 경우 방지

    setPoints(rating);

    setIsModalOpen(true);
    setIsLoading(true);

    try {
      const web3 = new Web3((window as any).ethereum);
      const accounts = await web3.eth.getAccounts();
      const walletAddress = accounts[0];
      const xpPoints = 10;

      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const gasPrice = await web3.eth.getGasPrice();
      const gasEstimate = await contract.methods.claimXP(walletAddress, xpPoints).estimateGas({ from: adminAddress });
      const nonceBigInt = await web3.eth.getTransactionCount(adminAddress, 'pending');
      const nonce = Number(nonceBigInt);

      const tx = {
        from: adminAddress,
        to: contractAddress,
        data: contract.methods.claimXP(walletAddress, xpPoints).encodeABI(),
        gas: gasEstimate.toString(),
        gasPrice: gasPrice.toString(),
        nonce: nonce,
        value: '0x0',
      };

      const signedTx = await web3.eth.accounts.signTransaction(tx, adminPrivateKey);
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction || '');
      if (!receipt.transactionHash) {
        throw new Error('Transaction failed');
      }

      const xpBalanceRaw = await contract.methods.getXP(walletAddress).call();
      if (!xpBalanceRaw) {
        throw new Error('Invalid XP balance returned from contract');
      }

      const xpBalance = parseInt(xpBalanceRaw.toString(), 10);
      const transactionHash = receipt.transactionHash.toString();

      // Send XP balance, rating, and project_id to the backend
      await axios.post(`${API_BASE_URL}/api/user/profile/update-xp-balance`, {
        walletAddress,
        xpBalance,
        pjt_id: projectId, // Project ID 추가
        rating, // 별점 값 추가
      });

      await axios.post(`${API_BASE_URL}/api/user/profile/update-history`, {
        walletAddress,
        date: new Date().toISOString(),
        participation: 'Discover',
        activity: `Voted on Project ${projectName}`,
        xpEarned: xpPoints,
        transactionId: transactionHash,
        project_id: projectId, // Project ID 추가
        rating, // 별점 값 추가
      });

      setIsSuccess(true);
      setIsClaimed(true); // 클레임 후 버튼 비활성화
      onXpClaimed(); // XP 클레임 후 데이터를 업데이트하는 콜백 호출
    } catch (error) {
      console.error('XP 클레임 중 오류 발생:', error);
      alert('XP 클레임 중 오류가 발생했습니다. 다시 시도해 주세요.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // 서명창 뜨는코드
  // const handleClaimXPClick = async () => {
  //   if (isLoading || isClaimed) return; // 중복 처리 및 이미 클레임한 경우 방지

  //   setPoints(rating);
  //   setIsLoading(true);

  //   try {
  //     const web3 = new Web3((window as any).ethereum);
  //     const accounts = await web3.eth.getAccounts();
  //     const walletAddress = accounts[0];
  //     const xpPoints = 10;

  //     const contract = new web3.eth.Contract(contractABI, contractAddress);
  //     const gasPrice = await web3.eth.getGasPrice();
  //     const gasEstimate = await contract.methods.claimXP(walletAddress, xpPoints).estimateGas({ from: adminAddress });

  //     const tx = {
  //       from: adminAddress,
  //       to: contractAddress,
  //       data: contract.methods.claimXP(walletAddress, xpPoints).encodeABI(),
  //       gas: gasEstimate.toString(),
  //       gasPrice: gasPrice.toString(),
  //       value: '0x0',
  //     };

  //     const signedTx = await web3.eth.accounts.signTransaction(tx, adminPrivateKey);
  //     const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction || '');
  //     if (!receipt.transactionHash) {
  //       throw new Error('Transaction failed');
  //     }

  //     const xpBalanceRaw = await contract.methods.getXP(walletAddress).call();
  //     if (!xpBalanceRaw) {
  //       throw new Error('Invalid XP balance returned from contract');
  //     }

  //     const xpBalance = parseInt(xpBalanceRaw.toString(), 10);
  //     const transactionHash = receipt.transactionHash.toString();

  //     // Send XP balance, rating, and other details to the backend
  //     await axios.post(`${API_BASE_URL}/api/user/profile/update-xp-balance`, {
  //       walletAddress,
  //       xpBalance,
  //       rating, // Send rating to backend
  //     });

  //     await axios.post(`${API_BASE_URL}/api/user/profile/update-history`, {
  //       walletAddress,
  //       date: new Date().toISOString(),
  //       participation: 'Discover',
  //       activity: `Voted on Project ${truncatedProjectName}`,
  //       xpEarned: xpPoints,
  //       transactionId: transactionHash,
  //       project_id: projectId,
  //       rating, // Send rating to the backend
  //     });

  //     setIsModalOpen(true);
  //     setIsClaimed(true); // 클레임 후 버튼 비활성화
  //   } catch (error) {
  //     console.error('XP 클레임 중 오류 발생:', error);
  //     alert('XP 클레임 중 오류가 발생했습니다. 다시 시도해 주세요.');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleStarClick = (index: number) => {
    setRating(index + 1);
    setIsRatingFixed(true);
  };

  const handleStarHover = (index: number) => {
    if (!isRatingFixed) {
      setHoverRating(index + 1);
    }
  };

  const handleStarLeave = () => {
    if (!isRatingFixed) {
      setHoverRating(0);
    }
  };

  const displayRating = isRatingFixed ? rating : hoverRating || rating;

  return (
    <>
      {/* {isLoading && (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      )} */}
      <ParticipantListContainer>
        <LeftSection>
          <p>Participant List</p>
          <div>
            {participants.map((participant) => (
              <ParticipantItem key={participant.id}>
                <img
                  src={participant.user ? `${API_BASE_URL}/${participant.user}` : images.profile}
                  alt={`Participant ${participant.id}`}
                />
              </ParticipantItem>
            ))}
          </div>
        </LeftSection>
        <RightSection>
          <RatingSection>
            <p>Please rate using one of the 5 scores</p>
            <RatingContainer>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img
                    src={index < displayRating ? images.checked_star : images.star2}
                    alt="Rating Star"
                    key={index}
                    onClick={() => handleStarClick(index)}
                    onMouseEnter={() => handleStarHover(index)}
                    onMouseLeave={handleStarLeave}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              <div
                style={{
                  marginLeft: '20px',
                  marginTop: '15px',
                  fontWeight: 'bold',
                  fontSize: '30px',
                  color: '#210d5c',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {displayRating}
              </div>
            </RatingContainer>
            <BtnWrap>
              <Xp>
                Each rating earns you <span>10 XP!</span>
              </Xp>

              <ClaimXPButton onClick={handleClaimXPClick} disabled={isClaimed}>
                {isClaimed ? 'Claimed' : 'Claim XP'}
              </ClaimXPButton>
            </BtnWrap>
          </RatingSection>
        </RightSection>
        <ClaimModal
          isOpen={isModalOpen}
          onClose={closeModal}
          points={points}
          loading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          onRetry={handleClaimXPClick}
        />
        {/* <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Wallet Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <ModalContent>
            <CloseButton onClick={closeModal}>
              <CloseIcon />
            </CloseButton>
          </ModalContent>
        </Modal> */}
      </ParticipantListContainer>
    </>
  );
};

export default DiscoverParticipantList;

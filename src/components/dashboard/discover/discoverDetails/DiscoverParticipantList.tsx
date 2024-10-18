import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import {
  ParticipantListContainer,
  LeftSection,
  RightSection,
  ParticipantItem,
  RatingSection,
  RatingContainer,
  ClaimXPButton,
  BtnWrap,
  LoadingOverlay,
  LoadingSpinner,
} from './DiscoverParticipantList.style';
import { images } from 'src/assets/discover/images';
import ClaimModal from './ClaimModal';
import checkedStar from 'src/assets/discover/checkedStar.svg';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';
import { XpClaim_ABI } from 'src/configs/contract-abi/XpClaim';
import { useLocation } from 'react-router-dom';

// 환경 변수에서 어드민 계정 정보를 가져옵니다.
const adminAddress = process.env.REACT_APP_ADMIN_WALLET_ADDRESS || '';
const adminPrivateKey = process.env.REACT_APP_ADMIN_WALLET_PRIVATE_KEY || '';

interface ParticipantListProps {
  participants: { id: number; user: string }[];
}

const DiscoverParticipantList: React.FC<ParticipantListProps> = ({ participants }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [points, setPoints] = useState<number>(4); // 점수(평점)
  const [rating, setRating] = useState<number>(0);
  const [isRatingFixed, setIsRatingFixed] = useState<boolean>(false); // 클릭 후 고정되는 상태
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
  const truncatedProjectName = truncateProjectName(projectName, 6);

  // 메타마스크 서명창이 뜨는 경우
  // const handleClaimXPClick = async () => {
  //   if (isLoading || isClaimed) return; // 중복 처리 및 이미 클레임한 경우 방지

  //   setPoints(rating);
  //   setIsLoading(true);

  //   try {
  //     const web3 = new Web3((window as any).ethereum);
  //     const accounts = await web3.eth.getAccounts();
  //     const walletAddress = accounts[0];
  //     const xpPoints = 10;
  //     const projectId = projectData?.pjt_id; // projectId 추가
  //     const projectName = projectData?.pjt_name; // projectName 추가

  //     const contract = new web3.eth.Contract(contractABI, contractAddress);

  //     // 트랜잭션 데이터 준비
  //     const txData = contract.methods.claimXP(walletAddress, xpPoints).encodeABI();

  //     // 메시지 해시 생성
  //     const messageHash = web3.utils.keccak256(txData);

  //     // 사용자 서명 요청 (eth_sign 사용)
  //     const signature = await web3.eth.sign(messageHash, walletAddress);

  //     console.log('서명된 트랜잭션 데이터:', signature);

  //     // 서버로 서명된 트랜잭션을 전송
  //     await axios.post(`${API_BASE_URL}/api/user/profile/update-xp`, {
  //       walletAddress,
  //       signature,
  //       txData,
  //       xpPoints, // xpPoints 추가
  //       projectId, // projectId 추가
  //       projectName, // projectName 추가
  //     });

  //     setIsClaimed(true); // 클레임 후 버튼 비활성화
  //   } catch (error) {
  //     console.error('XP 클레임 중 오류 발생:', error);
  //     alert('XP 클레임 중 오류가 발생했습니다. 다시 시도해 주세요.');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // 메타마스크 서명창이 뜨지 않는 경우
  const handleClaimXPClick = async () => {
    if (isLoading || isClaimed) return; // 중복 처리 및 이미 클레임한 경우 방지

    setPoints(rating);
    setIsLoading(true);

    try {
      const web3 = new Web3((window as any).ethereum);
      const accounts = await web3.eth.getAccounts();
      const walletAddress = accounts[0];
      const xpPoints = 10;

      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const gasPrice = await web3.eth.getGasPrice();
      const gasEstimate = await contract.methods.claimXP(walletAddress, xpPoints).estimateGas({ from: adminAddress });

      const tx = {
        from: adminAddress,
        to: contractAddress,
        data: contract.methods.claimXP(walletAddress, xpPoints).encodeABI(),
        gas: gasEstimate.toString(),
        gasPrice: gasPrice.toString(),
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

      // Send XP balance, rating, and other details to the backend
      await axios.post(`${API_BASE_URL}/api/user/profile/update-xp-balance`, {
        walletAddress,
        xpBalance,
        rating, // Send rating to backend
      });

      await axios.post(`${API_BASE_URL}/api/user/profile/update-history`, {
        walletAddress,
        date: new Date().toISOString(),
        participation: 'Discover',
        activity: `Voted on Project ${truncatedProjectName}`,
        xpEarned: xpPoints,
        transactionId: transactionHash,
        project_id: projectId,
        rating, // Send rating to the backend
      });

      setIsModalOpen(true);
      setIsClaimed(true); // 클레임 후 버튼 비활성화
    } catch (error) {
      console.error('XP 클레임 중 오류 발생:', error);
      alert('XP 클레임 중 오류가 발생했습니다. 다시 시도해 주세요.');
    } finally {
      setIsLoading(false);
    }
  };

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
      {isLoading && (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      )}
      <ParticipantListContainer style={{ filter: isLoading ? 'blur(4px)' : 'none' }}>
        <LeftSection>
          <h3>Participant List</h3>
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
                    src={index < displayRating ? checkedStar : images.star2}
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
              <p>
                Each rating earns you <span>10 XP!</span>
              </p>
              <ClaimXPButton onClick={handleClaimXPClick} disabled={isClaimed}>
                {isClaimed ? 'Already Claimed' : 'Claim XP'}
              </ClaimXPButton>
            </BtnWrap>
          </RatingSection>
        </RightSection>
        <ClaimModal isOpen={isModalOpen} onClose={closeModal} points={points} />
      </ParticipantListContainer>
    </>
  );
};

export default DiscoverParticipantList;

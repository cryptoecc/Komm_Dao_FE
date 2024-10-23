import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import Web3 from 'web3';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {
  Container,
  LeftSection,
  RightSection,
  TitleWrapper,
  ProjectTitle,
  ActiveBadge,
  FinishedBadge,
  Banner,
  RewardSection,
  MissionSection,
  DateSection,
  TaskSection,
  ParticipantSection,
  ProgressContainer,
  ProgressBar,
  ProgressText,
  AvatarList,
  Avatar,
  ActionButton,
  ContentWrapper,
  TaskWrapper,
  ClaimButton,
  ClaimButtonText,
  InviteSection,
  InviteButton,
  InviteIcon,
} from './ContributionDetail.style';
import ContributionModal from './ContributionModal'; // 모달 컴포넌트 추가
import InviteModal from 'src/components/inviteModal/InviteModal';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';
import defaultDealIcon from 'src/assets/deal/MYX.png';
import defaultBannerImg from 'src/assets/deal/DELEGATE_banner.png';
import inviteImg from 'src/assets/contribution/inviteIcon.png';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { XpClaim_ABI } from 'src/configs/contract-abi/XpClaim';
import Spinner from 'src/components/spinner/Spinner';
import DailyCheckSection from './dailyCheckComponent/DailyCheckSection';
import { checkPrime } from 'crypto';

dayjs.extend(customParseFormat);

interface Participant {
  id: number;
  name: string;
  avatarUrl: string;
}

interface InviteDetail {
  inviterName: string;
  wallet: string;
  email: string;
  invitedMembers: number;
  acceptedMembers: number;
  rejectedMembers: number;
  inviteeList: {
    inviteeEmail: string;
    status: string;
    inviteDate: string;
    statusDate: string;
  }[];
}

const ContributionDetail: React.FC = () => {
  const navaige = useNavigate();
  const location = useLocation();
  const { title, xp, imageUrl, logoUrl, startDate, endDate, progress, maxProgress, type, desc, id, pjtId } =
    location.state || {};
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isInviteModalOpen, setInviteModalOpen] = useState(false);
  const [inviteDetails, setInviteDetails] = useState(); // 초대 관련 정보 저장
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [participantCount, setParticipantCount] = useState(0); // 현재 참여자 수
  const [isModalOpen, setModalOpen] = useState(false); // 모달 상태 관리
  const [claimedXP, setClaimedXP] = useState(70); // 더미 XP 값
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [claim, setClaim] = useState<String>();
  const [contType, setContType] = useState<string>('');
  const [dailyCheck, setDailyCheck] = useState<string>('');
  const [todayChecked, setTodayChecked] = useState<string>('');

  const contractAddress = '0x15e7a34b6a5aBf8b0aD4FcD85D873FD7e7163E97';
  const contractABI = XpClaim_ABI;
  const adminAddress = process.env.REACT_APP_ADMIN_WALLET_ADDRESS || '';
  const adminPrivateKey = process.env.REACT_APP_ADMIN_WALLET_PRIVATE_KEY || '';

  const userId = useSelector((state: RootState) => state.user.user_id);

  // XP 잔액을 가져와서 백엔드에 업데이트하는 함수
  const updateXPBalance = async (walletAddress: string, xpBalance: number) => {
    try {
      await axios.post(`${API_BASE_URL}/api/user/profile/update-xp-balance`, {
        walletAddress,
        xpBalance,
      });

      console.log(`XP balance updated in database for ${walletAddress}.`);
    } catch (error) {
      console.error('Error updating XP balance:', error);
      alert('XP 잔액 업데이트 중 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  // 포인트 히스토리 업데이트 함수
  const updatePointHistory = async (
    walletAddress: string,
    xpPoints: number,
    transactionHash: string,
    cont_type: string
  ) => {
    console.log(contType);
    try {
      await axios.post(`${API_BASE_URL}/api/user/profile/update-history`, {
        walletAddress,
        date: new Date().toISOString(),
        participation: 'Contribution',
        activity: cont_type,
        xpEarned: xpPoints,
        transactionId: transactionHash,
        project_id: pjtId,
      });

      console.log(`Point history updated for wallet ${walletAddress}`);
    } catch (error) {
      console.error('Error updating point history:', error);
    }
  };

  const handleClaimXPClick = async () => {
    if (isLoading) return; // 중복 방지

    setIsLoading(true);

    try {
      const web3 = new Web3((window as any).ethereum);
      const accounts = await web3.eth.getAccounts();
      const walletAddress = accounts[0];

      const userPoint = await axios.post(`${API_BASE_URL}/api/contribution/get-userXp`, {
        user_id: userId,
        cont_id: id,
      });

      const xp = userPoint.data.cont_xp;
      const cont_type = userPoint.data.cont_type;

      console.log(cont_type);
      setPoints(xp);
      setContType(cont_type);

      const contract = new web3.eth.Contract(contractABI, contractAddress);

      const gasEstimate = await contract.methods.claimXP(walletAddress, xp).estimateGas({ from: adminAddress });
      const gasPrice = await web3.eth.getGasPrice(); // gasPrice를 설정 (Type 0 트랜잭션)

      const nonceBigInt = await web3.eth.getTransactionCount(adminAddress, 'pending');
      const nonce = Number(nonceBigInt);

      const tx = {
        from: adminAddress,
        to: contractAddress,
        data: contract.methods.claimXP(walletAddress, xp).encodeABI(),
        gas: gasEstimate.toString(),
        gasPrice: gasPrice.toString(), // gasPrice 설정
        nonce: nonce,
        value: '0x0',
      };

      const signedTx = await web3.eth.accounts.signTransaction(tx, adminPrivateKey);
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction || '');

      if (!receipt.transactionHash) {
        throw new Error('Transaction failed');
      }

      const transactionHash = receipt.transactionHash.toString();

      const xpBalanceRaw = await contract.methods.getXP(walletAddress).call();

      // xpBalanceRaw가 undefined 또는 배열인 경우를 확인
      if (!xpBalanceRaw || (Array.isArray(xpBalanceRaw) && xpBalanceRaw.length === 0)) {
        throw new Error('Invalid XP balance returned from contract');
      }
      const xpBalance = parseInt(xpBalanceRaw.toString(), 10);

      if (isNaN(xpBalance)) {
        throw new Error('Failed to parse XP balance');
      }

      await updateXPBalance(walletAddress, xpBalance);

      await updatePointHistory(walletAddress, xp, transactionHash, cont_type);

      await axios.post(`${API_BASE_URL}/api/contribution/update-claimXp`, {
        total_xp: xp,
        user_id: userId,
        cont_id: id,
      });

      await fetchInviteDetails();
      await dailyConfirmCheck();
    } catch (error) {
      console.error('XP 클레임 중 오류 발생:', error);
      alert('XP 클레임 중 오류가 발생했습니다. 다시 시도해 주세요.');
    } finally {
      setIsLoading(false); // 요청 완료 후 로딩 상태 해제
    }
  };

  useEffect(() => {
    // 더미 데이터를 사용하여 참가자 목록을 설정
    const dummyParticipants: Participant[] = [
      { id: 1, name: 'User 1', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
      { id: 2, name: 'User 2', avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
      { id: 3, name: 'User 3', avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg' },
      { id: 4, name: 'User 4', avatarUrl: 'https://randomuser.me/api/portraits/women/4.jpg' },
      { id: 5, name: 'User 5', avatarUrl: 'https://randomuser.me/api/portraits/men/5.jpg' },
    ];

    setParticipants(dummyParticipants);
    setParticipantCount(dummyParticipants.length); // 참여자 수 저장
  }, []);

  useEffect(() => {
    // URL 파라미터에서 accessToken을 가져옴
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('accessToken');

    if (token) {
      setAccessToken(token);
      console.log('Received access token:', token);
      // 여기에서 트위터 API 요청을 할 수 있음
    }
  }, [location.search]);

  const start = dayjs(startDate, 'YYYY-MM-DD');
  const end = dayjs(endDate, 'YYYY-MM-DD');

  const currentDate = dayjs();

  const isActive = currentDate.isAfter(start) && currentDate.isBefore(end) ? 'Active' : 'Finished';

  const handleClaimClick = () => {
    setModalOpen(true); // Claim 버튼을 눌렀을 때 모달 오픈
  };

  const handleCloseModal = () => {
    setModalOpen(false); // 모달 닫기
  };

  // 트위터 Connect 버튼 클릭 핸들러
  const handleTwitterConnect = async (task: any) => {
    try {
      const twitterUrl = 'https://x.com/Tesla';
      // 백엔드로 OAuth 인증 요청을 보냄
      const response = await axios.post(
        `${API_BASE_URL}/api/user/twitter/auth`,
        { twitterUrl },
        { withCredentials: true } // 세션 쿠키 전송
      );
      const { authenticateUrl } = response.data;

      // 트위터 인증 URL로 리디렉션
      window.location.href = authenticateUrl;
    } catch (error) {
      console.error('Error during Twitter OAuth:', error);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const accessToken = searchParams.get('accessToken');

    if (accessToken) {
      console.log('Access Token:', accessToken);

      // 3초 후에 트위터 페이지로 리디렉션
      // window.location.href = 'https://x.com/Tesla'
    }

    const getUserProfile = async (accessToken: any) => {
      if (!accessToken) return;

      try {
        const response = await axios.get(`${API_BASE_URL}/api/user/twitter/user?accessToken=${accessToken}`);

        const userId = response.data.data.id; // 트위터 사용자 ID
        const userName = response.data.data.username; // 트위터 사용자 이름

        console.log(`User ID: ${userId}, Username: ${userName}`);
        return response.data.data; // 사용자 정보 반환
      } catch (error) {
        console.error('Error fetching user profile:', error);
        return null;
      }
    };

    getUserProfile(accessToken);
  }, [location.search]);

  const handleInviteClick = () => {
    setInviteModalOpen(true);
  };

  // Invite 모달 닫기 핸들러
  const handleCloseInviteModal = () => {
    setInviteModalOpen(false);
  };

  const fetchInviteDetails = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/contribution/check-applied-email`, {
        cont_id: id,
        user_id: userId,
      });
      setInviteDetails(response.data.appliedInvitesCount); // 응답 데이터를 상태에 저장
      console.log('Invite Details:', response.data.appliedInvitesCount);

      const checkConfirm = await axios.post(`${API_BASE_URL}/api/contribution/check-confirm`, {
        cont_id: id,
        user_id: userId,
      });

      console.log(checkConfirm.data.claim_yn);
      // 백엔드 응답에 따른 claim 상태 설정
      if (checkConfirm.data && checkConfirm.data.claim_yn) {
        setClaim(checkConfirm.data.claim_yn);
      } else {
        setClaim('N'); // claim_yn 값이 없으면 N으로 설정
      }
    } catch (error: any) {
      console.error('Error fetching invite details:', error);

      // 백엔드에서 "No user contribution found for this mission." 메시지가 온 경우
      if (error.response && error.response.data.message === 'No user contribution found for this mission.') {
        setClaim('N'); // 백엔드에서 특정 에러 메시지를 받았을 때 N으로 설정
      }
    }
  };

  fetchInviteDetails(); // 컴포넌트 마운트 시 API 호출

  useEffect(() => {
    // 초대 관련 데이터를 가져오는 함수
    fetchInviteDetails();
  }, []);

  const dailyConfirmCheck = async () => {
    try {
      const check = await axios.post(`${API_BASE_URL}/api/contribution/daily-check-confirm`, {
        cont_id: id,
        user_id: userId,
        cont_type: type,
      });

      if (check.data && check.data.claim_yn) {
        setDailyCheck(check.data.claim_yn);
        setTodayChecked(check.data.participant_yn);
      } else {
        setDailyCheck('N');
        setTodayChecked('N');
      }
    } catch (error) {
      console.error('Error fetching invite details:', error);
    }
  };

  useEffect(() => {
    dailyConfirmCheck();
  }, [id, userId, type]);

  const formatDescription = (desc: string) => {
    return desc.replace(/\r\n/g, '<br />').replace(/\n/g, '<br />'); // \r\n 또는 \n을 <br />로 변환
  };

  const handleDailyCheck = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/contribution/daily-check`, {
        cont_id: id, // cont_id는 props나 state에서 가져온 값
        user_id: userId, // Redux에서 가져온 user_id
        cont_type: type,
      });

      if (response.status === 201) {
        console.log('UserContribution created successfully');
      } else if (response.status === 200) {
        console.log('UserContribution already exists');
      }

      await dailyConfirmCheck();
    } catch (error) {
      console.error('Error during daily check:', error);
      alert('Daily check failed. Please try again.');
    }
  };

  // const checkDaily = async () => {
  //   try {
  //     const response = await axios.post(`${API_BASE_URL}/api/contribution/daily-check-confirm`, {
  //       cont_id: id,
  //       user_id: userId,
  //       cont_type: type,
  //     });

  //     if (response.data && response.data.claim_yn) {
  //       setTodayChecked(response.data.claim_yn); // claim_yn 상태 업데이트
  //     } else {
  //       setTodayChecked('N');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching claim_yn:', error);
  //   }
  // };

  // useEffect(() => {
  //   checkDaily();
  // }, []);

  return (
    <Container>
      <TitleWrapper>
        <ProjectTitle>{title}</ProjectTitle>
        {isActive === 'Active' ? (
          <ActiveBadge>
            <div>Active</div>
          </ActiveBadge>
        ) : (
          <FinishedBadge>
            <div>Finished</div>
          </FinishedBadge>
        )}
      </TitleWrapper>

      <div style={{ display: 'flex', width: '100%' }}>
        <LeftSection>
          <ContentWrapper>
            <Banner src={imageUrl ? `${API_BASE_URL}/${imageUrl}` : defaultBannerImg} alt="Project Banner" />
            <RewardSection>
              Reward <span style={{ paddingLeft: '10px', color: '#6A5FEB' }}>{xp} XP</span>
            </RewardSection>
            <MissionSection>
              <h3>Mission</h3>
              <p dangerouslySetInnerHTML={{ __html: formatDescription(desc) }} />
            </MissionSection>
            <DateSection>
              <h4>Date</h4>
              <p>
                {startDate} ~ {endDate}
              </p>
            </DateSection>
          </ContentWrapper>
        </LeftSection>

        <RightSection>
          <TaskWrapper>
            {type === 'Invite' ? (
              <>
                <InviteSection>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '20px',
                      marginTop: '10px',
                      marginLeft: '40px',
                    }}
                  >
                    <InviteIcon src={inviteImg} alt="Invite Icon" />
                    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> */}
                    <div>
                      <h3>Invite a New Member</h3>
                      <p>You have invited {inviteDetails} members.</p>
                    </div>
                  </div>

                  {/* </div> */}

                  <InviteButton onClick={handleInviteClick}>Invite</InviteButton>
                </InviteSection>
              </>
            ) : type === 'Daily-check' ? (
              <DailyCheckSection onDailyCheck={handleDailyCheck} status={dailyCheck} limit={todayChecked} />
            ) : (
              <TaskSection>
                <ul>
                  <li>
                    <img src={logoUrl} alt="Task Icon" />
                    MYX Twitter Followers
                    <ActionButton onClick={() => handleTwitterConnect('followers')}>Connect</ActionButton>
                  </li>
                  <li>
                    <img src={logoUrl} alt="Task Icon" />
                    MYX Retweet
                    <ActionButton onClick={() => handleTwitterConnect('retweet')}>Connect</ActionButton>
                  </li>
                  <li>
                    <img src={logoUrl} alt="Task Icon" />
                    MYX Discord
                    <ActionButton>Connect</ActionButton>
                  </li>
                </ul>
              </TaskSection>
            )}
          </TaskWrapper>

          {type !== 'Daily-check' && (
            <ParticipantSection>
              <h4>Participants</h4>
              <ProgressContainer>
                <ProgressBar $progress={progress} $maxProgress={maxProgress} />
                <ProgressText>
                  {progress} / {maxProgress}
                </ProgressText>
              </ProgressContainer>
              <AvatarList>
                {participants.map((participant) => (
                  <Avatar key={participant.id}>
                    <img src={participant.avatarUrl} alt={participant.name} />
                    {participant.name}
                  </Avatar>
                ))}
              </AvatarList>
            </ParticipantSection>
          )}
          {/* Claim 버튼 */}
          {type === 'Invite' ? (
            <ClaimButton onClick={handleClaimXPClick} disabled={isLoading || claim === 'N'}>
              {isLoading ? <Spinner /> : <ClaimButtonText>Claim</ClaimButtonText>}
            </ClaimButton>
          ) : type === 'Daily-check' ? (
            <ClaimButton onClick={handleClaimXPClick} disabled={isLoading || dailyCheck === 'N'}>
              {isLoading ? <Spinner /> : <ClaimButtonText>Claim</ClaimButtonText>}
            </ClaimButton>
          ) : (
            <ClaimButton onClick={handleClaimXPClick} disabled={isLoading || claim === 'N'}>
              {isLoading ? <Spinner /> : <ClaimButtonText>Claim</ClaimButtonText>}
            </ClaimButton>
          )}
        </RightSection>
      </div>

      {/* 모달 */}
      <InviteModal isOpen={isInviteModalOpen} onClose={handleCloseInviteModal} data={id} />
      <ContributionModal isOpen={isModalOpen} claimedXP={claimedXP} onClose={handleCloseModal} />
    </Container>
  );
};

export default ContributionDetail;

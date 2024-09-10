import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
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
} from './ContributionDetail.style';
import ContributionModal from './ContributionModal'; // 모달 컴포넌트 추가

dayjs.extend(customParseFormat);

interface Participant {
  id: number;
  name: string;
  avatarUrl: string;
}

const ContributionDetail: React.FC = () => {
  const location = useLocation();
  const { title, xp, imageUrl, logoUrl, startDate, endDate, progress, maxProgress, statusText } = location.state || {};

  const [participants, setParticipants] = useState<Participant[]>([]);
  const [participantCount, setParticipantCount] = useState(0); // 현재 참여자 수
  const [isModalOpen, setModalOpen] = useState(false); // 모달 상태 관리
  const [claimedXP, setClaimedXP] = useState(70); // 더미 XP 값

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

  const start = dayjs(startDate, 'YY/MM/DD');
  const end = dayjs(endDate, 'YY/MM/DD');
  const currentDate = dayjs();

  const isActive = currentDate.isAfter(start) && currentDate.isBefore(end) ? 'Active' : 'Finished';

  const handleClaimClick = () => {
    setModalOpen(true); // Claim 버튼을 눌렀을 때 모달 오픈
  };

  const handleCloseModal = () => {
    setModalOpen(false); // 모달 닫기
  };

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
            <Banner src={imageUrl} alt="Project Banner" />
            <RewardSection>
              Reward <span>{xp} XP</span>
            </RewardSection>
            <MissionSection>
              <h3>Mission</h3>
              <p>
                MYX 커뮤니티 활성화를 위해 트위터, 디스코드 이벤트를 진행중에 있습니다.
                <br />
                해당 트위터와 디스코드를 자신의 계정과 연결하면 Claim 버튼이 활성화 되고,
                <br />
                MYX의 소식을 실시간으로 빠르게 받아보실 수 있습니다!
                <br />
                지금 바로 참여하여 XP를 획득해보세요!
              </p>
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
            <TaskSection>
              <ul>
                <li>
                  <img src={logoUrl} alt="Task Icon" />
                  MYX Twitter Followers
                  <ActionButton>Connect</ActionButton>
                </li>
                <li>
                  <img src={logoUrl} alt="Task Icon" />
                  MYX Retweet
                  <ActionButton>Connect</ActionButton>
                </li>
                <li>
                  <img src={logoUrl} alt="Task Icon" />
                  MYX Discord
                  <ActionButton>Connect</ActionButton>
                </li>
              </ul>
            </TaskSection>
          </TaskWrapper>

          <ParticipantSection>
            <h4>Participants</h4>
            <ProgressContainer>
              <ProgressBar $progress={participantCount} $maxProgress={maxProgress} />
              <ProgressText>
                {participantCount} / {maxProgress}
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

          {/* Claim 버튼 */}
          <ClaimButton onClick={handleClaimClick}>
            <ClaimButtonText>Claim</ClaimButtonText>
          </ClaimButton>
        </RightSection>
      </div>

      {/* 모달 */}
      <ContributionModal isOpen={isModalOpen} claimedXP={claimedXP} onClose={handleCloseModal} />
    </Container>
  );
};

export default ContributionDetail;

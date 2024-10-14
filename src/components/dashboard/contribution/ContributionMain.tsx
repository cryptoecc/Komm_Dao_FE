import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MainContainer,
  LeftSection,
  RightSection,
  ProjectTitleWrapper,
  ProjectTitle,
  ProjectLogo,
  KohortLabel,
  XPInfoWrapper,
  Dates,
  ProgressContainer,
  ProgressBar,
  ProgressText,
  BannerWrapper,
  BannerImage,
} from './ContributionMain.style';
import { PATH } from 'src/constants/path';
import { API_BASE_URL } from 'src/utils/utils';
import defaultDealIcon from 'src/assets/deal/MYX.png';
import defaultBannerImg from 'src/assets/deal/DELEGATE_banner.png';

// ContributionMain 컴포넌트가 받을 props의 타입을 정의합니다.
interface ContributionMainProps {
  logoUrl: string;
  title: string;
  kohortLabel: string;
  totalAvg?: string;
  xp: string;
  startDate: string;
  endDate: string;
  progress: number;
  progressText: string;
  desc: string;
  imageUrl: string;
  id: number;
  maxProgress: number;
  type: string;
}

const ContributionMain: React.FC<ContributionMainProps> = ({
  logoUrl,
  title,
  kohortLabel,
  totalAvg,
  xp,
  startDate,
  endDate,
  progress,
  progressText,
  desc,
  imageUrl,
  id,
  maxProgress,
  type,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`${PATH.CONTRIBUTION_DETAIL.replace(':contributionId', id.toString())}`, {
      state: {
        title,
        xp,
        imageUrl,
        logoUrl,
        startDate,
        endDate,
        desc,
        progress,
        maxProgress,
        type,
        id,
      },
    });
  };
  return (
    <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <ProjectTitleWrapper>
        <ProjectLogo src={logoUrl ? `${API_BASE_URL}/${logoUrl}` : defaultDealIcon} alt="Project Logo" />
        <ProjectTitle>{title}</ProjectTitle>
      </ProjectTitleWrapper>
      <MainContainer>
        <LeftSection>
          <XPInfoWrapper>
            <KohortLabel>{kohortLabel}</KohortLabel>
            <div>
              {kohortLabel === 'Solo' ? (
                <>
                  {/* Solo일 때 */}
                  <span className="total-avg">XP </span>
                  <span className="xp-value">{xp} XP</span>
                </>
              ) : (
                <>
                  {/* Kohort일 때 */}
                  <span className="total-avg">Total Avg </span>
                  <span className="xp-value">{totalAvg ? totalAvg : xp}</span>
                </>
              )}
            </div>
          </XPInfoWrapper>
          <Dates>
            {startDate} ~ {endDate}
          </Dates>
          <ProgressContainer>
            <ProgressBar $progress={progress} $maxProgress={maxProgress} />
          </ProgressContainer>
        </LeftSection>
        <RightSection>
          <BannerWrapper>
            <BannerImage src={imageUrl ? `${API_BASE_URL}/${imageUrl}` : defaultBannerImg} alt="Banner" />
          </BannerWrapper>
        </RightSection>
      </MainContainer>
    </div>
  );
};

export default ContributionMain;

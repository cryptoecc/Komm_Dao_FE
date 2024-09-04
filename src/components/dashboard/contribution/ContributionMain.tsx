import React from 'react';
import { images } from 'src/assets/contribution/images';
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

// ContributionMain 컴포넌트가 받을 props의 타입을 정의합니다.
interface ContributionMainProps {
  projectLogo: string;
  projectTitle: string;
  kohortLabel: string;
  totalAvg: string;
  xpValue: string;
  dates: string;
  progress: string;
  progressText: string;
  bannerImage: string;
}

const ContributionMain: React.FC<ContributionMainProps> = ({
  projectLogo,
  projectTitle,
  kohortLabel,
  totalAvg,
  xpValue,
  dates,
  progress,
  progressText,
  bannerImage,
}) => {
  return (
    <MainContainer>
      <LeftSection>
        <ProjectTitleWrapper>
          <ProjectLogo src={projectLogo} alt="Project Logo" />
          <ProjectTitle>{projectTitle}</ProjectTitle>
        </ProjectTitleWrapper>
        <XPInfoWrapper>
          <KohortLabel>{kohortLabel}</KohortLabel>
          <div>
            <span className="total-avg">Total Avg </span>
            <span className="xp-value">{xpValue}</span>
          </div>
        </XPInfoWrapper>
        <Dates>{dates}</Dates>
        <ProgressContainer>
          <ProgressBar>
            <div className="progress" style={{ width: progress }}></div>
          </ProgressBar>
          <ProgressText>{progressText}</ProgressText>
        </ProgressContainer>
      </LeftSection>
      <RightSection>
        <BannerWrapper>
          <BannerImage src={bannerImage} alt="Banner" />
        </BannerWrapper>
      </RightSection>
    </MainContainer>
  );
};

export default ContributionMain;

import { images } from 'src/assets/contribution/images';

import {
  MainContainer,
  HeaderSection,
  ProjectInfo,
  ProjectTitleWrapper,
  ProjectTitle,
  ProjectLogo,
  KohortLabel,
  Dates,
  XPInfoWrapper,
  ProgressContainer,
  ProgressBar,
  ProgressText,
  BannerImage,
  BannerWrapper,
  XPInfo,
} from './ContributionMain.style';

const ContributionMain = () => {
  return (
    <MainContainer>
      <HeaderSection>
        <ProjectInfo>
          <ProjectTitleWrapper>
            <ProjectLogo src={images.NIBIRU} alt="Project Logo" />
            <ProjectTitle>NIBIRU Community management Validator</ProjectTitle>
          </ProjectTitleWrapper>
          <XPInfoWrapper>
            <KohortLabel>Kohort only</KohortLabel>
            <XPInfo>
              <div className="total-avg">Total Avg</div>
              <div className="xp-value">2000 XP</div>
            </XPInfo>
          </XPInfoWrapper>
          <Dates>24/08/08 ~ 24/11/07</Dates>
          <ProgressContainer>
            <ProgressBar>
              <div className="progress" style={{ width: '82%' }}></div>
            </ProgressBar>
            <ProgressText>41 / 50</ProgressText>
          </ProgressContainer>
        </ProjectInfo>
        <BannerWrapper>
          <BannerImage src={images.NIBIRU_banner} alt="Banner" />
        </BannerWrapper>
      </HeaderSection>
    </MainContainer>
  );
};

export default ContributionMain;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardContainer,
  CardContent,
  CardImage,
  DateRange,
  ImageContainer,
  Logo,
  LogoAndTitle,
  ProgressBar,
  ProgressBarContainer,
  ProgressText,
  StatusText,
  Title,
  XPText,
} from './ContribuitonCard.style';
import { PATH } from 'src/constants/path';
import { API_BASE_URL } from 'src/utils/utils';
import defaultDealIcon from 'src/assets/deal/MYX.png';
import defaultBannerImg from 'src/assets/deal/DELEGATE_banner.png';

interface ContributionCardProps {
  title: string;
  xp: number;
  imageUrl: string;
  logoUrl: string;
  startDate: string;
  endDate: string;
  progress: number;
  maxProgress: number;
  desc: string;
  type?: string;
  id: number; // 각 카드의 고유 ID
}

const ContributionCard: React.FC<ContributionCardProps> = ({
  title,
  xp,
  imageUrl,
  logoUrl,
  startDate,
  endDate,
  progress,
  maxProgress,
  desc,
  type,
  id,
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
        progress,
        maxProgress,
        desc,
        type,
        id,
      },
    });
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <ImageContainer>
        <CardImage src={imageUrl ? `${API_BASE_URL}/${imageUrl}` : defaultBannerImg} alt={title} />
      </ImageContainer>
      <CardContent>
        {/* {type && <StatusText>{type}</StatusText>} */}
        <LogoAndTitle>
          <Logo src={logoUrl ? `${API_BASE_URL}/${logoUrl}` : defaultDealIcon} alt={`${title} Logo`} />
          <Title>{title}</Title>
        </LogoAndTitle>
        <XPText>{xp} XP</XPText>

        <DateRange>
          {startDate} ~ {endDate}
        </DateRange>
        <ProgressBarContainer>
          <ProgressBar $progress={progress} $maxProgress={maxProgress} />
        </ProgressBarContainer>
        <ProgressText>
          {progress} / {maxProgress}
        </ProgressText>
      </CardContent>
    </CardContainer>
  );
};

export default ContributionCard;

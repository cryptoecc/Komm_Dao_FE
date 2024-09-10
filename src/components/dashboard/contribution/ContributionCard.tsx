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

interface ContributionCardProps {
  title: string;
  xp: number;
  imageUrl: string;
  logoUrl: string;
  startDate: string;
  endDate: string;
  progress: number;
  maxProgress: number;
  statusText?: string;
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
  statusText,
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
        statusText,
      },
    });
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <ImageContainer>
        <CardImage src={imageUrl} alt={title} />
      </ImageContainer>
      <CardContent>
        {statusText && <StatusText>{statusText}</StatusText>}
        <LogoAndTitle>
          <Logo src={logoUrl} alt={`${title} Logo`} />
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

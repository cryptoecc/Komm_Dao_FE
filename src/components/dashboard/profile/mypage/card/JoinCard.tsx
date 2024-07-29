import { CardWrapper, CardContent } from '../card/JoinCard.style';
import exampleIcon from '../../../../../assets/modal/sidebarLogo.png';

interface CardProps {
  title: string;
  content: string;
  additionalText: string;
  isVisible: boolean;
  onHide: () => void;
  zIndex: number;
  transform: string;
  bgColor: string;
  boxShadow: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  additionalText,
  isVisible,
  onHide,
  zIndex,
  transform,
  bgColor,
  boxShadow,
}) => {
  return (
    <CardWrapper
      $isVisible={isVisible}
      $bgColor={bgColor}
      $boxShadow={boxShadow}
      $zIndex={zIndex}
      $transform={transform}
      onClick={onHide}
    >
      <CardContent>
        <img src={exampleIcon} alt="Icon" className="icon" />
        <div className="text title">{title}</div>
        <div className="text content">{content}</div>
        <div className="additional-text">{additionalText}</div>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;

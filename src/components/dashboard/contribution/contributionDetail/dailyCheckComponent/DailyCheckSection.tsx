import React from 'react';
import { DailyCheckWrapper, DailyCheckButton, DailyIcon } from '../ContributionDetail.style'; // 스타일을 공유하거나 새로 정의합니다.
import dailyIcon from 'src/assets/contribution/event_available.svg';

interface DailyCheckSectionProps {
  onDailyCheck: () => void;
  status: string;
  limit: string;
}

const DailyCheckSection: React.FC<DailyCheckSectionProps> = ({ onDailyCheck, status, limit }) => {
  const isDisabled = status === 'Y' || limit === 'Y'; // status 또는 limit가 'Y'일 때 비활성화

  return (
    <DailyCheckWrapper>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',

          gap: '15px',
        }}
      >
        <DailyIcon src={dailyIcon} />
        <h3>Daily Check-in</h3>
      </div>

      <DailyCheckButton
        onClick={!isDisabled ? onDailyCheck : undefined} // isDisabled가 false일 경우에만 클릭 가능
        disabled={isDisabled} // isDisabled가 true일 경우 버튼 비활성화
        style={{
          backgroundColor: isDisabled ? '#FFF' : '#6a5feb', // isDisabled가 true일 경우 버튼 색상 변경
          color: isDisabled ? '#6A5FEB' : '#fff', // isDisabled가 true일 경우 텍스트 색상 변경
          cursor: isDisabled ? 'not-allowed' : 'pointer', // isDisabled가 true일 경우 커서 모양 변경
          border: isDisabled ? '2px solid var(--Purple-900, #6A5FEB)' : 'none',
        }}
      >
        {isDisabled ? 'Done' : 'Check-in'} {/* isDisabled가 true일 경우 텍스트 변경 */}
      </DailyCheckButton>
    </DailyCheckWrapper>
  );
};

export default DailyCheckSection;

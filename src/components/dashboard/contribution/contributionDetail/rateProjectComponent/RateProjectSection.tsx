import React, { useState, useEffect } from 'react';
import { RateCheckButton, RateCheckWrapper, RateIcon } from './RateProjectSection.style'; // 스타일을 공유하거나 새로 정의합니다.
import rateIcon from 'src/assets/contribution/Rateproject.svg';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅을 가져옵니다.
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { API_BASE_URL } from 'src/utils/utils';
import axios from 'axios';

interface RateProjectProps {
  title?: string;
  xp?: number;
  progress?: number;
  maxProgress?: number;
  type?: string;
  desc?: string;
  id?: string;
  pjtId?: string;
  onRateConfirmChange: (rateConfirm: string) => void; // 부모에서 받은 props
  isReloaded: boolean; // 부모로부터 받은 상태
}

const RateProjectSection: React.FC<RateProjectProps> = ({ id, pjtId, type, xp, onRateConfirmChange, isReloaded }) => {
  const navigate = useNavigate(); // 네비게이트 함수 생성
  const [userData, setUserData] = useState<any>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [rateConfirm, setRateConfirm] = useState<string>('');

  const userWallet = useSelector((state: RootState) => state.user.wallet_addr);
  const userId = useSelector((state: RootState) => state.user.user_id);

  const handleButtonClick = () => {
    navigate('/mainboard/discover'); // Verify일 경우 discover 페이지로 이동
  };

  const getDiscoverHistory = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/user/profile/${userWallet}`);
      setUserData(response.data); // 사용자 데이터 저장
      console.log(response.data);

      if (response.data.claimedProjectsCount) {
        const participateMission = await axios.post(`${API_BASE_URL}/api/contribution/rate-check`, {
          cont_id: id,
          user_id: userId,
          cont_type: type,
          rate_project: response.data.claimedProjectsCount,
        });

        if (participateMission.status === 201) {
          console.log('UserContribution created successfully');
        } else if (participateMission.status === 200) {
          console.log('UserContribution already exists');
        }
      }

      if (response.data.claimedProjectsCount >= 10) {
        setIsDisabled(true);
      }

      rateConfirmCheck();
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUserData({
        profileImage: 'default-profile.png',
        name: 'Default User',
        expertise: 'Unknown',
        xp: 0, // 백엔드에서 넘어온 cur_xp가 xp로 변환되었는지 확인
        stats: {
          deal: 0,
          discover: 0,
          contribution: 0,
          governance: 0,
        },
      });
    }
  };

  useEffect(() => {
    getDiscoverHistory();
  }, [isReloaded]);

  const rateConfirmCheck = async () => {
    try {
      const check = await axios.post(`${API_BASE_URL}/api/contribution/rate-check-confirm`, {
        cont_id: id,
        user_id: userId,
        cont_type: type,
      });

      if (check.data && check.data.claim_yn) {
        setRateConfirm(check.data.claim_yn);
        onRateConfirmChange(check.data.claim_yn); // 부모 컴포넌트로 값 전달
      } else {
        setRateConfirm('N');
        onRateConfirmChange('N'); // 부모 컴포넌트로 값 전달
      }
    } catch (error) {
      console.error('Error fetching invite details:', error);
    }
  };

  if (!userData) {
    return <div>Loading...</div>; // user 또는 userData가 없을 때 로딩 처리
  }

  return (
    <RateCheckWrapper>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',

          gap: '15px',
        }}
      >
        <RateIcon src={rateIcon} />
        <h3>Rate projects in Discovery</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'end', gap: '15px', alignItems: 'center' }}>
        <div>
          <p style={{ color: '#6A5FEB', fontSize: '16px', fontWeight: '600' }}>{userData.claimedProjectsCount}/10</p>
        </div>
        <RateCheckButton onClick={handleButtonClick} isDisabled={isDisabled}>
          {isDisabled ? 'Done' : 'Verify'}
        </RateCheckButton>
      </div>
    </RateCheckWrapper>
  );
};

export default RateProjectSection;

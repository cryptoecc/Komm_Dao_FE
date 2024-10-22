import React from 'react';
import { Text, SubText, Wrap, Button } from './finish.style';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SmileIcon } from 'src/assets/finish/sentiment_satisfied.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from 'src/store/user/UserSlice';
import { RootState } from 'src/store/store';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';

interface StepProps {
  onComplete: () => void;
  selectedImage: File | null;
}

const Finish: React.FC<StepProps> = ({ onComplete, selectedImage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleSubmit = async () => {
    try {
      const currentDate = new Date().toISOString();
      // dispatch(setUserData({ reg_date: currentDate }));

      const formData = new FormData();

      formData.append('user_name', user.user_name);
      formData.append('email_addr', user.email_addr);
      formData.append('wallet_addr', user.wallet_addr);
      formData.append('expertise', user.expertise);
      formData.append('bio', user.bio);
      formData.append('value_add', user.value_add || '');
      formData.append('reg_date', currentDate || '');
      formData.append('appr_status', 'PENDING');
      formData.append('cur_xp', user.cur_xp.toString());
      formData.append('last_login_date', user.last_login_date || '');
      formData.append('nft_link', user.nft_link || '');

      if (selectedImage) {
        console.log(selectedImage);
        formData.append('user_image_link', selectedImage);
      }

      formData.append('voting_power', user.voting_power.toString());
      formData.append('activate_yn', user.activate_yn);

      const response = await axios.post(`${API_BASE_URL}/api/user/submit`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      dispatch(setUserData(response.data));
      navigate('/'); // 메인 페이지로 이동
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <Wrap>
        <Text>Congratulations!</Text>
        <SmileIcon />
      </Wrap>
      <br />
      <SubText>You're all signed up! Our team will</SubText>
      <SubText>review your membership information </SubText>
      <SubText>and notify you once it's approved.</SubText>
      <Button onClick={handleSubmit}>Start!</Button>
    </div>
  );
};

export default Finish;

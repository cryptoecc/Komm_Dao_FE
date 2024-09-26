import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';

const CallbackPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getAccessToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const authorizationCode = params.get('code'); // Authorization Code

      if (authorizationCode) {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/user/twitter/access-token?code=${authorizationCode}`);
          const { accessToken } = response.data;

          console.log('Access Token:', accessToken);

          // 이제 accessToken을 사용하여 트위터 API를 호출하거나 상태를 업데이트할 수 있습니다.
          navigate('/'); // 완료 후 메인 페이지로 리다이렉트
        } catch (error) {
          console.error('Error getting access token:', error);
        }
      }
    };

    getAccessToken();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default CallbackPage;

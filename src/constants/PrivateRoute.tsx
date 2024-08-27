import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null); // 토큰의 유효성을 저장
  const token = localStorage.getItem('token');

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          'http://localhost:4000/api/admin/verify-token', // 토큰 검증을 위한 백엔드 엔드포인트
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.data.success) {
          setIsTokenValid(true); // 토큰이 유효함
        } else {
          setIsTokenValid(false); // 토큰이 유효하지 않음
        }
      } catch (error) {
        setIsTokenValid(false); // 에러 발생 시 토큰이 유효하지 않음
      }
    };

    if (token) {
      verifyToken(); // 토큰이 존재하면 검증 수행
    } else {
      setIsTokenValid(false); // 토큰이 없으면 바로 유효하지 않음으로 설정
    }
  }, [token]);

  if (isTokenValid === null) {
    // 토큰 검증이 완료되지 않았을 때 로딩 상태 표시
    return <div>Loading...</div>;
  }

  if (!isTokenValid) {
    // 토큰이 유효하지 않으면 로그인 페이지로 리다이렉트
    return <Navigate to="/kommdao-admin" />;
  }

  // 토큰이 유효하면 자식 컴포넌트를 렌더링
  return <>{children}</>;
};

export default PrivateRoute;

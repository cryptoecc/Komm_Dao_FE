import styled from 'styled-components';

// Styled components (CSS 스타일)
export const WalletContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const WalletButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 8px;
  margin-right: 55px;
`;

export const WalletIcon = styled.img`
  font-size: 24px;
  margin-right: 8px;
`;

export const Address = styled.span`
  position: absolute;
  left: 55px;
  bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  left: -20px;
  width: 200px;
  background-color: #fff;
  border: 5px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-weight: bold;
`;

export const WalletAddress = styled.span`
  font-size: 14px;
  color: #666;
`;

export const IconWrapper = styled.div`
  margin-right: 8px; /* 텍스트와 아이콘 간격 조절 */
  display: flex;
  align-items: center;

  img {
    width: 24px; /* 아이콘 크기 */
    height: 24px;
  }
`;

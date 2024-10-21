import React, { useState } from 'react';
import {
  WalletContainer,
  WalletButton,
  WalletIcon,
  WalletAddress,
  Address,
  DropdownItem,
  DropdownMenu,
  ProfileImage,
  UserInfo,
  UserName,
  IconWrapper,
} from './WalletComponent.styls';
import { images } from 'src/assets/dashboard/images';
import FaWallet from 'src/assets/main/business.png';
import ProfileIcon from 'src/assets/main/account_circle.svg';
import LogoutIcon from 'src/assets/main/logout.svg';
import { API_BASE_URL } from 'src/utils/utils';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'src/store/user/UserSlice';
import { persistor } from 'src/store/store';

// Wallet 컴포넌트의 Props 정의
interface WalletProps {
  address: string; // 사용자의 지갑 주소
  profileImage?: string; // 사용자의 프로필 이미지
  username: string; // 사용자의 이름
  expertise: string;
}

// 지갑 주소를 축약된 형식으로 보여주기
const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const Wallet: React.FC<WalletProps> = ({ address, profileImage, username, expertise }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    persistor.purge();
    localStorage.removeItem('persist:root');
    navigate('/');
  };

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfileClick = () => {
    navigate('/mainboard/dashboard/profile');
  };

  return (
    <WalletContainer>
      <WalletButton onClick={toggleDropdown}>
        <WalletIcon src={FaWallet} />
        <Address>{shortenAddress(address)}</Address>
      </WalletButton>

      {/* 드롭다운 메뉴 */}
      {isDropdownOpen && (
        <DropdownMenu>
          <DropdownItem>
            <ProfileImage
              src={profileImage ? `${API_BASE_URL}/${profileImage}` : images.profileDefaultIcon}
              alt="Profile"
            />
            <UserInfo>
              <UserName>{username}</UserName>
              <WalletAddress>{expertise}</WalletAddress>
            </UserInfo>
          </DropdownItem>
          <DropdownItem onClick={handleLogout}>
            <IconWrapper>
              <img src={LogoutIcon} alt="Logout Icon" />
            </IconWrapper>
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      )}
    </WalletContainer>
  );
};

export default Wallet;

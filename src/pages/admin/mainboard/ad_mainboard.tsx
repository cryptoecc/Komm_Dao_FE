import Sidebar from '../mainboard/sidebar/ad_sidebar';
import { MainContainer } from './ad_mainboard.style';
import { Outlet } from 'react-router-dom';

const AdminMainboard = () => {
  return (
    <MainContainer>
      <Sidebar />
      <Outlet />
    </MainContainer>
  );
};

export default AdminMainboard;

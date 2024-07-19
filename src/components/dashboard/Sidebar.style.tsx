// src/components/dashboard/dashboard.style.tsx
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #ffffff;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  color: #fff;
  text-decoration: none;

  &.active {
    background-color: #444;
  }

  &:hover {
    background-color: #555;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
`;

export const Name = styled.div`
  font-size: 1rem;
`;

export const Content = styled.div`
  flex-grow: 1;
  background-color: #f4f4f4;
  padding: 20px;
`;

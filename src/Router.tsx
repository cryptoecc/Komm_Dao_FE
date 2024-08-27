// src/Router.tsx
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PATH } from './constants/path';
import Main from './pages/main/main';
import MainBoard from './pages/mainboard/mainBoard';
import Dashboard from './pages/mainboard/dashboard';
import Deal from './pages/mainboard/deal';
import Discover from './pages/mainboard/discover';
import DiscoverDetails from './pages/mainboard/discover/discoverDtails';
import Contribution from './pages/mainboard/contribution';
import Governance from './pages/mainboard/governance';
import SignupPage from './pages/register/SignupPage';
import AdminLogin from './pages/admin/admin-login/adminLogin';
import AdminMainboard from './pages/admin/mainboard/ad_mainboard';
import UserApplicants from './pages/admin/mainboard/user/applicants/userApplicant';
import UserCommitte from './pages/admin/mainboard/user/committes/userCommitte';
import UserKohort from './pages/admin/mainboard/user/kohorts/userKohort';
import UserMember from './pages/admin/mainboard/user/members/userMember';
import ProfileMyPage from './pages/mainboard/dashboard/profile';
import ProfileUpdate from './pages/mainboard/dashboard/profile/profile_update';
import DealDtailsPage from './pages/mainboard/deal/dealDtails';
import PrivateRoute from './constants/PrivateRoute';
import Test from './pages/test';
import DealInterest from './pages/mainboard/deal/dealDtails/dealInterest'; // Correct the path to your new component
import DiscoverCalendar from './pages/mainboard/discover/discoverCalendar';
import Proposals from './pages/mainboard/governance/proposals';
import Delegates from './pages/mainboard/governance/delegates';
import Kohort from './pages/mainboard/governance/kohort';
import SpecProposal from './pages/mainboard/governance/proposals/SpecProposal';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: PATH.MAIN,
      element: <Main />,
    },
    {
      path: PATH.MAINBOARD,
      element: <MainBoard />,
      children: [
        { path: PATH.DASHBOARD, element: <Dashboard /> },
        { path: PATH.DEAL, element: <Deal /> },
        { path: PATH.DEAL_DETAILS, element: <DealDtailsPage /> },
        { path: PATH.DEAL_INTEREST, element: <DealInterest /> },
        { path: PATH.DISCOVER, element: <Discover /> },
        { path: PATH.GOVERNANCE, element: <Governance />, },
        { path: PATH.PROPOSAL, element: <SpecProposal />, },
        { path: PATH.DISCOVER_DETAILS, element: <DiscoverDetails /> },
        { path: PATH.DISCOVER_CALENDAR, element: <DiscoverCalendar /> },
        { path: PATH.CONTRIBUTION, element: <Contribution /> },
        { path: PATH.PROFILE, element: <ProfileMyPage /> },
        { path: PATH.PROFILE_UPDATE, element: <ProfileUpdate /> },
      ],
    },
    { path: PATH.REGISTER, element: <SignupPage /> },
    { path: PATH.ADMINLOGIN, element: <AdminLogin /> },
    {
      path: PATH.ADMINMAINBOARD,
      element: (
        <PrivateRoute>
          <AdminMainboard />
        </PrivateRoute>
      ),
      children: [
        { path: PATH.USERAPPLICANTS, element: <UserApplicants /> },
        { path: PATH.USERMEMBERS, element: <UserMember /> },
        { path: PATH.USERCOMMITTES, element: <UserCommitte /> },
        { path: PATH.USERKOHORTS, element: <UserKohort /> },
      ],
    },
    { path: 'test', element: <Test /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

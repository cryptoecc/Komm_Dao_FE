import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 포인트 히스토리 데이터 타입 정의
interface PointsData {
  date: string;
  participation: string;
  activity: string;
  xpEarned: number;
  transactionId: string;
}

interface UserState {
  user_id: number;
  user_name: string;
  email_addr: string;
  wallet_addr: string;
  expertise: string;
  bio: string;
  value_add: string;
  reg_date: string | null;
  appr_status: string;
  cur_xp: number;
  last_login_date: string | null;
  nft_link: string;
  user_image_preview: string;
  user_image_link: File | null;
  voting_power: number;
  activate_yn: string;
  isWalletConnected: boolean;
  pointHistory: PointsData[]; // 포인트 히스토리 추가
  claimedProjectsCount: number;
}

const initialState: UserState = {
  user_id: 0,
  user_name: '',
  email_addr: '',
  wallet_addr: '',
  expertise: '',
  bio: '',
  value_add: '',
  reg_date: null,
  appr_status: '',
  cur_xp: 0,
  last_login_date: null,
  nft_link: '',
  user_image_preview: '',
  user_image_link: null,
  voting_power: 0,
  activate_yn: 'N',
  isWalletConnected: false,
  pointHistory: [], // 초기 포인트 히스토리 배열
  claimedProjectsCount: 0, // 초기 값 설정
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    connectWallet: (state, action: PayloadAction<string>) => {
      state.wallet_addr = action.payload;
      state.isWalletConnected = true;
    },
    disconnectWallet: (state) => {
      state.wallet_addr = '';
      state.isWalletConnected = false;
    },
    setUserData: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email_addr = action.payload;
    },
    // 포인트 히스토리 설정 액션 추가
    setPointHistory: (state, action: PayloadAction<PointsData[]>) => {
      state.pointHistory = action.payload;
    },
    // 로그아웃 액션
    logoutUser: (state) => {
      return { ...initialState }; // 초기 상태로 되돌림
    },
  },
});

export const { connectWallet, disconnectWallet, setEmail, setUserData, logoutUser } = userSlice.actions;
export default userSlice.reducer;

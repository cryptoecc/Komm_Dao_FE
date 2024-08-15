import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/UserSlice';
import AdminSlice from './admin/AdminSlice';

const store = configureStore({
  reducer: {
    admin: AdminSlice,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // `localStorage`에 상태를 저장합니다.
import userReducer from './user/UserSlice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';
import AdminSlice from './admin/AdminSlice';

// `redux-persist` 설정
const persistConfig = {
  key: 'root', // 상태 저장의 key (localStorage에 저장될 때의 이름)
  storage, // `localStorage`에 상태를 저장
};

const adminPersistConfig = {
  key: 'admin',
  storage, // admin 상태도 localStorage에 저장
};

const persistedAdminReducer = persistReducer(adminPersistConfig, AdminSlice);

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
    admin: persistedAdminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // 특정 redux-persist 관련 액션에 대해서는 비직렬화 경고를 무시하도록 설정
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

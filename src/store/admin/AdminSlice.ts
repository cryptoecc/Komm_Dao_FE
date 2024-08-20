import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ACTIONS } from './enum';

interface AdminState {
  loading: boolean;
}

const initialState: AdminState = {
  loading: false,
};

const adminSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    [ACTIONS.REQUEST_PENDING]: (state, action: PayloadAction<string>) => {
      state.loading = true;
    },
    [ACTIONS.REQUEST_SUCCESS]: (state, action: PayloadAction<string>) => {
      state.loading = false;
    },
    [ACTIONS.REQUEST_FAIL]: (state, action: PayloadAction<string>) => {
      state.loading = false;
    },
  },
});

export default adminSlice.reducer;

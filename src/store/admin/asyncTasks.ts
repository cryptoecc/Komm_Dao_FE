import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestFail, requestPending, requestSuccess } from './actions';

export const safeMint = createAsyncThunk('admin/safeMint', async (_, { dispatch, rejectWithValue }) => {
  try {
    dispatch(requestPending());

    // ...
    dispatch(requestSuccess());
  } catch (err) {
    dispatch(requestFail());
    rejectWithValue(err);
  }
});

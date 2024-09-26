import { createAction } from '@reduxjs/toolkit';
import { ACTIONS } from './enum';

export const requestPending = createAction(ACTIONS.REQUEST_PENDING);
export const requestSuccess = createAction(ACTIONS.REQUEST_SUCCESS);
export const requestFail = createAction(ACTIONS.REQUEST_FAIL);

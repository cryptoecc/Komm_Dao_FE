import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestFail, requestPending, requestSuccess } from './actions';
import { provider } from 'src/configs/rest/api';
import { endpoints } from 'src/configs/rest/endpoints';
import { CONTRACTS, FUNCTIONS } from 'src/constants/contracts';
import { getAbiStrForFunction, sendTransaction } from 'src/configs/contract_calls';
import { ABI } from 'src/constants/contracts';
import Web3 from 'web3';

export const safeMint = createAsyncThunk('admin/safeMint', async (_, { dispatch, rejectWithValue }) => {
  try {
    dispatch(requestPending());
    if (window.ethereum) {
      const {
        data: { address: contract_address },
      } = await provider.get(`${endpoints.ADMIN_CONTRACT_SINGLE}/${CONTRACTS.ORIGAMIMEMBERSHIPTOKENPROXY}`);
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      const wallet_address = accounts[0];
      const abistr = await getAbiStrForFunction({
        contract_address,
        abiKind: ABI.ORIGAMIMEMBERSHIPTOKEN_ABI,
        methodName: FUNCTIONS.SAFEMINT,
        args: [wallet_address],
      });
      const txhash = await sendTransaction({ from: wallet_address, to: contract_address, data: abistr });
      console.log({ abistr, txhash });
    }

    // ...
    dispatch(requestSuccess());
  } catch (err) {
    dispatch(requestFail());
    rejectWithValue(err);
  }
});

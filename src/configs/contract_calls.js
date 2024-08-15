import web3 from '../utils/web3';
import { MAP_STR_ABI } from './abi-map';

export async function getAbiStrForFunction(jdata) {
  try {
    let { contract_address, abiKind, methodName, args } = jdata;
    contract_address = contract_address.toLowerCase();
    const contract = new web3.eth.Contract(MAP_STR_ABI[abiKind], contract_address);
    let call;
    if (args.length > 0) {
      call = contract.methods[methodName](...args);
    } else {
      call = contract.methods[methodName]();
    }
    return call.encodeABI();
  } catch (err) {
    console.log(err);
  }
}

export async function signTransaction(jdata) {
  try {
    let { from, to, data, value, gas } = jdata;
    let txObject = {
      from,
      to,
      data,
      value: value || '0x00',
      gas: gas || '250000',
    };
    const accounts = await web3.eth.requestAccounts();
    const account = accounts[0];
    const signedTx = await web3.eth.signTransaction(txObject, account);
    return signedTx;
  } catch (err) {
    console.log(err);
  }
}

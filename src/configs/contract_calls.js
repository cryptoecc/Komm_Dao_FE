import Web3 from 'web3';
import { MAP_STR_ABI } from './abi-map';
const web3 = new Web3(window.ethereum);

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

export async function sendTransaction(jdata) {
  try {
    let { from, to, data, value } = jdata;
    const gasPrice = await web3.eth.getGasPrice();
    const gas = await web3.eth.estimateGas({
      from,
      to,
      data,
    });
    let txObject = {
      from,
      to,
      data,
      gas,
      gasPrice,
      value: value || '0x00',
    };
    const signedTx = await web3.eth.sendTransaction(txObject);
    return signedTx;
  } catch (err) {
    console.log(err);
  }
}

import Web3 from 'web3';

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
} else {
  console.error('MetaMask is not installed');
}

// 지갑연결
export const connectWallet = async () => {
  try {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];
      return address;
    } else {
      console.error('MetaMask is not installed');
    }
  } catch (error) {
    console.error('Connection error:', error);
    throw error;
  }
};

// 네트워크 전환
export const switchToOptimism = async () => {
  try {
    if (window.ethereum) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0xa', // 옵티미즘 네트워크의 체인 ID는 10입니다. 16진수로 0xa입니다.
            chainName: 'Optimism',
            nativeCurrency: {
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            rpcUrls: ['https://mainnet.optimism.io'],
            blockExplorerUrls: ['https://optimistic.etherscan.io'],
          },
        ],
      });
    } else {
      console.error('MetaMask is not installed');
    }
  } catch (error) {
    console.error('Network switch error:', error);
    throw error;
  }
};

// 지갑연결해지
export const disconnectWallet = async () => {
  try {
    if (window.ethereum) {
      // await window.ethereum.request({
      //   method: 'wallet_requestPermissions',
      //   params: [
      //     {
      //       eth_accounts: {},
      //     },
      //   ],
      // });
      await window.ethereum.request({
        method: 'wallet_revokePermissions',
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
    } else {
      console.error('MetaMask is not installed');
    }
  } catch (error) {
    console.error('Disconnection error:', error);
    throw error;
  }
};

// 서명 요청
export const signMessage = async (message, address) => {
  try {
    if (web3) {
      const signature = await web3.eth.personal.sign(message, address, '');
      return signature;
    } else {
      console.error('Web3 is not initialized');
    }
  } catch (error) {
    console.error('Signing error:', error);
    throw error;
  }
};

// 서명 검증
export const verifyMessage = (message, signature) => {
  try {
    if (web3) {
      const recoveredAddress = web3.eth.accounts.recover(message, signature);
      return recoveredAddress;
    } else {
      console.error('Web3 is not initialized');
    }
  } catch (error) {
    console.error('Verification error:', error);
    throw error;
  }
};

export default web3;

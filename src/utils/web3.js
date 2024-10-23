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

// Sepolia 네트워크 전환
export const switchToSepolia = async () => {
  try {
    if (window.ethereum) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0xaa36a7', // Sepolia 테스트 네트워크의 체인 ID는 11155111입니다. 16진수로는 0xaa36a7입니다.
            chainName: 'Ethereum Testnet Sepolia',
            nativeCurrency: {
              name: 'SepoliaETH',
              symbol: 'ETH',
              decimals: 18,
            },
            rpcUrls: ['https://sepolia.infura.io/v3/b9b632f9e59c480fb0f81e446afdfb85'], // 실제 사용 시 Infura의 프로젝트 ID를 넣어야 합니다.
            blockExplorerUrls: ['https://sepolia.etherscan.io'],
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

export const switchToHolesky = async () => {
  try {
    if (window.ethereum) {
      const chainId = '0x4268'; // Holesky 네트워크의 체인 ID (17000의 16진수)

      // 먼저 네트워크 전환을 시도
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId }], // 체인 ID만으로 네트워크 전환
        });
      } catch (error) {
        // 네트워크가 추가되지 않은 경우에만 `wallet_addEthereumChain` 호출
        if (error.code === 4902) {
          // 네트워크가 추가되어 있지 않다는 오류 코드 (4902)
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x4268', // 17000의 16진수
                  chainName: 'Holesky',
                  nativeCurrency: {
                    name: 'HolETH',
                    symbol: 'ETH',
                    decimals: 18,
                  },
                  rpcUrls: ['https://ethereum-holesky-rpc.publicnode.com'],
                  blockExplorerUrls: ['https://holesky.etherscan.io'],
                },
              ],
            });
          } catch (addError) {
            console.error('네트워크 추가 오류:', addError);
            throw addError;
          }
        } else {
          // 그 외 네트워크 전환 오류 처리
          console.error('네트워크 전환 오류:', error);
          throw error;
        }
      }
    } else {
      console.error('MetaMask가 설치되어 있지 않습니다.');
    }
  } catch (error) {
    console.error('switchToHolesky 실행 중 오류:', error);
    throw error;
  }
};

//https://holesky.infura.io/v3/d6ecd425e13048f790b9697210cf106

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

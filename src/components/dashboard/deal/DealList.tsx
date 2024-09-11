import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DealCard from './DealCard';
import { images } from '../../../assets/deal/images';

interface Deal {
  deal_id: number;
  deal_name: string;
  description: string;
  summary: string;
  final_amount: number;
  percentage: number;
  deal_logo_url: string;
  deal_banner_url: string; // Added banner_image_url property
  end_date: string;
}

interface DealListProps {
  deals: Deal[];
  onDealClick: (deal: Deal) => void; // Accept onDealClick as a prop
}

const DealListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    gap: 15px;
  }
`;

const DealWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  max-width: 500px;

  @media (max-width: 767px) {
    width: 90vw;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 70vw;
  }
`;

const fakeDeals: Deal[] = [
  {
    deal_id: 1,
    deal_name: 'Sample Deal 1',
    description:
      '기업 소개 MYX Finance는 탈중앙화 선물 거래소(Perpetual DEX)로, 제로 슬리피지 및 최대 125배 레버리지를 지원합니다. 이 플랫폼은 Matching Pool Mechanism(MPM)을 통해 업계 최저의 경쟁력 있는 거래 수수료를 제공하며, 중앙화 거래소(CEX) 수준의 거래 환경을 조성합니다. MYX Finance의 토큰 보유자와 유동성 공급자(LPs)는 MYX의 Keeper 시스템에서 스마트 컨트랙트의 자율성과 보안을 보호하는 데 중요한 역할을 하며, 그 대가로 보상을 받을 수 있습니다. 창업자 Mark Zhang (CEO): 전 OKT Chain 총괄, Huobi Futures COO John Jiang (CTO): 전 BCH 핵심 개발자 Ryan Zhang (CSO): 전 Huobi 재무 총괄 투자사 Sequioa Capital China (HongShan), OKX Ventures, Redpoint China, HashKey Capital, Foresight Ventures, Lecca Ventures, GSR Markets, Alti5, Leland Ventures, Cypher Capital, Bing Ventures 등',
    summary: 'asdasdasdasd',
    final_amount: 100000,
    percentage: 50,
    deal_logo_url: `${images.MYX}`,
    deal_banner_url: `${images.MYX_bannerr}`, // Add banner image
    end_date: '2024-08-31',
  },
  {
    deal_id: 2,
    deal_name: 'Sample Deal 2',
    description: 'This is a description for Sample Deal 2.',
    summary: 'asdasdasdasd',
    final_amount: 200000,
    percentage: 75,
    deal_logo_url: `${images.OG}`,
    deal_banner_url: `${images.OG_banner}`, // Add banner image
    end_date: '2024-09-30',
  },
  {
    deal_id: 3,
    deal_name: 'Sample Deal 3',
    description: 'This is a description for Sample Deal 3.',
    summary: 'asdasdasdasd',
    final_amount: 300000,
    percentage: 90,
    deal_logo_url: `${images.DELEGATE}`,
    deal_banner_url: `${images.DELEGATE_banner}`, // Add banner image
    end_date: '2024-10-31',
  },
  {
    deal_id: 4,
    deal_name: 'Sample Deal 4',
    description: 'This is a description for Sample Deal 3.',
    summary: 'asdasdasdasd',
    final_amount: 300000,
    percentage: 90,
    deal_logo_url: `${images.EXO}`,
    deal_banner_url: `${images.EXO_banner}`, // Add banner image
    end_date: '2024-10-31',
  },
];

const DealList: React.FC<DealListProps> = ({ deals = fakeDeals, onDealClick }) => {
  const [dealData, setDealData] = useState<Deal[]>(deals);
  console.log(deals);
  useEffect(() => {
    // 만약 deals가 비어있거나 undefined라면 fakeDeals로 설정
    if (!deals || deals.length === 0) {
      setDealData(fakeDeals);
    } else {
      setDealData(deals);
    }
  }, [deals]);

  return (
    <DealListContainer>
      {dealData.map((deal) => (
        <DealWrapper key={deal.deal_id} onClick={() => onDealClick(deal)}>
          <DealCard deal={deal} />
        </DealWrapper>
      ))}
    </DealListContainer>
  );
};
export default DealList;

// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import DealCard from './DealCard';
// import { images } from '../../../assets/deal/images';

// interface Deal {
//   deal_id: number;
//   deal_name: string;
//   deal_desc: string;
//   final_amount: number;
//   percentage: number;
//   deal_image_url: string;
//   banner_image_url: string; // Added banner_image_url property
//   start_date: string;
//   end_date: string;
// }

// interface DealListProps {
//   deals: Deal[];
//   onDealClick: (deal: Deal) => void; // Accept onDealClick as a prop
// }

// const DealListContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 40px;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 767px) {
//     gap: 15px;
//   }
// `;

// const DealWrapper = styled.div`
//   flex: 1 1 auto;
//   display: flex;
//   justify-content: center;
//   max-width: 500px;

//   @media (max-width: 767px) {
//     width: 90vw;
//   }

//   @media (min-width: 768px) and (max-width: 1023px) {
//     width: 70vw;
//   }
// `;

// const fakeDeals: Deal[] = [
//   {
//     deal_id: 1,
//     deal_name: 'Sample Deal 1',
//     deal_desc:
//       '기업 소개 MYX Finance는 탈중앙화 선물 거래소(Perpetual DEX)로, 제로 슬리피지 및 최대 125배 레버리지를 지원합니다. 이 플랫폼은 Matching Pool Mechanism(MPM)을 통해 업계 최저의 경쟁력 있는 거래 수수료를 제공하며, 중앙화 거래소(CEX) 수준의 거래 환경을 조성합니다. MYX Finance의 토큰 보유자와 유동성 공급자(LPs)는 MYX의 Keeper 시스템에서 스마트 컨트랙트의 자율성과 보안을 보호하는 데 중요한 역할을 하며, 그 대가로 보상을 받을 수 있습니다. 창업자 Mark Zhang (CEO): 전 OKT Chain 총괄, Huobi Futures COO John Jiang (CTO): 전 BCH 핵심 개발자 Ryan Zhang (CSO): 전 Huobi 재무 총괄 투자사 Sequioa Capital China (HongShan), OKX Ventures, Redpoint China, HashKey Capital, Foresight Ventures, Lecca Ventures, GSR Markets, Alti5, Leland Ventures, Cypher Capital, Bing Ventures 등',
//     final_amount: 100000,
//     percentage: 50,
//     deal_image_url: `${images.MYX}`,
//     banner_image_url: `${images.MYX_bannerr}`, // Add banner image
//     start_date: '2024-08-01',
//     end_date: '2024-08-31',
//   },
//   {
//     deal_id: 2,
//     deal_name: 'Sample Deal 2',
//     deal_desc: 'This is a description for Sample Deal 2.',
//     final_amount: 200000,
//     percentage: 75,
//     deal_image_url: `${images.OG}`,
//     banner_image_url: `${images.OG_banner}`, // Add banner image
//     start_date: '2024-09-01',
//     end_date: '2024-09-30',
//   },
//   {
//     deal_id: 3,
//     deal_name: 'Sample Deal 3',
//     deal_desc: 'This is a description for Sample Deal 3.',
//     final_amount: 300000,
//     percentage: 90,
//     deal_image_url: `${images.DELEGATE}`,
//     banner_image_url: `${images.DELEGATE_banner}`, // Add banner image
//     start_date: '2024-10-01',
//     end_date: '2024-10-31',
//   },
//   {
//     deal_id: 4,
//     deal_name: 'Sample Deal 4',
//     deal_desc: 'This is a description for Sample Deal 3.',
//     final_amount: 300000,
//     percentage: 90,
//     deal_image_url: `${images.EXO}`,
//     banner_image_url: `${images.EXO_banner}`, // Add banner image
//     start_date: '2024-10-01',
//     end_date: '2024-10-31',
//   },
//   {
//     deal_id: 5,
//     deal_name: 'Sample Deal 4',
//     deal_desc: 'This is a description for Sample Deal 3.',
//     final_amount: 300000,
//     percentage: 90,
//     deal_image_url: `${images.MYX}`,
//     banner_image_url: `${images.MYX_bannerr}`, // Add banner image
//     start_date: '2024-10-01',
//     end_date: '2024-10-31',
//   },
// ];

// const DealList: React.FC<DealListProps> = ({ deals, onDealClick }) => {
//   const [dealData, setDealData] = useState<Deal[]>(deals);

//   useEffect(() => {
//     // Use fake data if no deals are provided
//     if (dealData.length === 0) {
//       setDealData(fakeDeals);
//     }
//   }, [dealData]);

//   return (
//     <DealListContainer>
//       {dealData.map((deal) => (
//         <DealWrapper key={deal.deal_id} onClick={() => onDealClick(deal)}>
//           <DealCard deal={deal} />
//         </DealWrapper>
//       ))}
//     </DealListContainer>
//   );
// };

// export default DealList;

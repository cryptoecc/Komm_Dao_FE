import styled from 'styled-components';

export const GovernanceContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const MainSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 27px;
  width: 100%;
`;
export const SubSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProposalStats = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 5px;
`;
export const H1 = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #404040
  flex-shrink: 0;
`;
export const H2 = styled.h1`
  color: #404040
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const H4 = styled.h1`
  color: #404040
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`;
export const P = styled.p`
  color: #404040
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const CardWrap = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
`;
export const StatusCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  flex-shrink: 0;
  max-width: 200px;
  width: 100%;
  height: 88px;
  background-color: var(--main-card-color);
  border-radius: 20px;
  padding: 10px 20px;
  gap: 17px;
`;

export const AllProposals = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const Button = styled.button`
  display: flex;
  padding: 17px 26px;
  background-color: var(--main-btn-color);
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  flex-shrink: 0;
  cursor: pointer;
`;
export const ProposalColumnWrap = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 21px;
`;
export const SearchBar = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;
export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
`;
export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 139px;
  flex-shrink: 0;
  border-radius: 20px;
  background-color: var(--main-card-color);
  padding: 10px 10px 10px 18px;
`;
export const SearchInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 563px;
  border-radius: 20px;
  background-color: var(--main-card-color);
  padding: 10px;
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: #404040
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  ::placeholder {
    color: #404040
  }
`;
export const ProposalCardWrap = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  flex-direction: column;
  width: 100%;
  height: 600px;
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
export const ProposalCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  background-color: var(--main-card-color);
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  flex-shrink: 0;
  height: 222px;
  cursor: pointer;
`;
export const ProposalCardHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const ProposalCardIMGHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const IMG = styled.img`
  width: 49px;
  height: 51px;
  flex-shrink: 0;
  object-fit: contain;
  border-radius: 50px;
`;
export const StatusBtn = styled.div<{ status: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 11px;
  border-radius: 20px;
  background-color: ${({ status }) =>
    status === 2 ? 'var(--status-card-disabled-bg)' : 'var(--main-btn-background-color)'};
`;
export const StatusBtnText = styled.p<{ status: number }>`
  color: ${({ status }) => (status === 2 ? 'var(--status-card-disabled-color)' : 'var(--main-btn-text-color)')};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const VotesWrap = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;
export const ProgressBarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 10px;
  flex-direction: column;
  gap: 5px;
`;
export const PercentageTextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;

export const ProgressBarHolder = styled.div`
  height: 18px;
  width: 100%;
  border-radius: 10px;
  background-color: #e9e1ff;
  overflow: hidden;
`;
export const ProgressBar = styled.div<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width + '%'};
  background-color: #936dff;
`;

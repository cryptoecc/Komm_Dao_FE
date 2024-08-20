import styled from 'styled-components';

interface ModalContentProps {
  $isAddMembers: boolean;
}

interface ModalTitleProps {
  $isAddMembers: boolean;
}

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div<ModalContentProps>`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 800px;
  max-width: 90%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 10px;
`;

export const ModalTitle = styled.h2<ModalTitleProps>`
  margin: 0;
  font-size: 28px;
  font-family: Inter;
  font-weight: 700;
  line-height: normal;
  padding: 10px;
  /* padding-left: 55px; */
  padding-left: ${(props) => (props.$isAddMembers ? '30px' : '55px')};
  padding-top: 30px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  margin-right: 25px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  margin-top: 10px;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-left: 110px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  width: 350px;
  background: var(--Light-Light, #f8f9fa);
  margin-right: 10px;

  &::placeholder {
    color: var(--Dark-Secondary, #9fa2ab);
    font-weight: 400;
    font-feature-settings: 'clig' off, 'liga' off;
    /* Base/Body */
    font-family: Poppins;
    font-size: 14px;
    line-height: 22px;
  }
`;

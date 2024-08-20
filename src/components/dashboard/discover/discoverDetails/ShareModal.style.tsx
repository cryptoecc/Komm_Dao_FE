import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  max-width: 550px;
  height: 300px; /* Increased height for more spacing */
  background-color: white;
  padding: 40px 30px; /* Increased padding to move content down */
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: left;
  position: relative; /* For positioning the close icon */
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px; /* Increased margin for spacing */
`;

export const SocialIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0; /* Increased margin to move icons down */
`;

export const SocialIconWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialIconWrapper = styled.div<{ bgColor: string }>`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center; /* Ensure icon is centered vertically */
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  padding: 10px;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const SocialIconLabel = styled.p<{ color: string }>`
  margin-top: 8px; /* Reduced for tighter appearance */
  font-size: 14px;
  color: ${({ color }) => color};
  text-align: center;
`;

export const ShareLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px rgba(52.49, 66.83, 75.44, 0.15) solid;
  margin-top: 30px; /* Increased margin to move the link container down */
`;

export const ShareButtonIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 14px;
  color: #8d9ca5;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  outline: none;
`;

export const CloseIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

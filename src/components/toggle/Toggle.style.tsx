import styled from 'styled-components';
import raceTrack from 'src/assets/toggle/RaceTrack.svg';
import knob from 'src/assets/toggle/knob.svg';

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  /* vertical-align: middle; */
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
`;

export const SwitchLabel = styled.span`
  margin-right: 10px;
  font-family: Inter;
  font-size: 16px;
  color: #1a0737;
`;

export const Switch = styled.div<{ isChecked: boolean }>`
  position: relative;
  width: 50px;
  height: 30px;
  background-image: url(${raceTrack}); /* 트랙 이미지 경로 설정 */
  background-size: contain;
  background-repeat: no-repeat;
  transition: background-color 0.3s;

  &:before {
    content: '';
    position: absolute;
    top: -1.5px;
    left: ${({ isChecked }) => (isChecked ? '17px' : '-5px')};
    width: 38px;
    height: 30px;
    background-image: url(${knob}); /* 흰색 원 이미지 경로 설정 */
    background-size: cover;
    border-radius: 50%;
    transition: left 0.3s;
  }
`;

import styled from 'styled-components';
import raceTrack from 'src/assets/toggle/RaceTrack.svg';
import raceTrackChecked from 'src/assets/toggle/checked.svg';
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
  background-image: url(${({ isChecked }) =>
    isChecked ? raceTrackChecked : raceTrack}); /* 상태에 따라 배경 이미지 변경 */
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

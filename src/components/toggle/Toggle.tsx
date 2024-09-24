import React, { useState } from 'react';
import { SwitchContainer, SwitchLabel, Switch } from './Toggle.style';

interface ToggleSwitchProps {
  isChecked: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isChecked, onToggle }) => {
  return (
    <SwitchContainer onClick={onToggle}>
      {/* <SwitchLabel>Toggle</SwitchLabel> */}
      <Switch isChecked={isChecked} />
    </SwitchContainer>
  );
};

export default ToggleSwitch;

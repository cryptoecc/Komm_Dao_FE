import React from 'react';
import { SidebarContainer, Step, Text, Number, Logo, Container } from './Sidebar.style';
import KommLogo from '../../../assets/register/LOGO_Komm DAO_3.png';

interface SidebarProps {
  currentStep: number;
  completedSteps: number[];
}

const steps = ['Add wallet', 'Add email', 'Create profile', 'Accept Charter', 'Add Value', 'Finish'];

const Sidebar: React.FC<SidebarProps> = ({ currentStep, completedSteps }) => {
  return (
    <Container>
      <Logo src={KommLogo} alt="Logo" />
      <SidebarContainer>
        {steps.map((step, index) => (
          <Step key={index} $active={currentStep === index + 1} $completed={completedSteps.includes(index + 1)}>
            <Number $active={currentStep === index + 1} $completed={completedSteps.includes(index + 1)}>
              {index + 1}
            </Number>
            <Text $active={currentStep === index + 1} $completed={completedSteps.includes(index + 1)}>
              {step}
            </Text>
          </Step>
        ))}
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;

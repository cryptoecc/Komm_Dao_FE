import React, { useState } from 'react';
import Sidebar from 'src/components/register/sidebar/Sidebar';
import { MainContainer, Content, StepContent, ConnectButton } from './SignupPage.style';
import AddEmail from 'src/components/register/step/addEmail/addEmail';
import AddValue from 'src/components/register/step/addValue/addValue';
import AcceptCharter from 'src/components/register/step/acceptCharter/acceptCharter';
import CreateProfile from 'src/components/register/step/createProfile/createProfile';
import Finish from 'src/components/register/step/finish/finish';
import AddWallet from 'src/components/register/step/addWallet/addWallet';
import { registrationSteps } from '../mainboard/governance/variables';

const SignUpPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  const handleNextStep = () => {
    setCompletedSteps((prevSteps) => [...prevSteps, currentStep]);
    setCurrentStep((prevStep) => (prevStep < 6 ? prevStep + 1 : prevStep));
  };

  return (
    <MainContainer>
      <Sidebar steps={registrationSteps} currentStep={currentStep} completedSteps={completedSteps} />
      <Content>
        {currentStep === 1 && <AddWallet onComplete={handleNextStep} />}
        {currentStep === 2 && <AddEmail onComplete={handleNextStep} />}
        {currentStep === 3 && <CreateProfile onComplete={handleNextStep} setSelectedImage={setSelectedImage} />}
        {currentStep === 4 && <AcceptCharter onComplete={handleNextStep} />}
        {currentStep === 5 && <AddValue onComplete={handleNextStep} />}
        {currentStep === 6 && <Finish onComplete={handleNextStep} selectedImage={selectedImage} />}
      </Content>
    </MainContainer>
  );
};

export default SignUpPage;

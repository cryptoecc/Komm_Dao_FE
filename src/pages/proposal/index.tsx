import React, { useState } from 'react'
import Sidebar from 'src/components/register/sidebar/Sidebar';
import { Container, Content } from './index.style'
import { proposalSteps } from '../mainboard/governance/variables';
import ProposalInfo from 'src/components/Proposal/ProposalInfo';


const Proposal = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);

    function handleNextStep() {
        setCompletedSteps(prev => [...prev, currentStep]);
        setCurrentStep(prev => (prev < 5 ? prev + 1 : prev));
    }

    function handlePrevStep() {
        const includes = completedSteps.includes(currentStep);
        if (!includes) {
            setCompletedSteps(prev => [...prev, currentStep]);
        }
        setCurrentStep(prev => (prev > 1 ? prev - 1 : prev));
    }

    function handleContentSwitch() {
        switch (currentStep) {
            case 1:
                return <ProposalInfo onComplete={handleNextStep} />
        }
    }

    return (
        <Container>
            <Sidebar steps={proposalSteps} currentStep={currentStep} completedSteps={completedSteps} />
            <Content>
                {handleContentSwitch()}
            </Content>
        </Container>
    )
}

export default Proposal
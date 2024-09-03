import React, { useState } from 'react'
import { Button, Column, Container, Content, Input, InputContainer, NavBar, NavList, P, Row } from './index.style'

const ProposalInfo = ({ onComplete }: { onComplete: () => void }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <Container>
            <Content gap={23}>
                <P fontSize={36} fontWeight={600}>Proposal Information</P>
                <Column gap={23}>
                    <P fontSize={25} fontWeight={400}>Title</P>
                    <InputContainer>
                        <Input placeholder='What is your proposal about?' />
                    </InputContainer>
                </Column>
                <Column gap={23}>
                    <NavBar>
                        {['Write', 'preview'].map((el, i) => (
                            <NavList key={i} active={i === activeIndex}>
                                {el}
                            </NavList>
                        ))}
                    </NavBar>
                    <Row>
                        <P fontSize={22} fontWeight={400}>Tell us more about what you want to propose</P>
                        <Button>Add proposal section</Button>
                    </Row>
                </Column>
            </Content>
            <Content gap={13}>
                <P fontSize={25} fontWeight={400}>Discussion (Optional)</P>
                <InputContainer>
                    <Input placeholder='What is your proposal about?' />
                </InputContainer>
            </Content>
        </Container>
    )
}

export default ProposalInfo
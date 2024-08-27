import { Btn, BtnWrap, Container, P, VoteContainer } from './index.style'

const DefaultModal = () => {
    return (
        <Container>
            <P>Would you vote 'Yes' on this proposal?</P>
            <VoteContainer>
                <BtnWrap>
                    <Btn>No</Btn>
                    <Btn active={true}>Yes</Btn>
                </BtnWrap>
            </VoteContainer>
        </Container>
    )
}

export default DefaultModal
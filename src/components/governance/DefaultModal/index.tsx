import { VOTE } from 'src/pages/mainboard/governance/proposals/SpecProposal/types'
import { Btn, BtnWrap, Container, P, VoteContainer } from './index.style'
import React from 'react';

const DefaultModal = ({ voteType, close }: { voteType: VOTE; close: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <Container>
            <P>Would you vote '{voteType}' on this proposal?</P>
            <VoteContainer>
                <BtnWrap>
                    <Btn onClick={() => close(false)}>No</Btn>
                    <Btn active={true}>Yes</Btn>
                </BtnWrap>
            </VoteContainer>
        </Container>
    )
}

export default DefaultModal
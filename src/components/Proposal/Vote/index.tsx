import React, { useState } from 'react'
import { Container, Content, P } from './index.style'

const Vote = ({ onComplete }: { onComplete: () => void }) => {

    return (
        <Container>
            <Content gap={23}>
                <P fontSize={36} fontWeight={600}>Select Voting Strategy</P>
                <Content gap={47} padding={16}>
                    <P fontSize={36} fontWeight={600}>Only one voting strategy is currently available. The DAO administrator can enable two other strategies in the settings.</P>

                </Content>
            </Content>
        </Container>
    )
}

export default Vote
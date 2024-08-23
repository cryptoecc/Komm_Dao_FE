import ArrowBack from 'src/assets/governance/ArrowBack'
import { Container, FirstBlockWrap, Row, P, H1, CardWrap, ProfileWrap, ProfileHeader, IMG, StatusBtn, StatusBtnText, Content, BtnBlock, VoteBtn } from './index.style'
import { useParams, useNavigate } from "react-router-dom";
import { proposals } from '../../variables';


type Path = "0" | "1" | "2" | "3";

const SpecProposal = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <Container>
            <FirstBlockWrap>
                <Row onClick={() => navigate(-1)}>
                    <ArrowBack width="24px" height="24px" />
                    <P fontSize={18} color="#A380F9" fontWeight={500}>Back to Proposals</P>
                </Row>
                <H1>{proposals[id as Path].header}</H1>
                <CardWrap>
                    <ProfileWrap>
                        <ProfileHeader>
                            <IMG src={proposals[id as Path].profileImg} alt="profile-pic" />
                            <P fontSize={18} fontWeight={400}>{proposals[id as Path].name}</P>
                            <StatusBtn status={0}>
                                <StatusBtnText status={0}>Ongoing</StatusBtnText>
                            </StatusBtn>
                        </ProfileHeader>
                        <P fontSize={26} color="#9A9898" fontWeight={700}>...</P>
                    </ProfileWrap>

                    <Content>
                        <P fontSize={18} fontWeight={700}>Objective</P>
                        <P fontSize={18} fontWeight={400}>{proposals[id as Path].objective}</P>
                    </Content>
                    <Content>
                        <P fontSize={18} fontWeight={700}>Description</P>
                        <P fontSize={18} fontWeight={400}>{proposals[id as Path].description}</P>
                    </Content>
                </CardWrap>
                <BtnBlock>
                    <VoteBtn>Yes</VoteBtn>
                    <VoteBtn>No</VoteBtn>
                    <VoteBtn>Abstain</VoteBtn>
                </BtnBlock>
            </FirstBlockWrap>
        </Container>
    )
}

export default SpecProposal
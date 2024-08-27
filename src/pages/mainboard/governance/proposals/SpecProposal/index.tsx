import ArrowBack from 'src/assets/governance/ArrowBack'
import { Container, FirstBlockWrap, Row, P, H1, CardWrap, ProfileWrap, ProfileHeader, IMG, StatusBtn, StatusBtnText, Content, BtnBlock, VoteBtn, SecondBlockWrap, Header, VotesBlock, Column, RowSpaceBetween, LinearProgressContainer, LinearProgress, InnerBlockWrap, CommentsSection, CommentsHeader, CommentsHeaderWrap, ActiveButton, CommentsActiveNavigation, ActiveTab, FirstBlockInnerContent, CommentsContent, ProfileRow, CommentsContainer } from './index.style'
import { useParams, useNavigate } from "react-router-dom";
import { proposals } from '../../variables';
import DownloadIcon from 'src/assets/governance/DownloadIcon';


type Path = "0" | "1" | "2" | "3";

const SpecProposal = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <Container>
            <FirstBlockWrap>
                <FirstBlockInnerContent>
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
                </FirstBlockInnerContent>
                <CommentsSection>
                    <CommentsHeader>
                        <CommentsHeaderWrap gap={16}>
                            <ActiveButton active={true}>Votes</ActiveButton>
                            <ActiveButton active={false}>Comments</ActiveButton>
                        </CommentsHeaderWrap>
                        <CommentsHeaderWrap gap={5}>
                            <DownloadIcon width={24} height={24} />
                            <P fontSize={16} fontWeight={400} color='#6D6D6D'>Download CSV</P>
                        </CommentsHeaderWrap>
                    </CommentsHeader>
                    <CommentsContainer>
                        <CommentsActiveNavigation>
                            <CommentsHeaderWrap gap={30} borderBottom={true}>
                                <ActiveTab active={true}>Yes</ActiveTab>
                                <ActiveTab active={false}>No</ActiveTab>
                                <ActiveTab active={false} margin={25}>Abstain</ActiveTab>
                            </CommentsHeaderWrap>
                        </CommentsActiveNavigation>
                        <CommentsContent>
                            {proposals.map(((el, i) => (
                                <ProfileRow key={i}>
                                    <ProfileHeader>
                                        <IMG src={el.profileImg} alt='profile-pic' />
                                        <P fontSize={18} fontWeight={400}>{el.name}</P>
                                    </ProfileHeader>
                                    <P fontSize={18} fontWeight={400} color="#6B6B6B">100% Yes</P>
                                    <P fontSize={18} fontWeight={400} color="#6B6B6B">1 Vote</P>
                                </ProfileRow>
                            )))}
                        </CommentsContent>
                    </CommentsContainer>
                </CommentsSection>
            </FirstBlockWrap>
            <SecondBlockWrap>
                <InnerBlockWrap>
                    <Header>
                        <P fontSize={20} fontWeight={400}>In progress</P>
                        <P fontSize={14} fontWeight={400} color="#929292">Quorum: 14/5</P>
                    </Header>
                    <VotesBlock>
                        <Column>
                            <RowSpaceBetween>
                                <P fontSize={14} fontWeight={400}>Yes</P>
                                <P fontSize={14} fontWeight={400} color="#929292">14</P>
                            </RowSpaceBetween>
                            <LinearProgressContainer>
                                <LinearProgress width={60} />
                            </LinearProgressContainer>
                        </Column>
                        <Column>
                            <RowSpaceBetween>
                                <P fontSize={14} fontWeight={400}>No</P>
                                <P fontSize={14} fontWeight={400} color="#929292">0</P>
                            </RowSpaceBetween>
                            <LinearProgressContainer>
                                <LinearProgress width={0} />
                            </LinearProgressContainer>
                        </Column>
                        <Column>
                            <RowSpaceBetween>
                                <P fontSize={14} fontWeight={400}>Abstain (counts ..</P>
                                <P fontSize={14} fontWeight={400} color="#929292">0</P>
                            </RowSpaceBetween>
                            <LinearProgressContainer>
                                <LinearProgress width={0} />
                            </LinearProgressContainer>
                        </Column>
                    </VotesBlock>
                </InnerBlockWrap>
                <InnerBlockWrap>
                    <Header>
                        <P fontSize={20} fontWeight={400}>Information</P>
                    </Header>

                    <VotesBlock>
                        <Column>
                            <P fontSize={16} fontWeight={400} color="rgba(23, 23, 23, 0.50)">Voting token</P>
                            <P fontSize={14} fontWeight={400}>KommDAO Membership NFT</P>
                        </Column>
                    </VotesBlock>


                    <VotesBlock>
                        <Column>
                            <P fontSize={16} fontWeight={400} color="rgba(23, 23, 23, 0.50)">Voting System</P>
                            <P fontSize={14} fontWeight={400}>Single Choice Voting (1 NFT = 1 Vote)</P>
                        </Column>
                    </VotesBlock>

                    <VotesBlock>
                        <Column>
                            <P fontSize={16} fontWeight={400} color="rgba(23, 23, 23, 0.50)">Voting Period</P>
                            <P fontSize={14} fontWeight={400}>Jan 1 2024, 3:50 AM ~ Jan 7 2024, 3:50 AM</P>
                        </Column>
                    </VotesBlock>

                    <VotesBlock>
                        <Column>
                            <P fontSize={16} fontWeight={400} color="rgba(23, 23, 23, 0.50)">Snapshot</P>
                            <P fontSize={14} fontWeight={400}>20,235,733</P>
                        </Column>
                    </VotesBlock>

                </InnerBlockWrap>
            </SecondBlockWrap>
        </Container>
    )
}

export default SpecProposal
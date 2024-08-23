import SearchIcon from 'src/assets/governance/SearchIcon'
import { Button, Container, FirstBlockWrap, H3, Header, Input, KohortBlock, Logo, LogoWrap, P, SearchInputWrap, SecondBlockWrap } from './index.style'
import { kohorts } from '../variables'

const Kohort = () => {
    return (
        <Container>
            <FirstBlockWrap>
                <SearchInputWrap>
                    <Input placeholder='Search for a team' />
                    <SearchIcon width="28" height="28" />
                </SearchInputWrap>
                <Button>+ Create Team</Button>
            </FirstBlockWrap>
            <SecondBlockWrap>
                {kohorts.map((el, i) => (
                    <KohortBlock key={i}>
                        <Header>
                            <LogoWrap>
                                <Logo src={el.img} alt="profile-pic" />
                            </LogoWrap>
                            <H3>{el.header}</H3>
                        </Header>
                        <P fontSize={20}>{el.content}</P>
                    </KohortBlock>
                ))}
            </SecondBlockWrap>
        </Container>
    )
}

export default Kohort
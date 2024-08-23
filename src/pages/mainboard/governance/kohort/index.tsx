import SearchIcon from 'src/assets/governance/SearchIcon'
import { Button, Container, FirstBlockWrap, Input, SearchInputWrap, SecondBlockWrap } from './index.style'

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

            </SecondBlockWrap>
        </Container>
    )
}

export default Kohort
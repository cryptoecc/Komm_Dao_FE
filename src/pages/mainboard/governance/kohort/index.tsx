import SearchIcon from 'src/assets/governance/SearchIcon'
import { Button, Container, FirstBlockWrap, H3, Header, Input, KohortBlock, Logo, LogoWrap, P, SearchInputWrap, SecondBlockWrap } from './index.style'
import { kohorts } from '../variables'
import AddKohort from 'src/components/admin/modal/addKohort/AddKohort'
import Modal from 'src/components/admin/modal/Modal'
import { useState } from 'react'

const Kohort = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <Container>
            <FirstBlockWrap>
                <SearchInputWrap>
                    <Input placeholder='Search for a team' />
                    <SearchIcon width="28" height="28" />
                </SearchInputWrap>
                <Button onClick={() => setIsModalOpen(true)}>+ Create Team</Button>
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
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="New Kohort">
                    <AddKohort />
                </Modal>
            )}
        </Container>
    )
}

export default Kohort
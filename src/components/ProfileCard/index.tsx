import React from 'react'
import { Container, DelegateBtn, H3, Header, IMG, LastContainer, NameAddressWrap, P, ProfileImgWrap, Span } from './index.style'
import { IProps } from './types'

const ProfileCard = ({ profileData }: IProps) => {
    const { profileImg, name, address, votingPower, description, trustAccounts } = profileData;
    return (
        <Container>
            <Header>
                <ProfileImgWrap>
                    <IMG src={profileImg} alt="profile-image" />
                    <NameAddressWrap>
                        <H3 fontWeight={700}>{name}</H3>
                        <H3 fontWeight={500}>{address.slice(0, 6)}...{address.slice(-4)}</H3>
                    </NameAddressWrap>
                </ProfileImgWrap>
                <P color="--main-btn-text-color" fontSize={16}><Span fontWeight={700}>{votingPower}</Span> Voting Power</P>
            </Header>
            <P color="--main-black-color" fontSize={16}>{description.length > 0 ? description : 'No bio provided'}</P>
            <LastContainer>
                <P color="--main-black-color" fontSize={13}>{trustAccounts > 0 ? `Trusted by ${trustAccounts} account${trustAccounts > 1 ? 's' : ""}` : ''}</P>
                <DelegateBtn backgroundColor="--main-btn-background-color">Delegate</DelegateBtn>
            </LastContainer>
        </Container>
    )
}

export default ProfileCard
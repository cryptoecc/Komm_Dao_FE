import React from 'react'
import { Container, FirstBlockWrap, FooterWrap, IMG, Input, LoadMoreBlock, NameWrap, P, ProfilesWrap, SearchInputWrap, SecondBlockWrap, VoterBlock, VotersWrap } from './index.style'
import SearchIcon from 'src/assets/governance/SearchIcon'
import XBtn from 'src/assets/governance/XBtn'
import { delegateProfiles } from '../variables'
import ProfileCard from 'src/components/ProfileCard'
import { DelegateBtn } from 'src/components/ProfileCard/index.style'

const Delegates = () => {
    return (
        <Container>
            <FirstBlockWrap>
                {/* Search bar */}
                <SearchInputWrap>
                    <SearchIcon />
                    <Input placeholder='Name or Wallet Address' />
                    <XBtn />
                </SearchInputWrap>
                {/* Search bar */}

                {/* Profiles block */}
                <ProfilesWrap>
                    {delegateProfiles.map((el, i) => (<ProfileCard key={i} profileData={el} />))}
                    <LoadMoreBlock>
                        <P fontSize={18}>Load More</P>
                    </LoadMoreBlock>
                </ProfilesWrap>
                {/* Profiles block */}
            </FirstBlockWrap>
            {/* Top Voters block */}
            <SecondBlockWrap>
                <P fontSize={20}>Top 5 Voters</P>
                <VotersWrap>
                    {delegateProfiles.map((el, i) => (
                        <VoterBlock key={i}>
                            <IMG src={el.profileImg} alt="profile-image" />
                            <NameWrap>
                                <P fontSize={14}>{el.name}</P>
                                <P fontSize={11} whiteSpace="nowrap">{el.votedProps} proposal{el.votedProps > 1 ? 's' : ''} voted</P>
                            </NameWrap>
                            <DelegateBtn backgroundColor="--main-btn-disabled-bg">Delegate</DelegateBtn>
                        </VoterBlock>
                    ))}
                </VotersWrap>
                <FooterWrap>
                    <P fontSize={14}>
                        You can vote directly, or delegate
                        your votes to another voter.
                    </P>
                    <DelegateBtn backgroundColor="--main-white-color" border="1px solid #000" width={134} height={32}>Delegate</DelegateBtn>
                </FooterWrap>
            </SecondBlockWrap>
            {/* Top Voters block */}

        </Container>
    )
}

export default Delegates

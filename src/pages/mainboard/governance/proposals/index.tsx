import React, { useState } from 'react';
import { GovernanceContent, MainSection, SubSection, ProposalStats, H1, StatusCard, CardWrap, H4, P, AllProposals, Button, ProposalColumnWrap, SearchBar, SearchInputWrap, Input, FilterBar, FilterItem, ProposalCardWrap, ProposalCard, ProposalCardIMGHeaderWrap, IMG, H2, ProposalCardHeader, StatusBtn, StatusBtnText, VotesWrap, ProgressBarHolder, ProgressBar, ProgressBarWrap, PercentageTextWrap } from './index.style';
import { proposals, statusCard } from '../variables';
import SearchIcon from 'src/assets/governance/SearchIcon';
import ArrowDownIcon from 'src/assets/governance/ArrowDown';
import ProfileImage from 'src/assets/governance/profile-image.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Proposals = () => {
    return (
        <GovernanceContent>
            <MainSection>
                <ProposalStats>
                    <H1>Proposal Stats</H1>
                </ProposalStats>
                {/* Status Cards */}
                <CardWrap>
                    {statusCard.map((el, i) => (
                        <StatusCard key={i}>
                            <H4>{el.heading}</H4>
                            <P>{el.stat}</P>
                        </StatusCard>
                    ))}
                </CardWrap>
                {/* Status Cards */}
                <AllProposals>
                    <ProposalStats>
                        <H1>All Proposals</H1>
                    </ProposalStats>
                    <Button>Create Proposal</Button>
                </AllProposals>
                <ProposalColumnWrap>
                    {/* Search bar wrap */}
                    <SearchBar>
                        {/* Input wrap */}
                        <SearchInputWrap>
                            <SearchIcon width='24' height="24" />
                            <Input placeholder='Search proposals...' />
                        </SearchInputWrap>
                        {/* Input wrap */}
                        {/* Filter button wrap */}
                        <FilterBar>
                            <FilterItem>
                                <P>All</P>
                                <ArrowDownIcon />
                            </FilterItem>
                            <FilterItem>
                                <P>Newest</P>
                                <ArrowDownIcon />
                            </FilterItem>
                        </FilterBar>
                        {/* Filter button wrap */}
                    </SearchBar>
                    {/* Search bar wrap */}
                    {/* Proposal Cards */}
                    <ProposalCardWrap>
                        {proposals.map((el, i) => (<ProposalCard key={i}>
                            {/* Proposal Card Content */}
                            {/* Header Wrap */}
                            <ProposalCardHeader>
                                <ProposalCardIMGHeaderWrap>
                                    <IMG src={ProfileImage} alt='profile-image' />
                                    <H2>{el.header}</H2>
                                </ProposalCardIMGHeaderWrap>
                                <StatusBtn status={el.status}>
                                    <StatusBtnText status={el.status}>{el.statusText}</StatusBtnText>
                                </StatusBtn>
                            </ProposalCardHeader>
                            {/* Header Wrap */}
                            {/* Text */}
                            <P>{el.content}</P>
                            {/* Text */}
                            {/* Votes Progress Bar */}
                            <VotesWrap>
                                <H2>Votes</H2>
                                <ProgressBarWrap>
                                    <PercentageTextWrap>
                                        <P>Yes (12 votes)</P>
                                        <P>No (3 votes)</P>
                                    </PercentageTextWrap>
                                    <ProgressBarHolder>
                                        <ProgressBar width={el.percentage} />
                                    </ProgressBarHolder>
                                </ProgressBarWrap>
                            </VotesWrap>
                            {/* Votes Progress Bar */}
                            {/* Proposal Card Content */}
                        </ProposalCard>))}
                    </ProposalCardWrap>
                    {/* Proposal Cards */}
                </ProposalColumnWrap>
            </MainSection>
            <SubSection>
            </SubSection>
        </GovernanceContent>
    )
}

export default Proposals
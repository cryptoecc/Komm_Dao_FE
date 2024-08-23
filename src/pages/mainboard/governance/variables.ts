import ProfileImage0 from 'src/assets/governance/profile-image.png';
import ProfileImage1 from 'src/assets/governance/2035.png';
import ProfileImage2 from 'src/assets/governance/2036.png';
import ProfileImage3 from 'src/assets/governance/2037.png';
import ProfileImage4 from 'src/assets/governance/2038.png';

import KohortLogo0 from 'src/assets/governance/kohort0.png';
import KohortLogo1 from 'src/assets/governance/kohort1.png';
import KohortLogo2 from 'src/assets/governance/kohort2.png';

export const sections = ['Proposal', 'Delegates', 'K-ohort'];

export const statusCard = [
  { heading: 'Total', stat: '6' },
  { heading: 'Active', stat: '2' },
  { heading: 'Passed', stat: '3 (50%)' },
  { heading: 'Contract Chain', stat: 'Optimism' },
  { heading: 'Contract Address', stat: '0xCf7Ed3' },
];

export const proposals = [
  {
    id: 0,
    name: 'Alex',
    profileImg: ProfileImage0,
    header: 'KDP-6 Komm DAO Season 1 기간 연장',
    content:
      'Objective 이 제안은 현재 진행 중인 Komm DAO의 Season 1 종료시점을 2024년 6월 30일까지 6개월 연장하는 것입니다. Description 지금까지 Season 1 멤버들은 3건의 신규 투자 집행, 리서치/마케팅 코호트 런칭 등 주목할 만한 성과를 이루었습니다. 연장된 기간 동안 기존 위원회(Committee)...',
    statusText: 'Active',
    objective: '이 제안은 현재 진행 중인 Komm DAO의 Season 1 종료시점을 2024년 6월 30일까지 6개월 연장하는 것입니다.',
    description:
      '지금까지 Season 1 멤버들은 3건의 신규 투자 집행, 리서치/마케팅 코호트 런칭 등 주목할 만한 성과를 이루었습니다. 연장된 기간 동안 기존 위원회(Committee) 및 코호트(Kohort) 멤버들은 활동을 지속하여, 다른 멤버들에게 더 많은 기회를 제공하고 커뮤니티의 활동성을 높이는 데 기여할 것으로 기대됩니다. 기존 Season 1 기간: 2023년 7월 1일~2023년 12월 31일 신규 Season 1 기간: 2023년 7월1일~2024년 6월 30일',
    status: 0,
    percentage: 70,
  },
  {
    id: 1,
    name: 'Bella',
    profileImg: ProfileImage1,
    header: 'KDP-6 Komm DAO Season 1 기간 연장',
    content:
      'Objective 이 제안은 현재 진행 중인 Komm DAO의 Season 1 종료시점을 2024년 6월 30일까지 6개월 연장하는 것입니다. Description 지금까지 Season 1 멤버들은 3건의 신규 투자 집행, 리서치/마케팅 코호트 런칭 등 주목할 만한 성과를 이루었습니다. 연장된 기간 동안 기존 위원회(Committee)...',
    statusText: 'Approved',
    objective:
      '지금까지 Season 1 멤버들은 3건의 신규 투자 집행, 리서치/마케팅 코호트 런칭 등 주목할 만한 성과를 이루었습니다. 연장된 기간 동안 기존 위원회(Committee) 및 코호트(Kohort) 멤버들은 활동을 지속하여, 다른 멤버들에게 더 많은 기회를 제공하고 커뮤니티의 활동성을 높이는 데 기여할 것으로 기대됩니다. 기존 Season 1 기간: 2023년 7월 1일~2023년 12월 31일 신규 Season 1 기간: 2023년 7월1일~2024년 6월 30일',
    description: '',
    status: 1,
    percentage: 45,
  },
  {
    id: 2,
    name: 'Josh',
    profileImg: ProfileImage2,
    header: 'KDP-6 Komm DAO Season 1 기간 연장',
    content:
      'Objective 이 제안은 현재 진행 중인 Komm DAO의 Season 1 종료시점을 2024년 6월 30일까지 6개월 연장하는 것입니다. Description 지금까지 Season 1 멤버들은 3건의 신규 투자 집행, 리서치/마케팅 코호트 런칭 등 주목할 만한 성과를 이루었습니다. 연장된 기간 동안 기존 위원회(Committee)...',
    statusText: 'Rejected',
    objective: '이 제안은 현재 진행 중인 Komm DAO의 Season 1 종료시점을 2024년 6월 30일까지 6개월 연장하는 것입니다.',
    description:
      '지금까지 Season 1 멤버들은 3건의 신규 투자 집행, 리서치/마케팅 코호트 런칭 등 주목할 만한 성과를 이루었습니다. 연장된 기간 동안 기존 위원회(Committee) 및 코호트(Kohort) 멤버들은 활동을 지속하여, 다른 멤버들에게 더 많은 기회를 제공하고 커뮤니티의 활동성을 높이는 데 기여할 것으로 기대됩니다. 기존 Season 1 기간: 2023년 7월 1일~2023년 12월 31일 신규 Season 1 기간: 2023년 7월1일~2024년 6월 30일',
    status: 2,
    percentage: 90,
  },
  {
    id: 3,
    name: 'Simon',
    profileImg: ProfileImage3,
    header: 'KDP-6 Komm DAO Season 1 기간 연장',
    content:
      'Objective 이 제안은 현재 진행 중인 Komm DAO의 Season 1 종료시점을 2024년 6월 30일까지 6개월 연장하는 것입니다. Description 지금까지 Season 1 멤버들은 3건의 신규 투자 집행, 리서치/마케팅 코호트 런칭 등 주목할 만한 성과를 이루었습니다. 연장된 기간 동안 기존 위원회(Committee)...',
    statusText: 'Approved',
    objective: '이 제안은 현재 진행 중인 Komm DAO의 Season 1 종료시점을 2024년 6월 30일까지 6개월 연장하는 것입니다.',
    description:
      '지금까지 Season 1 멤버들은 3건의 신규 투자 집행, 리서치/마케팅 코호트 런칭 등 주목할 만한 성과를 이루었습니다. 연장된 기간 동안 기존 위원회(Committee) 및 코호트(Kohort) 멤버들은 활동을 지속하여, 다른 멤버들에게 더 많은 기회를 제공하고 커뮤니티의 활동성을 높이는 데 기여할 것으로 기대됩니다. 기존 Season 1 기간: 2023년 7월 1일~2023년 12월 31일 신규 Season 1 기간: 2023년 7월1일~2024년 6월 30일',
    status: 1,
    percentage: 12,
  },
];

export type Path = 'proposals' | 'delegates' | 'kohort';

export const mapActiveIndexToPath: Record<number, Path> = {
  0: 'proposals',
  1: 'delegates',
  2: 'kohort',
};
export const mapPathToActiveIndex: Record<Path, number> = {
  proposals: 0,
  delegates: 1,
  kohort: 2,
};

export const delegateProfiles = [
  {
    profileImg: ProfileImage0,
    name: 'Alex',
    address: '0x210706cbd9D26c26c727f4d3007D819390934375',
    votingPower: 2,
    description: "I'm a marketer & designer",
    trustAccounts: 4,
    votedProps: 6,
  },
  {
    profileImg: ProfileImage1,
    name: 'Bella',
    address: '0x210706cbd9D26c26c727f4d3007D819390934375',
    votingPower: 2,
    description: 'Web3 enthusiast',
    trustAccounts: 2,
    votedProps: 3,
  },
  {
    profileImg: ProfileImage2,
    name: 'Josh',
    address: '0x210706cbd9D26c26c727f4d3007D819390934375',
    votingPower: 2,
    description: '',
    trustAccounts: 0,
    votedProps: 4,
  },
  {
    profileImg: ProfileImage3,
    name: 'Simon',
    address: '0x210706cbd9D26c26c727f4d3007D819390934375',
    votingPower: 2,
    description: 'Researcher who is interested in crypto',
    trustAccounts: 1,
    votedProps: 7,
  },
  {
    profileImg: ProfileImage4,
    name: 'Tim',
    address: '0x210706cbd9D26c26c727f4d3007D819390934375',
    votingPower: 2,
    description: 'Researcher who is interested in crypto',
    trustAccounts: 0,
    votedProps: 1,
  },
  {
    profileImg: ProfileImage1,
    name: 'Bella',
    address: '0x210706cbd9D26c26c727f4d3007D819390934375',
    votingPower: 2,
    description: 'Web3 enthusiast',
    trustAccounts: 2,
    votedProps: 3,
  },
  {
    profileImg: ProfileImage2,
    name: 'Josh',
    address: '0x210706cbd9D26c26c727f4d3007D819390934375',
    votingPower: 2,
    description: '',
    trustAccounts: 0,
    votedProps: 4,
  },
  {
    profileImg: ProfileImage0,
    name: 'Alex',
    address: '0x210706cbd9D26c26c727f4d3007D819390934375',
    votingPower: 2,
    description: "I'm a marketer & designer",
    trustAccounts: 4,
    votedProps: 6,
  },
  {
    profileImg: ProfileImage1,
    name: 'Bella',
    address: '0x210706cbd9D26c26c727f4d3007D819390934375',
    votingPower: 2,
    description: 'Web3 enthusiast',
    trustAccounts: 2,
    votedProps: 3,
  },
  {
    profileImg: ProfileImage2,
    name: 'Josh',
    address: '0x210706cbd9D26c26c727f4d3007D819390934375',
    votingPower: 2,
    description: '',
    trustAccounts: 0,
    votedProps: 4,
  },
];

export const kohorts = [
  { img: KohortLogo0, header: 'Nibiru Marketing', content: 'Programs - 3 members' },
  { img: KohortLogo1, header: 'MYX Research', content: 'Governance - 1 member' },
  { img: KohortLogo2, header: 'Airstack Validator', content: 'Treasury - 2 members' },
];

export interface IProps {
  profileData: IProfileObject;
}

export interface IProfileObject {
  profileImg: string;
  name: string;
  address: string;
  votingPower: number;
  description: string;
  trustAccounts: number;
}

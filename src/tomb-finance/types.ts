import ERC20 from './ERC20';

export type ContractName = string;

export interface BankInfo {
  name: string;
  poolId: number;
  sectionInUI: number;
  contract: ContractName;
  depositTokenName: ContractName;
  earnTokenName: ContractName;
  sort: number;
  finished: boolean;
  closedForStaking: boolean;
  aprZero?: boolean;
  multi: string;
  // buyLink: string;
}

export interface Bank extends BankInfo {
  address: string;
  depositToken: ERC20;
  earnToken: ERC20;
}

export type PoolStats = {
  dailyAPR: string;
  yearlyAPR: string;
  TVL: string;
};

export type TokenStat = {
  tokenInFtm: string;
  priceInDollars: string;
  totalSupply: string;
  circulatingSupply: string;
};

export type LPStat = {
  tokenAmount: string;
  ftmAmount: string;
  priceOfOne: string;
  totalLiquidity: string;
  totalSupply: string;
};

export type AllocationTime = {
  from: Date;
  to: Date;
};

export type TShareSwapperStat = {
  tshareBalance: string;
  tbondBalance: string;
  // tombPrice: string;
  // tsharePrice: string;
  rateTSharePerTomb: string;
};

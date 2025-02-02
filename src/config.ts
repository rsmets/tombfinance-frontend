import { Configuration } from './tomb-finance/config';
import { BankInfo } from './tomb-finance';
import { ChainId } from '@spookyswap/sdk';

const contractInfo = require('./tomb-finance/deployments/deployments.mainnet.json');
const externalContractInfo = require('./tomb-finance/deployments/deployments-external.mainnet.json');
// const externalContractInfo = require('./tomb-finance/deployments/deployments-external.mainnet-4.json');

const now = Math.floor(Date.now() / 1000);

export const genPoolStartTime = 1647108000; // Sat Mar 12 2022 10:00:00 UTC-0800 (Pacific Standard Time)
export const genFinishedTime = genPoolStartTime + (60 * 60 * 24 * 3);
export const isGenFinished = now >= genFinishedTime;
export const isGenStarted = now >= genPoolStartTime;
export const isGenRunning = true || !isGenFinished && isGenStarted;

export const tombRewardStartTime = 1647111600;
export const tombRewardFinishedTime = tombRewardStartTime + (60 * 60 * 24 * 4);
export const isTombRewardFinished = true //now >= tombRewardFinishedTime;
export const isTombRewardStarted = now >= tombRewardStartTime;
export const isTombRewardRunning = true || !isTombRewardFinished && isTombRewardStarted;

export const tshareRewardStartTime = 1647367200;
export const tshareRewardsRunning = true || now >= tshareRewardStartTime;

// tomb contract config
const config: Configuration = {
  chainId: ChainId.MAINNET,
  defaultProvider: 'https://rpc.ftm.tools/',
  // chainId: 31337,
  // defaultProvider: 'http://localhost:8545', 
  networkName: 'Fantom Opera Mainnet',
  ftmscanUrl: 'https://ftmscan.com',
  // chainId: ChainId.FTMTESTNET,
  // networkName: 'Fantom Opera Testnet',
  // ftmscanUrl: 'https://testnet.ftmscan.com',
  // defaultProvider: 'https://rpc.testnet.fantom.network/',
  deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
  // deployments: require('./tomb-finance/deployments/deployments.mainnet-2.json'),
  // deployments: require('./tomb-finance/deployments/deployments.mainnet-4.json'),
  // deployments: require('./tomb-finance/deployments/deployments.localhost.json'),
  // deployments: require('./tomb-finance/deployments/deployments.empty.json'),
  externalTokens: {
    WFTM: ['0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18],
    FUSDT: ['0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6], // This is actually usdc on mainnet not fusdt
    BOO: ['0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE', 18],
    ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
    SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
    'USDT-FTM-LP': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],
    'VINYL-FTM-LP': [externalContractInfo.tombFtmLpSpookyAddress, 18],
    'TRACKS-FTM-LP': [externalContractInfo.tsharesFtmLpSpookyAddress, 18],
    'VINYL-TRACKS-LP': [externalContractInfo.tombTShareLpSpookyAddress, 18],
    'VINYL': [contractInfo.tomb.address, 18],
    "2OMB": ['0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae', 18], // for gen pools
    USDC: ['0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6], // This is actually usdc on mainnet not fusdt
  },
  baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
  bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
  masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
  refreshInterval: 10000,
}

// grape contract config
const configGrape: Configuration = {
  chainId: ChainId.MAINNET,
  defaultProvider: 'https://rpc.ftm.tools/',
  // chainId: 31337,
  // defaultProvider: 'http://localhost:8545', 
  networkName: 'Fantom Opera Mainnet',
  ftmscanUrl: 'https://ftmscan.com',
  deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
  externalTokens: {
    WFTM: ['0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18],
    FUSDT: ['0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6], // This is actually usdc on mainnet not fusdt
    BOO: ['0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE', 18],
    ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
    SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
    'USDT-FTM-LP': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],
    'VINYL-FTM-LP': ['0xc9c6b1187f8b3a48ca480c8edaf0524f9c93e971', 18],
    'TRACKS-FTM-LP': ['0xCa5Cf8edd0cc464b034516d37cCCa4777F4B350d', 18],
    "2OMB": ['0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae', 18], // for gen pools
    USDC: ['0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6], // This is actually usdc on mainnet not fusdt
  },
  baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
  bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
  masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
  refreshInterval: 10000,
}


const configurations: { [env: string]: Configuration } = {
  // local: {
  //   chainId: 1337,
  //   networkName: 'Local Hardhat Node',
  //   ftmscanUrl: 'https://testnet.ftmscan.com',
  //   defaultProvider: 'http://127.0.0.1:8545/', // TODO: figure out how to host a local RPC
  //   deployments: require('./tomb-finance/deployments/deployments.local.json'),
  //   externalTokens: {
  //     WFTM: ['0xf1277d1ed8ad466beddf92ef448a132661956621', 18],
  //     FUSDT: ['0xb7f24e6e708eabfaa9e64b40ee21a5adbffb51d6', 6],
  //     BOO: ['0x14f0C98e6763a5E13be5CE014d36c2b69cD94a1e', 18],
  //     ZOO: ['0x2317610e609674e53D9039aaB85D8cAd8485A7c5', 0],
  //     SHIBA: ['0x39523112753956d19A3d6a30E758bd9FF7a8F3C0', 9],
  //     'USDT-FTM-LP': ['0xE7e3461C2C03c18301F66Abc9dA1F385f45047bA', 18],
  //     'VINYL-FTM-LP': ['0x13Fe199F19c8F719652985488F150762A5E9c3A8', 18],
  //     'TRACKS-FTM-LP': ['0x20bc90bB41228cb9ab412036F80CE4Ef0cAf1BD5', 18],
  //     'TOMB-FTM-LP': ['0x13Fe199F19c8F719652985488F150762A5E9c3A8', 18],
  //     'TSHARE-FTM-LP': ['0x20bc90bB41228cb9ab412036F80CE4Ef0cAf1BD5', 18],
  //   },
  //   baseLaunchDate: new Date('2022-02-02 13:00:00Z'),
  //   bondLaunchesAt: new Date('2022-02-03T15:00:00Z'),
  //   masonryLaunchesAt: new Date('2022-02-03T00:00:00Z'),
  //   refreshInterval: 10000,
  // },
  development: {
    chainId: ChainId.FTMTESTNET,
    networkName: 'Fantom Opera Testnet',
    ftmscanUrl: 'https://testnet.ftmscan.com',
    defaultProvider: 'https://rpc.testnet.fantom.network/',
    deployments: require('./tomb-finance/deployments/deployments.testing.json'),
    externalTokens: {
      WFTM: ['0xf1277d1ed8ad466beddf92ef448a132661956621', 18],
      FUSDT: ['0xb7f24e6e708eabfaa9e64b40ee21a5adbffb51d6', 6],
      BOO: ['0x14f0C98e6763a5E13be5CE014d36c2b69cD94a1e', 18],
      ZOO: ['0x2317610e609674e53D9039aaB85D8cAd8485A7c5', 0],
      SHIBA: ['0x39523112753956d19A3d6a30E758bd9FF7a8F3C0', 9],
      'USDT-FTM-LP': ['0xE7e3461C2C03c18301F66Abc9dA1F385f45047bA', 18],
      'VINYL-FTM-LP': ['0x5c15cf512041880a64c4fb9e5dded11bddeedae1', 18],
      'TRACKS-FTM-LP': ['0xd875d2edcc2d472f1207b5ea085162023dc83991', 18],
      'TOMB-FTM-LP': ['0x13Fe199F19c8F719652985488F150762A5E9c3A8', 18],
      'TSHARE-FTM-LP': ['0x20bc90bB41228cb9ab412036F80CE4Ef0cAf1BD5', 18],
    },
    baseLaunchDate: new Date('2022-03-12 18:00:00Z'),
    bondLaunchesAt: new Date('2022-03-15T18:00:00Z'),
    masonryLaunchesAt: new Date('2022-03-15T18:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: ChainId.MAINNET,
    networkName: 'Fantom Opera Mainnet',
    ftmscanUrl: 'https://ftmscan.com',
    defaultProvider: 'https://rpc.ftm.tools/',
      // defaultProvider: 'http://127.0.0.1:8545/', // TODO: figure out how to host a local RPC
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WFTM: ['0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18],
      USDC: ['0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6], // This is actually usdc on mainnet not fusdt
      BOO: ['0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE', 18],
      "2OMB": ['0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae', 18],
      ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
      SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
      'USDT-FTM-LP': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],
      'VINYL-FTM-LP': ['0x5c15cf512041880a64c4fb9e5dded11bddeedae1', 18],
      'TRACKS-FTM-LP': ['0xd875d2edcc2d472f1207b5ea085162023dc83991', 18],
      'TOMB-FTM-LP': ['0x2A651563C9d3Af67aE0388a5c8F89b867038089e', 18],
      'TSHARE-FTM-LP': ['0x4733bc45eF91cF7CcEcaeeDb794727075fB209F2', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding VINYL
        - 2 = LP asset staking rewarding TSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  VinylFtmGenesisRewardPool: {
    name: 'Earn VINYL by FTM',
    poolId: 0,
    sectionInUI: 0,
    contract: 'VinylFtmGenesisRewardPool',
    depositTokenName: 'WFTM',
    earnTokenName: 'VINYL',
    finished: false,
    sort: 1,
    // closedForStaking: !isGenRunning,
    closedForStaking: true,
    // closedForStaking: false
    aprZero: true,
    multi: '0'
  },
  TombBooRewardPool: {
    name: 'Earn VINYL by 2OMB',
    poolId: 1,
    sectionInUI: 0,
    contract: 'Vinyl2ombGenesisRewardPool',
    depositTokenName: '2OMB',
    earnTokenName: 'VINYL',
    finished: false,
    sort: 2,
    // closedForStaking: !isGenRunning,
    closedForStaking: true,
    aprZero: true,
    multi: '0',
  },
  TombShibaRewardPool: {
    name: 'Earn VINYL by USDC',
    poolId: 2,
    sectionInUI: 0,
    contract: 'VinylUsdcGenesisRewardPool',
    depositTokenName: 'USDC',
    earnTokenName: 'VINYL',
    finished: false,
    sort: 3,
    // closedForStaking: !isGenRunning,
    closedForStaking: true,
    aprZero: true,
    multi: '0',
  },
  // TombZooRewardPool: {
  //   name: 'Earn VINYL by ZOO',
  //   poolId: 3,
  //   sectionInUI: 0,
  //   contract: 'VinylUsdcGenesisRewardPool',
  //   depositTokenName: 'ZOO',
  //   earnTokenName: 'VINYL',
  //   finished: false,
  //   sort: 4,
  //   closedForStaking: false,
  // },
  TombFtmLPTombRewardPool: {
    name: 'Earn VINYL by VINYL-FTM LP',
    poolId: 0,
    sectionInUI: 1,
    contract: 'VinylFtmLpTombRewardPool',
    depositTokenName: 'VINYL-FTM-LP',
    earnTokenName: 'VINYL',
    finished: false,
    sort: 5,
    closedForStaking: true,
    aprZero: true,
    // closedForStaking: false
    multi: '0',
  },
  // TombFtmLPTombRewardPoolOld: {
  //   name: 'Earn VINYL by VINYL-FTM LP',
  //   poolId: 1,
  //   sectionInUI: 1,
  //   contract: 'VinylFtmLpTombRewardPoolOld',
  //   depositTokenName: 'VINYL-FTM-LP',
  //   earnTokenName: 'VINYL',
  //   finished: true,
  //   sort: 9,
  //   closedForStaking: true,
  // },
  VinylFtmLPTracksRewardPool: {
    name: 'Earn TRACKS by VINYL-FTM LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'VinylFtmLPTracksRewardPool',
    depositTokenName: 'VINYL-FTM-LP',
    earnTokenName: 'TRACKS',
    finished: false,
    sort: 6,
    closedForStaking: !tshareRewardsRunning,
    // closedForStaking: false
    multi: '50%',
  },
  TracksFtmLPTracksRewardPool: {
    name: 'Earn TRACKS by TRACKS-FTM LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'TracksFtmLPTracksRewardPool',
    // depositTokenName: 'TSHARE-FTM-LP',
    depositTokenName: 'TRACKS-FTM-LP',
    earnTokenName: 'TRACKS',
    finished: false,
    sort: 7,
    closedForStaking: !tshareRewardsRunning,
    // closedForStaking: false
    multi: '41%',
  },
  VinylTracksLPTracksRewardPool: {
    name: 'Earn TRACKS with VINYL-TRACKS LP',
    poolId: 2,
    sectionInUI: 2,
    contract: 'VinylTracksLPTracksRewardPool',
    // depositTokenName: 'TSHARE-FTM-LP',
    depositTokenName: 'VINYL-TRACKS-LP',
    earnTokenName: 'TRACKS',
    finished: false,
    sort: 8,
    closedForStaking: false, // !tshareRewardsRunning,
    // closedForStaking: false
    multi: '9%',
  },
  // VinylTracksRewardPool: {
  //   name: 'Earn TRACKS with VINYL',
  //   poolId: 2,
  //   sectionInUI: 2,
  //   contract: 'VinylTracksRewardPool',
  //   // depositTokenName: 'TSHARE-FTM-LP',
  //   depositTokenName: 'VINYL',
  //   earnTokenName: 'TRACKS',
  //   finished: false,
  //   sort: 8,
  //   closedForStaking: !tshareRewardsRunning,
  //   // closedForStaking: false
  // },
};

export default config;
// export default configurations[process.env.NODE_ENV || 'production'];
// export default configurations[process.env.NODE_ENV || 'development'];
// export default configurations[process.env.NODE_ENV || 'local'];

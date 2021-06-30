import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'KANDY',
    tokenAddress: '0x8C8a54381b1FC988978d89978DD3B198F4ca54C0',   // KANDY address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x8C8a54381b1FC988978d89978DD3B198F4ca54C0',  // KANDY address
    contractAddress: {
      97: '',
      321: '0xFeb6D3004B9Cf7595Af96DBA23d9Ec8e5F6e3Ebc',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools

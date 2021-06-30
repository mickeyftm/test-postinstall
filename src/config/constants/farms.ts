import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'KANDY',
    lpAddresses: {
      97: '',
      321: '0x8C8a54381b1FC988978d89978DD3B198F4ca54C0',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      321: '0x8C8a54381b1FC988978d89978DD3B198F4ca54C0',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'KANDY-KCS LP',
    lpAddresses: {
      97: '',
      321: '0x8b40De6d0b63008a61b1125BCF272634dB1d320D',   // lp address kandy-bnb
    },
    tokenSymbol: 'KANDY',
    tokenAddresses: {
      97: '',
      321: '0x8C8a54381b1FC988978d89978DD3B198F4ca54C0', // KANDY address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms

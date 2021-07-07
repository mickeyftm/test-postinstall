import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'KANDY',
    lpAddresses: {
      97: '',
      321: '0x84B16071f51557a240F470a49950b0AB4aFd746c',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      321: '0x84B16071f51557a240F470a49950b0AB4aFd746c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'KANDY-KCS LP',
    lpAddresses: {
      97: '',
      321: '0xA0cbB68a0222aBF7F2eCc045694C4dcc14672671',   // lp address kandy-bnb
    },
    tokenSymbol: 'KANDY',
    tokenAddresses: {
      97: '',
      321: '0x84B16071f51557a240F470a49950b0AB4aFd746c', // KANDY address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms

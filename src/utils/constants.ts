import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

import { Factory as FactoryContract } from '../types/templates/Pool/Factory'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0xdEF0B711d89aE4865658a217391D651213c6acFd'

export const ZERO_BI = BigInt.fromI32(0)
export const ONE_BI = BigInt.fromI32(1)
export const ZERO_BD = BigDecimal.fromString('0')
export const ONE_BD = BigDecimal.fromString('1')
export const BI_18 = BigInt.fromI32(18)

export const NULL_ETH_HEX_STRING = '0x0000000000000000000000000000000000000000000000000000000000000001'

export const WETH_ADDRESS = '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9'
export const USDC_WETH_03_POOL = '0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8'
export const STABLECOIN_IS_TOKEN0 = true

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export const WHITELIST_TOKENS: string[] = [
  WETH_ADDRESS, // WETH
]

export const STABLE_COINS: string[] = []

export const MINIMUM_ETH_LOCKED = BigDecimal.fromString('60')

export const factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

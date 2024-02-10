import { Contract, Provider, ethers } from 'ethers'
import diamondAbi from './Martin.json'

/* ============================================ PRESET VALUES ============================================ */

/* ENTER THE PRESET VALUES! */

export const presetValues = {
  diamondAddr: '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318',
  deployedOnBlockNumber: '21',
}

/* ============================================ CHAIN JOYSTICK ============================================ */

export class Joystick {
  provider: Provider
  diamond: Contract
  diamondInteface: ethers.Interface

  constructor(provider: Provider, diamondAddr: string) {
    this.provider = provider
    this.diamond = new ethers.Contract(diamondAddr, diamondAbi.abi, provider)
    this.diamondInteface = new ethers.Interface(diamondAbi.abi)
  }
}

export default function joystickBuilder() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_PROVIDER)
  return new Joystick(provider, presetValues.diamondAddr)
}

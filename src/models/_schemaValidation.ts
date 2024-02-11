import { ethers } from 'ethers'

export const isValidAddress = function (value: string) {
  return ethers.isAddress(value) && value !== ethers.ZeroAddress
}

/* @TODO: add further validation. */

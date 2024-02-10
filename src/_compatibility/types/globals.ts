import { ethers } from 'ethers'
import { Request, Response } from 'express'

/* ============================================== INTERFACES ============================================== */

export interface I_InputFunction {
  (req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined | void>
}

export interface I_DBState {
  lastProcessedBlock: number
}

export interface IRawEventData {
  eventData: ethers.LogDescription | null
  txData: {
    txHash: string
    blockHash: string
  }
}

export interface IParsedEventData {
  eventId: string
  eventName: string
  from: string
  tokenAddr: string
  tokenAmount: string
  txHash: string
  blockHash: string
}

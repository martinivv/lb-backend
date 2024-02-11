import { presetValues } from '../_compatibility/chain'
import { IParsedEventData } from '../_compatibility/types/globals'
import { DBState } from '../models/metadata'
import { Transaction } from '../models/transaction'

/* ================================================== TRANSACTIONS ================================================= */

export const createTxRecord = async function (parsedEventData: IParsedEventData) {
  try {
    await Transaction.create(parsedEventData)
    console.log(`> A record for the <${parsedEventData.eventName}> event has been saved!`)
  } catch {}
}

/* =============================================== DB_STATE =============================================== */

export const getLastProcessedBlock = async function () {
  try {
    const res = await DBState.findOne({})

    if (!res) return (await _createLastProcessedBlock())!.lastProcessedBlock

    return res.lastProcessedBlock
  } catch (e) {
    console.error(e)
  }
}

export const updateLastProcessedBlock = async function (blockNum: number) {
  try {
    const res = await DBState.findOneAndUpdate({ lastProcessedBlock: blockNum })
    await res?.save()
  } catch (e) {
    console.error(e)
  }
}

/* =============================================== MODULE'S METHODS =============================================== */

export const _createLastProcessedBlock = async function () {
  const diamondDeploymentBlock = presetValues.deployedOnBlockNumber
  return await DBState.create({ lastProcessedBlock: diamondDeploymentBlock })
}

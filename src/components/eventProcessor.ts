import { IParsedEventData, IRawEventData } from '../_compatibility/types/globals'
import { createTxRecord } from './dbRecords'

export const processEvent = async function (rawEventData: IRawEventData) {
  const { eventData, txData } = rawEventData

  const parsedEventData: IParsedEventData = {
    eventId: `${eventData?.topic}—${txData.txHash}`,
    eventName: eventData!.fragment.name,
    from: eventData!.args[2],
    tokenAddr: eventData!.args[0],
    tokenAmount: eventData!.args[1].toString(),
    txHash: txData.txHash,
    blockHash: txData.blockHash,
  }

  await createTxRecord(parsedEventData)
}

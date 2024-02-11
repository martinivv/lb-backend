import { ethers } from 'ethers'
import joystickBuilder, { presetValues } from '../_compatibility/chain'
import { IRawEventData } from '../_compatibility/types/globals'
import { getLastProcessedBlock, updateLastProcessedBlock } from './dbRecords'
import { processEvent } from './eventProcessor'

/* ============================================== PARAMETERS ============================================== */

const joystick = joystickBuilder()

const listenFor = [
  ethers.id('Deposit(address,uint256,address)'),
  ethers.id('Borrow(address,uint256,address)'),
  ethers.id('Repay(address,uint256,address)'),
  ethers.id('Withdraw(address,uint256,address)'),
]

const filter = {
  address: presetValues.diamondAddr,
  topics: [listenFor],
}

/* ================================================ METHODS =============================================== */

export const initListeners = async function () {
  _checkSync()

  joystick.provider.on(filter, async (event: any) => {
    const currentBlock = await joystick.provider.getBlockNumber()

    const rawEventData: IRawEventData = {
      eventData: joystick.diamondInteface.parseLog({ topics: event.topics, data: event.data }),
      txData: {
        txHash: event.transactionHash,
        blockHash: event.blockHash,
      },
    }

    await processEvent(rawEventData)

    await updateLastProcessedBlock(currentBlock)
  })
}

/* ================================================ MODULE'S METHODS =============================================== */

const _checkSync = async function () {
  const lastProcessedBlockInDb = await getLastProcessedBlock()
  const currentBlock = await joystick.provider.getBlockNumber()
  if (currentBlock > lastProcessedBlockInDb! + 1) await _syncDb(lastProcessedBlockInDb!, currentBlock)
}

const _syncDb = async function (lastProcessedBlockInDb: number, currentBlock: number) {
  const logs = await joystick.provider.getLogs({
    ...filter,
    fromBlock: lastProcessedBlockInDb,
    toBlock: currentBlock,
  })

  await updateLastProcessedBlock(currentBlock)

  logs.forEach(async (event: any) => {
    const rawEventData: IRawEventData = {
      eventData: joystick.diamondInteface.parseLog({ topics: event.topics, data: event.data }),
      txData: {
        txHash: event.transactionHash,
        blockHash: event.blockHash,
      },
    }

    await processEvent(rawEventData)
  })

  let blockAfterSync = await joystick.provider.getBlockNumber()
  const isSynced = currentBlock === blockAfterSync
  if (!isSynced) await _syncDb(currentBlock, blockAfterSync)
}

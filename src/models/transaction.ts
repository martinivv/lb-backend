import { Schema, model } from 'mongoose'
import { IParsedEventData } from '../_compatibility/types/globals'
import { isValidAddress } from './_schemaValidation'

/* ================================================ SCHEMAS =============================================== */

const transactionSchema = new Schema({
  eventId: {
    unique: true,
    type: String,
  },
  eventName: {
    required: true,
    type: String,
    minLength: 2,
  },
  from: {
    required: true,
    type: String,
    minlength: 42,
    maxlength: 42,
    validate: isValidAddress,
  },
  tokenAddr: {
    required: true,
    type: String,
    minlength: 42,
    maxlength: 42,
  },
  tokenAmount: {
    required: true,
    type: String,
    min: 1,
  },
  txHash: {
    required: true,
    type: String,
    minlength: 66,
    maxlength: 66,
  },
  blockHash: {
    required: true,
    type: String,
    minlength: 66,
    maxlength: 66,
  },
})

/* ================================================ MODELS ================================================ */

export const Transaction = model<IParsedEventData>('Transaction', transactionSchema)

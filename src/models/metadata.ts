import { Schema, model } from 'mongoose'
import { I_DBState } from '../_compatibility/types/globals'

/* ================================================ SCHEMAS =============================================== */

const metadata = new Schema({
  lastProcessedBlock: {
    required: true,
    type: Number,
    min: 1,
  },
})

/* ================================================ MODELS ================================================ */

export const DBState = model<I_DBState>('_metadata', metadata, '_metadata')

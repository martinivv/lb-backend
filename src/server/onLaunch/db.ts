import mongoose from 'mongoose'

const connectToDB = async function (DB_URI: string) {
  await mongoose.connect(DB_URI)
}

/* ========================================== SEND FOR EXECUTION ========================================== */

export default function (DB_URI: string) {
  connectToDB(DB_URI).catch((e) => console.error(e))
}

import mongoose from 'mongoose'

const mainConfig = async function () {
  const DB_URI = process.env.DB_URI!

  await mongoose.connect(DB_URI)
}

/* ========================================== APPLY MODULE ========================================== */

export default function dbConfig() {
  mainConfig().catch((e) => console.error(e))
}

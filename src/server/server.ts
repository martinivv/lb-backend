import cors from 'cors'
import { config as dotenvConfig } from 'dotenv'
import express, { Express } from 'express'
import serverConfig from './onLaunch/config'
import connectToDB from './onLaunch/db'
import rootRouter from './onLaunch/routes'

dotenvConfig()
const PORT = process.env.PORT || 8080
const DB_URI = process.env.DB_URI as string

/* ========================================== APP ========================================== */

const APP: Express = express()

// ======= Configuration =======
APP.use(cors())

serverConfig()
connectToDB(DB_URI)
APP.use(rootRouter)
// =======

APP.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))

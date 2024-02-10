import cors from 'cors'
import { config as dotenvConfig } from 'dotenv'
import express, { Express } from 'express'
import validateEnv from '../_compatibility/validateEnv'
import apiEndpointsConfig from './config/apiEndpoints'
import dbConfig from './config/db'
import serverConfig from './config/server'

dotenvConfig()
// Especially important if we're dealing with logic-related variables
validateEnv()

const PORT = process.env.PORT!

/* ========================================== APP ========================================== */

const APP: Express = express()

// ================= CONFIGS =================
APP.use(cors())

serverConfig()
dbConfig()
APP.use(apiEndpointsConfig(APP))
// ==========================

APP.listen(PORT, () => console.log(`\n>>> Server is running on port ${PORT}...\n${Array(50).join('=')}\n`))

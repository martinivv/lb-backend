import { Express } from 'express'
import { errorHandler } from '../../routes/middlewares/error'

const mainConfig = async function (APP: Express) {
  /* ... */

  // Error handling
  APP.use(errorHandler)
}

/* ========================================== SEND FOR EXECUTION ========================================== */

export default function (APP: Express) {
  mainConfig(APP).catch((e) => console.error(e))
}

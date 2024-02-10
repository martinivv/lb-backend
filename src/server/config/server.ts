import { initListeners } from '../../components/eventListener'

const mainConfig = async function () {
  /* ... */

  await initListeners()
}

/* ========================================== APPLY MODULE ========================================== */

export default function serverConfig() {
  mainConfig().catch((e) => console.error(e))
}

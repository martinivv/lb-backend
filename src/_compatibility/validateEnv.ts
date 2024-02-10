export default function validateEnv() {
  const check = ['RPC_PROVIDER', 'DB_URI', 'PORT']
  const notSetVariables = check.filter((variable) => !process.env[variable] || process.env[variable]!.trim() === '')
  if (notSetVariables.length > 0) throw new Error('Missing ENV variables.')
}

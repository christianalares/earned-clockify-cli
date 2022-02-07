import { CONFIG_PATH } from './constants'

export const printErrorReadingConfigFile = () => {
  console.log('')
  console.log('🚨 Error reading config file')
  console.log('Try running "earned --token=<token> --workspace-id=<workspace-id>"')
  console.log(`or manually removing the config file (${CONFIG_PATH}) and try again`)
  console.log('')
}

export const printInvalidConfigFile = () => {
  console.log('')
  console.log('🚨 Invalid config file')
  console.log('Run "earned --token=<token> --workspace-id=<workspace-id>"')
  console.log('')
  console.log(`The config will be saved to ${CONFIG_PATH} in this format:`)
  console.log(`
{
  "token": "my-secret-token",
  "workspace-id": "my-workspace-id"
}
  `)
}

export const printConfigFileNotFound = () => {
  console.log('')
  console.log('🚨 Config file could not be found')
  console.log('Run "earned --token=<token> --workspace-id=<workspace-id>"')
  console.log('')
  console.log(`The config will be saved to ${CONFIG_PATH} in this format:`)
  console.log(`
{
  "token": "my-secret-token",
  "workspace-id": "my-workspace-id"
}
  `)
}

export const printInvalidArgs = () => {
  console.log('')
  console.log('🚨 Invalid arguments supplied')
  console.log('Supply no arguments or with `--token` and `--workspace-id` such as:')
  console.log('earned --token=my-secret-token --workspace-id=my-workspace-id')
}

export const printFetchError = () => {
  console.log('')
  console.log('🚨 Unknown error fetching earnings')
}

export const printConfigSet = () => {
  console.log('')
  console.log(`✅ Config saved to: ${CONFIG_PATH}`)
  console.log('Run "earned" to see your earnings')
}

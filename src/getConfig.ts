import { existsSync, readFileSync } from 'fs'
import { CONFIG_PATH } from './constants'
import { printInvalidConfigFile, printConfigFileNowFound } from './print'
import { Config } from './types'

const getConfig = (): Config => {
  if (!existsSync(CONFIG_PATH)) {
    printConfigFileNowFound(CONFIG_PATH)
    process.exit(1)
  }

  const config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8').trim())

  if (!config.token || !config['workspace-id']) {
    printInvalidConfigFile(CONFIG_PATH)
    process.exit(1)
  }

  return config
}

export default getConfig

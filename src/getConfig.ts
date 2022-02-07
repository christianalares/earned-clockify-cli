import type { Config } from './types'
import { existsSync, readFileSync } from 'fs'
import { CONFIG_PATH } from './constants'
import { printInvalidConfigFile, printConfigFileNotFound, printErrorReadingConfigFile } from './print'

const getConfig = (): Config => {
  if (!existsSync(CONFIG_PATH)) {
    printConfigFileNotFound()
    process.exit(1)
  }

  let config

  try {
    config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8').trim())
  } catch (e) {
    printErrorReadingConfigFile()
    process.exit(1)
  }

  if (!config.token || !config['workspace-id']) {
    printInvalidConfigFile()
    process.exit(1)
  }

  return config
}

export default getConfig

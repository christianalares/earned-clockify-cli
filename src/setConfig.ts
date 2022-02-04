import type { Config } from './types'
import { writeFileSync } from 'fs'
import { CONFIG_PATH } from './constants'

const setConfig = (config: Config) => {
  writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2))
}

export default setConfig

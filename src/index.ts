#!/usr/bin/env node
import type { Config } from './types'
import { printConfigSet, printInvalidArgs } from './print'
import run from './run'
import setConfig from './setConfig'

const [, , ...inputArgs] = process.argv

if (inputArgs.length === 1 || inputArgs.length > 2) {
  printInvalidArgs()
  process.exit(1)
}

if (inputArgs.length === 2) {
  const config: Config | {} = inputArgs.reduce((acc, current) => {
    const key = current.split('=')[0].replace(/\--/g, '').trim()
    const value = current.split('=')[1].trim()
    return {
      ...acc,
      [key]: value,
    }
  }, {})

  if (!('workspace-id' in config) || !('token' in config)) {
    printInvalidArgs()
    process.exit(1)
  }

  setConfig(config)
  printConfigSet()
  process.exit(0)
}

run()

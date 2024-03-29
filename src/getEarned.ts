import type { JSONResponse as JSONResponse } from './types'
import 'isomorphic-fetch'
import getConfig from './getConfig'
import { printFetchError } from './print'

const getEarned = async (from: string, to: string): Promise<number | string | null> => {
  const config = getConfig()
  const endpointUrl = `https://reports.api.clockify.me/v1/workspaces/${config['workspace-id']}/reports/summary`

  const body = {
    dateRangeStart: from,
    dateRangeEnd: to,
    summaryFilter: {
      groups: ['PROJECT'],
    },
  }

  try {
    const response: Response = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'X-Api-Key': config.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (response.status !== 200) {
      return `Error (code: ${response.status})`
    }

    const json: JSONResponse = await response.json()

    const total = json?.totals?.[0]?.totalAmount

    if (!total) {
      return null
    }

    return Math.round(total / 100)
  } catch {
    printFetchError()
    process.exit(1)
  }
}

export default getEarned

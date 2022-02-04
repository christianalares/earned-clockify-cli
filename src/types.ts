export type Config = {
  'workspace-id': string
  token: string
}

export type JSONResponse = {
  totals: Array<{
    _id: string
    totalTime: number
    totalBillableTime: number
    entriesCount: number
    totalAmount: number
  } | null>
  groupOne:
    | Array<{
        duration: number
        amount: number
        _id: string
        name: string
        nameLowerCase: string
        color: string
        clientName: string
      }>
    | []
}

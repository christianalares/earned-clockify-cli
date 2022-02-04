import { DateTime } from 'luxon'
import getConfig from './getConfig'
import getEarned from './getEarned'

const formatISODate = (date: string) => date.split('+')[0] + 'Z'
const formatSEK = (sek: number | null) => {
  return `${Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(sek ?? 0)}${sek === null ? ' (no data)' : ''}`
}

const prevYear = {
  start: formatISODate(DateTime.local().minus({ years: 1 }).startOf('year').toISO()),
  end: formatISODate(DateTime.local().minus({ years: 1 }).endOf('year').toISO()),
}

const prevMonth = {
  start: formatISODate(DateTime.local().minus({ months: 1 }).startOf('month').toISO()),
  end: formatISODate(DateTime.local().minus({ months: 1 }).endOf('month').toISO()),
}

const prevDay = {
  start: formatISODate(DateTime.local().minus({ days: 1 }).startOf('day').toISO()),
  end: formatISODate(DateTime.local().minus({ days: 1 }).endOf('day').toISO()),
}

const thisYear = {
  start: formatISODate(DateTime.local().startOf('year').toISO()),
  end: formatISODate(DateTime.local().endOf('month').toISO()),
}

const thisMonth = {
  start: formatISODate(DateTime.local().startOf('month').toISO()),
  end: formatISODate(DateTime.local().endOf('month').toISO()),
}

const thisDay = {
  start: formatISODate(DateTime.local().startOf('day').toISO()),
  end: formatISODate(DateTime.local().endOf('day').toISO()),
}
const run = async () => {
  const prevYearData = await getEarned(prevYear.start, prevYear.end)
  const prevMonthData = await getEarned(prevMonth.start, prevMonth.end)
  const prevDayData = await getEarned(prevDay.start, prevDay.end)

  const thisYearData = await getEarned(thisYear.start, thisYear.end)
  const thisMonthData = await getEarned(thisMonth.start, thisMonth.end)
  const thisDayData = await getEarned(thisDay.start, thisDay.end)

  console.log(`Last year:     ${formatSEK(prevYearData)}`)
  console.log(`Last month:    ${formatSEK(prevMonthData)}`)
  console.log(`Yesterday:     ${formatSEK(prevDayData)}`)
  console.log('-------------------------')
  console.log(`This year:     ${formatSEK(thisYearData)}`)
  console.log(`This month:    ${formatSEK(thisMonthData)}`)
  console.log(`This day:      ${formatSEK(thisDayData)}`)
  process.exit(0)
}

export default run

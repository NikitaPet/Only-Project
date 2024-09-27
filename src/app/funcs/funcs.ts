import { type Branch } from '@app/types'

export const getBranchDates = (branch: Branch) =>
    branch?.events?.map((event) => event?.date)

export const getSupremums = (arr: number[]) => {
    return [Math.min(...arr), Math.max(...arr)]
}

export const getBranchesIntervals = (branches: Branch[]) => {
    return branches
        ?.map((branch) => getBranchDates(branch))
        ?.map((datesArray) => getSupremums(datesArray))
}

export const getNewShownDate = (targetDate: number, currentDate: number) => {
    const yearsGap = targetDate - currentDate
    const newShownDate = currentDate + Math.sign(yearsGap)
    return newShownDate
}

export const incrementTheDate = (
    targetDate: number,
    currentDate: number,
    setNewDate: Function,
    durationMS: number
) => {
    const newShownDate = getNewShownDate(targetDate, currentDate)
    let timerId: NodeJS.Timeout
    if (newShownDate !== currentDate)
        timerId = setTimeout(() => setNewDate(newShownDate), durationMS)
    return timerId
}

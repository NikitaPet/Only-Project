import { useState, useEffect } from 'react'
import cn from 'classnames'
import { incrementTheDate } from './funcs'

import styles from './styles/App.module.scss'

export function AppTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles['app-title']}>
            <h1 className={styles['title-text']}>{children}</h1>
        </div>
    )
}

export function BranchInterval({ startDate, endDate }: BranchIntervalProps) {
    const [shownStartDate, setShownStartDate] = useState(startDate)
    const [shownEndDate, setShownEndDate] = useState(endDate)

    useEffect(() => {
        incrementTheDate(startDate, shownStartDate, setShownStartDate, 40)
    }, [startDate, shownStartDate])

    useEffect(() => {
        incrementTheDate(endDate, shownEndDate, setShownEndDate, 40)
    }, [endDate, shownEndDate])

    return (
        <div className={styles['branch-interval']}>
            <h1 className={cn(styles['date'], styles['start-date'])}>
                {shownStartDate ?? 0}
            </h1>
            <h1 className={cn(styles['date'], styles['end-date'])}>
                {shownEndDate ?? 0}
            </h1>
        </div>
    )
}

export function BG() {
    return (
        <div className={styles['bg']}>
            <div className={styles['grid']} />
        </div>
    )
}

export type BranchIntervalProps = { startDate: number; endDate: number }

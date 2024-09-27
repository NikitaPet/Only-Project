import { useState, useMemo } from 'react'
import { createContext } from 'react'
import BranchesSlider from './BranchesSlider'
import { AppTitle, BranchInterval, BG } from './components'
import { type BranchNumber, type ContextValue } from './types'
import { getBranchesIntervals } from './funcs'

import '@global/styles/global-styles.scss'
import styles from './styles/App.module.scss'

import branches from 'data/timeBranches.json'

export default function App() {
    const [activeBranchNumber, setActiveBranchNumber] =
        useState<BranchNumber>(1)

    const timeIntervals = useMemo(() => getBranchesIntervals(branches), [])
    const [startDate, endDate] = timeIntervals[activeBranchNumber - 1]

    return (
        <Context.Provider
            value={{ branches, activeBranchNumber, setActiveBranchNumber }}
        >
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <AppTitle>{'Исторические \n даты'}</AppTitle>
                    <BranchInterval {...{ startDate, endDate }} />
                    <BranchesSlider />
                </div>
                <BG />
            </div>
        </Context.Provider>
    )
}

export const Context = createContext<ContextValue>(null)

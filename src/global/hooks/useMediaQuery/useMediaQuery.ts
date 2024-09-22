'use client'

import { useMediaQuery } from 'react-responsive'

import breakpoints from './breakpoints.module.scss'

const { tablet, desktop } = breakpoints

export default function useCustomQuery(mode: string) {
    const availableModes = { tablet, desktop }
    const isModeAvailable = !!availableModes[mode]

    const query = JSON.parse(isModeAvailable ? availableModes[mode] : '""')
    const isCurrentMode = useMediaQuery({ query })

    const response = isModeAvailable ? isCurrentMode : null
    return response
}
export { useCustomQuery as useMediaQuery }

'use client'

import { useMemo } from 'react'
import { debounce } from 'lodash'

export default function useDebounce(
    func: () => any,
    delay: number,
    deps: any[]
) {
    return useMemo(() => debounce(func, delay), deps)
}
export { useDebounce }

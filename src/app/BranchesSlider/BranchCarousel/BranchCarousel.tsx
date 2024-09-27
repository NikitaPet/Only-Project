import { useMemo, useContext } from 'react'
import { Context } from '@app/App'
import { Point, Title } from './components'
import { getTurnAngle } from './funcs'

import styles from './styles/BranchCarousel.module.scss'

export default function BranchCarousel() {
    const { branches } = useContext(Context)
    return (
        <div className={styles.wrapper}>
            <div className={styles.circle}>
                {branches.map((branch, i) => (
                    <Item data={branch} number={i + 1} key={i + branch?.name} />
                ))}
            </div>
        </div>
    )
}

export function Item({ data, number }) {
    const { activeBranchNumber, setActiveBranchNumber } = useContext(Context)
    const isItemActive = activeBranchNumber === number

    const { branches } = useContext(Context)
    const branchesCount = branches?.length
    const turnAngle = useMemo(
        () => getTurnAngle(number, activeBranchNumber, branchesCount),
        [activeBranchNumber, branches]
    )

    return (
        <ItemWrapper {...{ turnAngle }}>
            <Point
                number={number}
                onClick={() => setActiveBranchNumber(number)}
                isActive={isItemActive}
            />
            <Title isActive={isItemActive}>{data?.name}</Title>
        </ItemWrapper>
    )
}

export function ItemWrapper({ turnAngle, children }: ItemProps) {
    return (
        <div
            className={styles['item-wrapper']}
            style={{ transform: `rotate(${turnAngle}turn)` }}
        >
            <div
                className={styles['item-balancer']}
                style={{ transform: `rotate(${-turnAngle}turn)` }}
            >
                <div className={styles['item-content']}>{children}</div>
            </div>
        </div>
    )
}

export type ItemProps = {
    turnAngle: number
    children: React.ReactNode
}

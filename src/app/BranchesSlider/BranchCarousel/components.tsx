import cn from 'classnames'
import { type HTMLDivProps, type HTMLHeadingProps } from './types'

import styles from './styles/BranchCarousel.module.scss'

export function Point({ number, isActive, onClick }: CirclePointProps) {
    return (
        <div
            className={cn(styles['carousel-circle-point'], {
                [styles['inactive']]: !isActive,
            })}
            onClick={onClick}
        >
            <p className={styles['point-number']}>{number}</p>
        </div>
    )
}

export function Title({ isActive, children }: TitleProps) {
    return (
        <h2
            className={cn(styles['branch-title'], {
                [styles.inactive]: !isActive,
            })}
        >
            {children}
        </h2>
    )
}

export type CirclePointProps = HTMLDivProps & {
    number: number
    isActive: boolean
}

export type TitleProps = HTMLHeadingProps & { isActive?: Boolean }

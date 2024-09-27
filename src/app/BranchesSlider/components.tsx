import { IoIosArrowBack } from 'react-icons/io'
import cn from 'classnames'
import { type HTMLHeadingProps, type HTMLButtonProps } from './types'

import styles from './styles/BranchesSlider.module.scss'

export function PageNumber({ slideNumber, slidesCount }: PageNumberProps) {
    const getText = (number: number) => (number >= 10 ? number : `0${number}`)
    return (
        <p className={styles['page-number-text']}>
            {`${getText(slideNumber)}/${getText(slidesCount)}`}
        </p>
    )
}

export function ControlButton({
    isActive,
    className,
    onClick,
}: ControlButtonProps) {
    return (
        <button
            className={cn(styles['swiper-control-button'], {
                [styles['inactive']]: !isActive,
                [className]: className,
            })}
            onClick={onClick}
        >
            <IoIosArrowBack className={cn(styles['arrow'])} />
        </button>
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

export interface PageNumberProps {
    slideNumber: number
    slidesCount: number
}

export type ControlButtonProps = HTMLButtonProps & { isActive?: Boolean }

export type TitleProps = HTMLHeadingProps & { isActive?: Boolean }

import { type SwiperClass } from 'swiper/react'
import { IoIosArrowBack } from 'react-icons/io'
import cn from 'classnames'
import { type HTMLButtonProps } from './types'

import styles from './styles/EventsSlider.module.scss'

export function ControlButton({
    className,
    onClick,
    isActive,
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

export interface SwiperControlProps {
    swiper: SwiperClass
    slideNumber: number
}

export type ControlButtonProps = HTMLButtonProps & { isActive?: Boolean }

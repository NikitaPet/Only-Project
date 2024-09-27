import { useEffect, useState } from 'react'
import { Swiper, type SwiperClass } from 'swiper/react'
import { FreeMode, Mousewheel } from 'swiper/modules'
import cn from 'classnames'
import { ControlButton } from './components'

import styles from './styles/EventsSlider.module.scss'

export default function CustomSwiper({ children }: SwiperProps) {
    const [swiper, setSwiper] = useState<SwiperClass>(null)

    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(true)
    const updateBoundaryState = () => {
        setIsBeginning(swiper?.isBeginning)
        setIsEnd(swiper?.isEnd)
    }

    useEffect(() => {
        updateBoundaryState()
    }, [swiper])

    return (
        <Swiper
            modules={[FreeMode, Mousewheel]}
            slidesPerView={'auto'}
            freeMode={true}
            mousewheel={true}
            onInit={(swiper) => setSwiper(swiper)}
            onSlideChange={() => updateBoundaryState()}
            onReachBeginning={() => updateBoundaryState()}
            onReachEnd={() => updateBoundaryState()}
            breakpoints={{
                [mobileBreakpoint]: {
                    spaceBetween: mobileSlidesGap,
                    slidesOffsetBefore: mobileSlidesOffset,
                    slidesOffsetAfter: mobileSlidesOffset,
                },
                [desktopBreakpoint]: {
                    spaceBetween: desktopSlidesGap,
                    slidesOffsetBefore: desktopSlidesOffset,
                    slidesOffsetAfter: desktopSlidesOffset,
                },
            }}
        >
            {children}

            <ControlButton
                className={cn(styles['left'])}
                onClick={() => swiper.slidePrev()}
                isActive={!isBeginning}
            />

            <ControlButton
                className={styles['right']}
                onClick={() => swiper.slideNext()}
                isActive={!isEnd}
            />
        </Swiper>
    )
}
export { CustomSwiper as Swiper }

export interface SwiperProps {
    children: React.ReactNode
}

const mobileBreakpoint = Number(styles['mobile-start-px'])
const mobileSlidesOffset = Number(styles['mobile-app-content-padding-px'])
const mobileSlidesGap = Number(styles['mobile-slides-gap-px'])

const desktopBreakpoint = Number(styles['desktop-start-px'])
const desktopSlidesOffset = Number(styles['desktop-app-content-padding-px'])
const desktopSlidesGap = Number(styles['desktop-slides-gap-px'])

import { useState, useEffect, useRef, useContext } from 'react'
import { Swiper, type SwiperClass } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { EffectFade } from 'swiper/modules'
import gsap, { useGSAP } from '@animation/gasp'
import { Context } from '@app/App'

import styles from './styles/BranchesSlider.module.scss'

export default function CustomSwiper({ onInit, children }: SwiperProps) {
    const { activeBranchNumber, setActiveBranchNumber } = useContext(Context)
    const [swiper, setSwiper] = useState<SwiperClass>(null)
    const [slideNumber, setSlideNumber] = useState<number>(null)
    const swiperRef = useRef()

    useGSAP(
        () => {
            const activeSlideTargets = `.${styles['branch-slide']}.swiper-slide-active .${styles['slide-content']}`
            gsap.from(activeSlideTargets, { duration: 1, opacity: 0, y: 40 })
        },
        { dependencies: [slideNumber], scope: swiperRef }
    )

    useEffect(() => {
        swiper?.slideTo(activeBranchNumber - 1)
        setSlideNumber(activeBranchNumber)
    }, [activeBranchNumber])

    return (
        <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, EffectFade]}
            pagination={{ clickable: true }}
            allowTouchMove={false}
            speed={500}
            effect={'fade'}
            fadeEffect={{ crossFade: true }}
            onInit={(swiper) => {
                onInit(swiper)
                setSwiper(swiper)
            }}
            onSlideChange={(swiper) =>
                setActiveBranchNumber(swiper?.activeIndex + 1)
            }
        >
            {children}
        </Swiper>
    )
}
export { CustomSwiper as Swiper }

export interface SwiperProps {
    onInit: (swiper: SwiperClass) => void
    children: React.ReactNode
}

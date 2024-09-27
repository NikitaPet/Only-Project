import { useState, useEffect, useContext } from 'react'
import { SwiperSlide, type SwiperClass } from 'swiper/react'
import { Context } from '@app/App'
import Swiper from './Swiper'
import BranchCarousel from './BranchCarousel'
import EventsSlider from './EventsSlider'
import { Title, PageNumber, ControlButton } from './components'

import styles from './styles/BranchesSlider.module.scss'

export default function BranchesSlider() {
    const { branches, activeBranchNumber } = useContext(Context)
    const [swiper, setSwiper] = useState<SwiperClass>(null)

    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(true)

    useEffect(() => {
        setIsBeginning(swiper?.isBeginning)
        setIsEnd(swiper?.isEnd)
    }, [swiper, activeBranchNumber])

    return (
        <div className={styles.wrapper}>
            <BranchCarousel />
            <Control {...{ swiper, isBeginning, isEnd }} />
            <Swiper onInit={(swiper) => setSwiper(swiper)}>
                {branches.map((branch, i) => (
                    <SwiperSlide
                        key={i + branch?.name}
                        className={styles['branch-slide']}
                    >
                        <div className={styles['slide-content']}>
                            <Title>{branch?.name}</Title>
                            <EventsSlider events={branch.events} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export function Control({ swiper, isBeginning, isEnd }: ControlProps) {
    const { activeBranchNumber } = useContext(Context)
    return (
        <div className={styles['swiper-control']}>
            <PageNumber
                slidesCount={swiper?.slides?.length ?? 0}
                slideNumber={activeBranchNumber}
            />
            <div className={styles['swiper-control-buttons']}>
                <ControlButton
                    className={styles['left']}
                    onClick={() => swiper?.slidePrev()}
                    isActive={!isBeginning}
                />
                <ControlButton
                    className={styles['right']}
                    onClick={() => swiper?.slideNext()}
                    isActive={!isEnd}
                />
            </div>
        </div>
    )
}

export interface ControlProps {
    swiper: SwiperClass
    isBeginning: boolean
    isEnd: boolean
}

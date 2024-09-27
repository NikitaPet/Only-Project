import { SwiperSlide } from 'swiper/react'
import { type BranchEvent } from '@app/types'
import Swiper from './Swiper'

import styles from './styles/EventsSlider.module.scss'

export default function EventsSlider({ events }: EventsSliderProps) {
    return (
        <div className={styles.wrapper}>
            <Swiper>
                {events.map((event, i) => (
                    <SwiperSlide
                        key={i + event?.description}
                        className={styles['event-slide']}
                    >
                        <div className={styles['event-data']}>
                            <h3 className={styles['date']}>{event?.date}</h3>
                            <p className={styles['description']}>
                                {event?.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export type EventsSliderProps = { events: BranchEvent[] }

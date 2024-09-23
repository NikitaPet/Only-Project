import { BG } from './components'

import styles from './styles/IntervalsSlider.module.scss'

export default function IntervalsSlider() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.slider}>Intervals Slider</div>
            <BG />
        </div>
    )
}

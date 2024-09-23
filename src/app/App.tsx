import IntervalsSlider from './IntervalsSlider'
import DatesSlider from './DatesSlider'
import { AppTitle, Dates, BG } from './components'

import '@global/styles/global-styles.scss'
import styles from './styles/App.module.scss'

import data from 'data/data.json'

export default function App() {
    const datesPoint = data[0]
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <AppTitle>{'Исторические \n даты'}</AppTitle>
                <Dates dates={datesPoint.dates} />
                <IntervalsSlider />
                <DatesSlider />
            </div>
            <BG />
        </div>
    )
}

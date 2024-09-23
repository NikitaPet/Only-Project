import styles from './styles/App.module.scss'

export function AppTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles['app-title']}>
            <h1 className={styles['title-text']}>{children}</h1>
        </div>
    )
}

export function Dates({ dates }: { dates: number[] }) {
    return (
        <div className={styles['dates']}>
            <div className={styles['start-date']}>
                <h1 className={styles['date-text']}>{dates[0]}</h1>
            </div>
            <div className={styles['end-date']}>
                <h1 className={styles['date-text']}>{dates[1]}</h1>
            </div>
        </div>
    )
}

export function BG() {
    return (
        <div className={styles['bg']}>
            <div className={styles['grid']} />
        </div>
    )
}

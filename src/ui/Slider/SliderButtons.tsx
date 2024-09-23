import classNames from 'classnames'

import styles from './styles/SliderButtons.module.scss'

export default function SliderButtons({
  slider,
  loop,
  isDesktopPaginationEnable,
  className,
  slides,
  slide,
  slidesPerView,
}) {
  const slidesNum = Array.isArray(slides) ? slides.length : 0
  const isBeginning = (slide === 1) && !loop
  const isEnd = (slide === (slidesNum - slidesPerView + 1)) && !loop
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.disable]: !isDesktopPaginationEnable || slidesNum <= 1,
        [className]: !!className,
      })}
    >
      <div
        onClick={() => slider?.slidePrev()}
        className={classNames(styles['slider-button'], {
          [styles.inactive]: isBeginning,
        })}
      >
        <div className={classNames(styles.arrow)} />
      </div>

      <div
        onClick={() => slider?.slideNext()}
        className={classNames(styles['slider-button'], {
          [styles.inactive]: isEnd,
        })}
      >
        <div className={classNames(styles.arrow)} />
      </div>
    </div>
  )
}
export { SliderButtons }

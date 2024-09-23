
// import 'swiper/css'
// import 'swiper/css/bundle'
// import 'swiper/css/effect-fade';
import classNames from 'classnames'
import { useState, useEffect } from 'react'

import { Swiper, SwiperSlide as Slide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules'
import SliderButtons from './SliderButtons'

import './styles/Slider.scss'
import styles from './styles/Slider.module.scss'

export default function Slider({
  children: slides,
  effect = 'slide',
  ['slide']: propsSlide,
  onSlideChange = () => {},
  //
  slidesPerView = 1,
  spaceBetween = 0,
  loop = false,
  className = styles['default-slider-name'],
  sliderButtonsClassName = styles['default-slider-buttons-name'],
  //
  isDesktopPaginationEnable = true,
  isMobilePaginationEnable = true,
}) {
  const [slider, setSlider] = useState(null)
  const [controlledSlide, setControlledSlide] = useState(1)
  const slide = propsSlide !== undefined ? propsSlide : controlledSlide

  useEffect(() => {
    slider?.slideTo(slide - 1)
  }, [propsSlide, controlledSlide])

  return (
    <div className={styles.wrapper}>
      <Swiper
        className={classNames(styles.slider, {
          ['swiper-mobile-pagination-disable']: !isMobilePaginationEnable,
          [className]: !!className,
        })}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        effect={effect}
        {...{ slidesPerView, spaceBetween, loop }}
        onInit={(swiper) => setSlider(swiper)}
        onSlideChange={(swiper) => {
          // onSlideChange(swiper.activeIndex + 1)
          setControlledSlide(swiper.activeIndex + 1)
        }}
      >
        {slides.map((slideContent, i) => (
          <Slide key={i}>{slideContent}</Slide>
        ))}
      </Swiper>

      <SliderButtons
        className={classNames(styles['slider-buttons'], {
          [sliderButtonsClassName]: !!sliderButtonsClassName,
          loop: loop
        })}
        {...{ slider, slides, slide, slidesPerView, isDesktopPaginationEnable, loop }}
      />
    </div>
  )
}
export { Slider }

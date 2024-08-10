import styles from "./Carousel.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { CardMovie } from "../CardMovie/CardMovie";
import { IShortMovie } from "../../interfaces";
import { Mousewheel } from 'swiper/modules'

interface Props {
  titleSection: string;
  carouselItems: IShortMovie[]
}

export const Carousel = ({ titleSection, carouselItems }: Props) => {
  return (
    <section>
      <h2 className={styles["title-section"]}>{titleSection}</h2>

      <Swiper
        modules={[ Mousewheel ]}
        spaceBetween={30}
        slidesPerView={'auto'}
        mousewheel={{
          enabled: true,
          forceToAxis: true
        }}
        style={{
          marginBottom: '50px'
        }}
      >
      {
        carouselItems.map((movie) => (
          <SwiperSlide key={movie.id} style={{ width: 'auto' }}>
            <CardMovie movie={movie} />
          </SwiperSlide>
        ))
      }
    </Swiper>
    </section >
  )
}

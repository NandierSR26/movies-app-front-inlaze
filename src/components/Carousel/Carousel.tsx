import styles from "./Carousel.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { CardMovie } from "../CardMovie/CardMovie";

interface Props {
  titleSection: string;
}

export const Carousel = ({ titleSection }: Props) => {
  return (
    <section>
      <h2 className={styles["title-section"]}>{titleSection}</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={'auto'}

        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide style={{ width: 'auto' }}>
          <CardMovie />
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          <CardMovie />
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          <CardMovie />
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          <CardMovie />
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          <CardMovie />
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto' }}>
          <CardMovie />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

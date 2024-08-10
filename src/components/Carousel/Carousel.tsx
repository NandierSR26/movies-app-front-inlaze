import styles from "./Carousel.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { CardMovie } from "../CardMovie/CardMovie";
import { IShortMovie } from "../../interfaces";

interface Props {
  titleSection: string;
  carouselItems: IShortMovie[]
}

export const Carousel = ({ titleSection, carouselItems }: Props) => {
  return (
    <section>
      <h2 className={styles["title-section"]}>{titleSection}</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={'auto'}

        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          carouselItems.map((movie) => (
            <SwiperSlide key={movie.id} style={{ width: 'auto' }}>
              <CardMovie movie={movie} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

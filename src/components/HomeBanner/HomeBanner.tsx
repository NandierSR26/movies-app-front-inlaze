import { IShortMovie } from "../../interfaces"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import { formatRating } from "../../utils/utils"
import { useMoviesContext } from "../../context/MoviesProvider"
import shareIcon from '/assets/share-icon-2.svg'

import styles from './HomeBanner.module.scss'
import { LikeButton } from "../Ui/LikeButton"
import { SaveButton } from "../Ui/SaveButton"

export const HomeBanner = () => {

  const { moviesByPopularity } = useMoviesContext()

  return (
    <section className={styles.banner}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={moviesByPopularity.length > 1}
        autoplay={{
          delay: 5000,
        }}
        pagination={{}}
        style={{
          height: '100%',
          position: 'relative',
          display: "flex",
          justifyContent: 'center'
        }}
      >
        {
          moviesByPopularity.slice(0, 7).map((movie) => (
            <SwiperSlide
              key={movie.id}
            >
              <div className={styles["banner-backdrop-image"]} style={{
                width: '100%',
                height: '100%',
                backgroundImage: `
                linear-gradient(
                  to top, 
                  rgba(0, 0, 0, 1) 19%, 
                  rgba(102, 102, 102, 0) 100%
                ),
                url(${import.meta.env.VITE_TMDB_URL_IMAGES}/original${movie.backdrop_path})
              `,
                backgroundSize: 'cover',
                backgroundPositionX: 'center',
                backgroundPositionY: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
              </div>

              <div className={styles["movie-info"]}>

                <div className={styles["row-1"]}>
                  <div>
                    <h1>{movie.original_title}</h1>
                    <p>{movie.overview}</p>
                  </div>

                </div>

                <div className={styles["row-2"]}>
                  <div className={styles["rating"]}>
                    <CircularProgressbar
                      value={+formatRating(movie.vote_average) / 100}
                      maxValue={1}
                      text={`${formatRating(movie.vote_average)}%`}
                      styles={buildStyles({
                        textSize: '35px',
                        textColor: (movie.vote_average >= 8) ? "#4DA14F" : (movie.vote_average < 8 && movie.vote_average >= 5) ? '#FF8800' : '#E54545',
                        trailColor: (movie.vote_average >= 8) ? "#d1e9d2" : (movie.vote_average < 8 && movie.vote_average >= 5) ? '#ffe7cc' : '#fef8f8',
                        pathColor: (movie.vote_average >= 8) ? "#4DA14F" : (movie.vote_average < 8 && movie.vote_average >= 5) ? '#FF8800' : '#E54545',
                      })}
                    />
                  </div>

                  <div className={styles.options}>
                    <LikeButton style={{ width: '30px', height: '30px' }} />
                    <SaveButton style={{ width: '30px', height: '30px' }} />
                    <img src={shareIcon} alt="share-icon" style={{ width: '30px', height: '30px' }} />
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section >
  )
}

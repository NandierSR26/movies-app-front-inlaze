import { CardMovie, MainLayout } from "../../components"
import { useMoviesContext } from "../../context/MoviesProvider"
import InfiniteScroll from 'react-infinite-scroll-component'

export const PopularityPage = () => {

  const { getMoviesByPopularity, moviesByPopularity, hasMore } = useMoviesContext()

  return (
    <MainLayout>
      <InfiniteScroll
        dataLength={moviesByPopularity.length}
        hasMore={hasMore}
        next={getMoviesByPopularity}
        loader={<p>Loading...</p>}
        endMessage={<p>No more movies</p>}
      >
        {
          moviesByPopularity.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))
        }
      </InfiniteScroll>
    </MainLayout>
  )
}

export default PopularityPage

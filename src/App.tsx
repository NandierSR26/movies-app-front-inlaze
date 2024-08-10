import { useContext, useEffect } from "react";
import { HomePage } from "./pages";
import { useMoviesContext } from "./context/MoviesProvider";


function App() {
  const { getMoviesByPopularity, moviesByPopularity } = useMoviesContext()

  useEffect(() => {
    getMoviesByPopularity()
  }, [])

  useEffect(() => {
    console.log({ moviesByPopularity })
  }, [ moviesByPopularity ])

  return <HomePage />;
}

export default App;


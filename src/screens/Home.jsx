import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../features/movieSlice";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const { movies, isLoading } = useSelector((state) => state.movieData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Welcome to React Movies DB</h1>
      <p>Discover and explore your favorite movies,</p>

      <div className="movie-list">
        {movies &&
          movies.results && movies.results.map((item, index) => {
            return <MovieCard key={index} movie={item} />;
          })}
      </div>
    </div>
  );
};

export default Home;

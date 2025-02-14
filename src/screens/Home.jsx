import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../features/movieSlice";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const { movies, isLoading } = useSelector((state) => state.movieData);

  const dispatch = useDispatch();

  const timeoutRef = useRef(null);

  const handleSearch = (e) => {
    const text = e.target.value;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (text.length > 2) {
      // There should not be any api call for next 2 seconds
      timeoutRef.current = setTimeout(() => {
        dispatch(getMovies(text));
      }, 2000);
    }
  };

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="container">
      <h1>Welcome to React Movies DB</h1>
      <p>Discover and explore your favorite movies.</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          onChange={handleSearch}
        />
      </div>

      <div className="movie-list">
        {movies &&
          movies.results &&
          movies.results.map((item, index) => {
            return <MovieCard key={index} movie={item} />;
          })}
      </div>
    </main>
  );
};

export default Home;

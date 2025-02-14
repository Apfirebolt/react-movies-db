import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../features/movieSlice";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const { movies, isLoading } = useSelector((state) => state.movieData);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    // Handle search input change
    console.log(e.target.value);
  }

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
          movies.results && movies.results.map((item, index) => {
            return <MovieCard key={index} movie={item} />;
          })}
      </div>
    </main>
  );
};

export default Home;

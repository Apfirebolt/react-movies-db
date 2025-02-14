import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../features/movieSlice";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const { movies, isLoading } = useSelector((state) => state.movieData);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("dispatching");
    dispatch(getMovies());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Welcome to React Movies DB</h1>
      <p>Discover and explore your favorite movies,</p>

      <div className="">
        {movies.map((item, index) => {
          return <MovieCard key={index} project={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;

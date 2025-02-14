import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie } from "../features/movieSlice";
import Loader from "../components/Loader";

const Home = () => {
  const { movie, isLoading } = useSelector((state) => state.movieData);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    let movieId = params.id;
    dispatch(getMovie(movieId));
  }, [dispatch, params]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="container">
      <h1>{movie.Movie_Name}</h1>

      <div className="movie-details">
        <p>
          <strong>Year:</strong> {movie.Year}
        </p>
        <p>
          <strong>Timing:</strong> {movie.Timing}
        </p>
        <p>
          <strong>Rating:</strong> {movie.Rating}
        </p>
        <p>
          <strong>Votes:</strong> {movie.Votes}
        </p>
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Language:</strong> {movie.Language}
        </p>
      </div>
    </main>
  );
};

export default Home;

import { useMovieContext, MovieProvider } from "../context/movieContext";
import Loader from "../components/Loader";

const Movie = () => {
  const { movies, loading } = useMovieContext();

  if (loading) {
    return <Loader />;
  }
  return (
    <main className="container">
      <h1>Welcome to React Movies DB</h1>
      <p>
        Discover and explore your favorite movies. This component would be using
        context API for showing data
      </p>

      <div className="movie-list">
        {movies.map((item, index) => {
          return (
            <div key={index} className="movie-card">
              <h3>{item.Movie_Name}</h3>
            </div>
          );
        })}
      </div>
    </main>
  );
};

const MovieWithProvider = () => {
  return (
    <MovieProvider>
      <Movie />
    </MovieProvider>
  );
};

export default MovieWithProvider;

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { movie } = props;

  return (
    <div className="movie-card">
      <h2>{movie.Movie_Name}</h2>
      <p>Year of Release : {movie.Year}</p>
      <p>Run Time : {movie.Timing}</p>
      <p>Rating : {movie.Rating}</p>
      <p>Votes : {movie.Votes}</p>
      <p>Genre : {movie.Genre}</p>
      <p>Language : {movie.Language}</p>

      <Link to={`/movie/${movie.ID}`} className="view-details">View Details</Link>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    ID: PropTypes.number.isRequired,
    Movie_Name: PropTypes.string.isRequired,
    Year: PropTypes.number.isRequired,
    Timing: PropTypes.string.isRequired,
    Rating: PropTypes.number,
    Votes: PropTypes.string,
    Genre: PropTypes.string,
    Language: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
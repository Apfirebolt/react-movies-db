import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const { movie } = props;

  return (
    <div className="">
      <h2 className="">{movie.Movie_Name}</h2>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Movie_Name: PropTypes.string.isRequired,
    Year: PropTypes.number.isRequired,
    Timing: PropTypes.string.isRequired,
    Rating: PropTypes.number.isRequired,
    Votes: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Language: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
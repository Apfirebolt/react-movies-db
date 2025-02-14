import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../features/movieSlice";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const Home = () => {
  const { movies, isLoading } = useSelector((state) => state.movieData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const timeoutRef = useRef(null);

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearch(text);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (text.length > 2) {
      // There should not be any api call for next 2 seconds
      timeoutRef.current = setTimeout(() => {
        dispatch(getMovies({
          search: text,
          page: 1,
        }));
      }, 2000);
    }
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const prevSearchRef = useRef(search);

  useEffect(() => {
    if (prevSearchRef.current !== search) {
      prevSearchRef.current = search;
      return;
    }
    dispatch(getMovies({
      search: search ? search : "",
      page: currentPage,
    }));
  }, [dispatch, currentPage, search]);

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

      {movies && movies.count && (
        <Pagination totalItems={movies.count} currentPage={currentPage} onPageChange={onPageChange} itemsPerPage={itemsPerPage} />
      )}
    </main>
  );
};

export default Home;

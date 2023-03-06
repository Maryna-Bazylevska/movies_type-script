import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getMovies } from "../../services/moves-api";
import SearchForm from "../../components/SearchForm/SearchForm";
import { MoviesList, MoviesTitle, MoviesItem } from "./MoviesPage.styled";
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const currentQuery = new URLSearchParams(location.search).get("query");
  useEffect(() => {
    if (currentQuery === null) {
      return;
    }
    getMovies(currentQuery).then((data) => {
      if (data.results.length === 0) {
        return alert("Not found!");
      }
      setMovies(data.results);
    });
  }, [currentQuery, movieName]);
  function submitForm(query: string) {
    if (query === "") {
      return alert("Please, enter a text!");
    }

    setMovieName(query);

    navigate({ ...location, search: `query=${query}` });
  }
  console.log(movies);
  return (
    <>
      <SearchForm onSubmit={submitForm} />
      {movies && (
        <MoviesList>
          {movies.map(({ id, original_title, poster_path }) => {
            return (
              <li key={id}>
                <MoviesItem to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={original_title}
                  />
                  <MoviesTitle>{original_title}</MoviesTitle>
                </MoviesItem>
              </li>
            );
          })}
        </MoviesList>
      )}
    </>
  );
};
export default MoviesPage;

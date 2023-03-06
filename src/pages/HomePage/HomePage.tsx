import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "../../services/moves-api";
import { MoviesList, MoviesTitle, MoviesItem } from "./HomePage.styled";
const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies()
      .then((data) => {
        setTrendMovies(data.results);
      })
      .catch((error) => console.warn(error));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {trendMovies && (
        <MoviesList>
          {trendMovies.map(({ id, original_title, poster_path }) => (
            <li key={id}>
              <MoviesItem to={`movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={original_title}
                />
                <MoviesTitle>{original_title}</MoviesTitle>
              </MoviesItem>
            </li>
          ))}
        </MoviesList>
      )}
    </>
  );
};
export default HomePage;

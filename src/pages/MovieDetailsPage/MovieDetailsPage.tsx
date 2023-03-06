import { useEffect, useState, Suspense } from "react";
import {
  useParams,
  NavLink,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { IMovie } from "../../interfaces/interfaces";
import { getMovieDetails } from "../../services/moves-api";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState<IMovie>();
  const { movieId } = useParams();
  useEffect(() => {
    if (movieId) {
      getMovieDetails(movieId).then((data) => {
        setMovie(data);
      });
    }
  }, [movieId]);

  if (!movie) {
    return <div>NOT FOUND</div>;
  } else {
    return <MovieInfo movie={movie} />;
  }
};
export default MovieDetailsPage;

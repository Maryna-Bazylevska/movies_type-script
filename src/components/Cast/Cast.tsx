import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../services/moves-api";
import { CastList, CastItem, Photo, Name, Character } from "./Cast.styled";
function Cast() {
  let { movieId } = useParams();
  const [cast, setCast] = useState<any[]>([]);
  useEffect(() => {
    if (movieId) {
      getCast(movieId).then((data) => {
        setCast(data.cast);
      });
    }
  }, [movieId]);
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });
  return (
    <div>
      {cast && cast.length > 0 ? (
        <CastList>
          {cast.map((actor) => (
            <CastItem key={actor.id}>
              <Photo
                src={`${
                  actor.profile_path
                    ? "http://image.tmdb.org/t/p/original" + actor.profile_path
                    : "https://pomogaetsrazu.ru/images/offers/2829219234.jpg"
                }`}
                alt={actor.name}
              />
              <Name>{actor.original_name}</Name>
              <Character>Character: {actor.character}</Character>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <p>We don't have any actors for this movie</p>
      )}
    </div>
  );
}
export default Cast;

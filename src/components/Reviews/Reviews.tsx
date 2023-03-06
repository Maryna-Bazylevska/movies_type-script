import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/moves-api";
function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState<any[]>([]);
  useEffect(() => {
    if (movieId) {
      getReviews(movieId).then((data) => {
        setReviews(data.results);
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
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <b>Author: {review.author}</b>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
}
export default Reviews;

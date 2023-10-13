import styles from "./reviews.module.css";
import { getReviews } from "@/getFunctions/getFunc";

export default async function Reviews({ params }) {
  const details = await getReviews(params.id);
  return (
    <ul className={styles.list}>
      {details.results.map((review) => (
        <li key={review.id} className={styles.card}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

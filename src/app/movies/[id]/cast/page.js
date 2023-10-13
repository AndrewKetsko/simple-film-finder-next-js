import Image from "next/image";
import styles from "@/app/app.module.css";
import { getCast } from "@/getFunctions/getFunc";

export default async function Cast({ params }) {
  const details = await getCast(params.id);
  return (
    <ul className={styles.gallery}>
      {details.cast.map((actor) => (
        <li key={actor.id} className={styles.card}>
          <Image
            alt={actor.name}
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            width="160"
            height="240"
            className={styles.image}
          ></Image>
          <p className={styles.text}>{actor.name}</p>
          <p className={styles.text}>AS: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

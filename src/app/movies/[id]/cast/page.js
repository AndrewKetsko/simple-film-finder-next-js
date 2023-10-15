import Image from "next/image";
import styles from "@/app/app.module.css";
import { getCast } from "@/getFunctions/getFunc";
import Link from "next/link";

export default async function Cast({ params }) {
  const { cast } = await getCast(params.id);
  return (
    <ul className={styles.gallery}>
      {cast.map((actor) =>
        actor.profile_path ? (
          <li key={actor.id} className={styles.card}>
            <Link href={`/movies/${params.id}/cast/${actor.profile_path}`}>
              <Image
                alt={actor.name}
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                width="160"
                height="240"
                className={styles.image}
              ></Image>
            </Link>
            <p className={styles.text}>{actor.name}</p>
            <p className={styles.text}>AS: {actor.character}</p>
          </li>
        ) : null
      )}
    </ul>
  );
}

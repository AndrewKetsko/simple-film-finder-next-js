import Image from "next/image";
import Link from "next/link";
import styles from "./movie.module.css";
import { getMovieData } from "@/getFunctions/getFunc";

export default async function FilmInfo({ children, params }) {
  const details = await getMovieData(params.id);
  return (
    <>
      <div className={styles.container}>
        <Image
          alt={details.title}
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          width="240"
          height="360"
          className={styles.img}
        ></Image>
        <div>
          <h2 className={styles.title}>{details.title}</h2>
          <h3 className={styles.header}>
            User score: {details.vote_average * 10}%
          </h3>
          <h3 className={styles.header}>Overview</h3>
          <p>{details.overview}</p>
          <h3 className={styles.header}>Genres</h3>
          <ul className={styles.genreList}>
            {details.genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul className={styles.innerNavigation}>
        <li>
          <Link href={`/movies/${params.id}/cast`} className={styles.header}>
            Cast
          </Link>
        </li>
        <li>
          <Link href={`/movies/${params.id}/reviews`} className={styles.header}>
            Reviews
          </Link>
        </li>
      </ul>
      {children}
    </>
  );
}

import styles from '@/app/app.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function MovieGallery({data}) {
    return (
      <div className={styles.container}>
        <ul className={styles.gallery}>
          {data.results.map((movie) => (
            <li key={movie.id} className={styles.card}>
              <Link href={`/movies/${movie.id}`}>
                <Image
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  width="120"
                  height="180"
                  className={styles.image}
                ></Image>
                <p className={styles.text}>
                  {movie.title.length < 40
                    ? movie.title
                    : movie.title.slice(0, 37) + "..."}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
}
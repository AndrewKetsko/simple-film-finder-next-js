import Image from "next/image";
import Link from "next/link";

async function getData(movieID) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=cb1bcc244723619ea7f2217b5a84ccd8`
  );
  if (!res.ok) return {};
  return res.json();
}

export default async function FilmInfo({ children, params }) {
    const details = await getData(params.id)
  return (
    <div>
      <Image
        alt={details.title}
        src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        width="240"
        height="360"
      ></Image>
      <div>
        <h2>{details.title}</h2>
        <h3>User score: {details.vote_average * 10}%</h3>
        <h3>Overview</h3>
        <p>{details.overview}</p>
        <h3>Genres</h3>
        <ul>
          {details.genres?.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <Link href={`/movies/${params.id}/cast`}>Cast</Link>
      <Link href={`/movies/${params.id}/reviews`}>Reviews</Link>
      {children}
    </div>
  );
}

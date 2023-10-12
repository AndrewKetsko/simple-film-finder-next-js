import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=cb1bcc244723619ea7f2217b5a84ccd8"
  );
  if (!res.ok) return {};
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <div>
      <ul>
        {data.results.map((movie) => (
            <li key={movie.id}>
              <Link href={`/movies/${movie.id}`}>
                <Image
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  width="120"
                  height="180"
                ></Image>
                <p>{movie.title}</p>
              </Link>
            </li>
        ))}
      </ul>
    </div>
  );
}

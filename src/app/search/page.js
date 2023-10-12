import Image from "next/image";
import Link from "next/link";

async function getData(search) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=cb1bcc244723619ea7f2217b5a84ccd8&query=${search}`
  );
  if (!res.ok) return {};
  return res.json();
}

export default async function SearchPage({searchParams}) {
  const data = await getData(searchParams.search);

  return (
    <>
      {searchParams.search && (
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
      )}
    </>
  );
}

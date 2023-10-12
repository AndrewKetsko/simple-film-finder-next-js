import Image from "next/image";

async function getData(movieID) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=cb1bcc244723619ea7f2217b5a84ccd8`
  );
  if (!res.ok) return {};
  return res.json();
}

export default async function Cast({ params }) {
  const details = await getData(params.id);
  return (
    <ul>
      {details.cast.map((actor) => (
        <li key={actor.id}>
          <Image
            alt={actor.name}
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            width="160"
            height="240"
          ></Image>
          <p>{actor.name}</p>
          <p>AS: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

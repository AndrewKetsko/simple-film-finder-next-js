async function getData(movieID) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=cb1bcc244723619ea7f2217b5a84ccd8`
  );
  if (!res.ok) return {};
  return res.json();
}

export default async function Reviews({params}) {
  const details = await getData(params.id);
  return (
    <ul>
      {details.results.map((review) => (
        <li key={review.id}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

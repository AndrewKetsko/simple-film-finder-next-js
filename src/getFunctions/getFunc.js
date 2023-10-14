export async function getTrendingData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`
  );
  if (!res.ok) return {};
  return res.json();
}

export async function getSearchData(search) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${search}`
  );
  if (!res.ok) return {};
  return res.json();
}

export async function getMovieData(movieID) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}`
  );
  if (!res.ok) return {};
  return res.json();
}

export async function getCast(movieID) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${process.env.API_KEY}`
  );
  if (!res.ok) return {};
  return res.json();
}

export async function getReviews(movieID) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${process.env.API_KEY}`
  );
  if (!res.ok) return {};
  return res.json();
}

const API_KEY = "cb1bcc244723619ea7f2217b5a84ccd8";

export async function getTrendingData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  if (!res.ok) return {};
  return res.json();
}

export async function getSearchData(search) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
  );
  if (!res.ok) return {};
  return res.json();
}

export async function getMovieData(movieID) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`
  );
  if (!res.ok) return {};
  return res.json();
}

export async function getCast(movieID) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}`
  );
  if (!res.ok) return {};
  return res.json();
}

export async function getReviews(movieID) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${API_KEY}`
  );
  if (!res.ok) return {};
  return res.json();
}

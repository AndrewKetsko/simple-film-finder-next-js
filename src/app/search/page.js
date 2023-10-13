import MovieGallery from "@/components/MovieGallery";
import { getSearchData } from "@/getFunctions/getFunc";

export default async function SearchPage({ searchParams }) {
  const data = await getSearchData(searchParams.search);
  return <>{searchParams.search && <MovieGallery data={data} />}</>;
}

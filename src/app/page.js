import MovieGallery from "@/components/MovieGallery";
import { getTrendingData } from "@/getFunctions/getFunc";

export default async function Home() {
  const data = await getTrendingData();
  return <MovieGallery data={data} />;
}

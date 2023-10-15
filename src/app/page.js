import MovieGallery from "@/components/MovieGallery";
import { getTrendingData } from "@/getFunctions/getFunc";
import Link from "next/link";

export default async function Home() {
  const data = await getTrendingData();
  const id = Math.ceil(Math.random() * 100);
  return (
    <>
      <MovieGallery data={data} />
    </>
  );
}

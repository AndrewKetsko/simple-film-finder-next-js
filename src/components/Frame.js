import Image from "next/image";

export default function Frame({id}) {
  return (
    <section>
      <Image
        alt={id}
        src={`https://image.tmdb.org/t/p/w500/${id}`}
        width="320"
        height="480"
        className=''
      ></Image>
    </section>
  );
}

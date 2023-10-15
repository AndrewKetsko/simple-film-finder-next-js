import Frame from "@/components/Frame";

export default function PhotoPage({ params }) {
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Frame id={params.actor_id} />
      </div>
    </div>
  );
}

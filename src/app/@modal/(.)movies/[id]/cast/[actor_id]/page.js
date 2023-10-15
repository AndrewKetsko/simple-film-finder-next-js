import Frame from "@/components/Frame";
import Modal from "@/components/Modal";

export default async function PhotoModal({ params }) {
  return (
    <Modal>
      <Frame id={params.actor_id} />
    </Modal>
  );
}

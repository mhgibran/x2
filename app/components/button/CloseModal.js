import { HiMiniXMark } from "react-icons/hi2";

export default function CloseModal(props) {
  const { closeModal } = props;
  return (
    <div className="absolute left-4 top-3">
      <button
        type="button"
        className="bg-transparent text-black text-3xl"
        onClick={closeModal}
      >
        <HiMiniXMark />
      </button>
    </div>
  );
}

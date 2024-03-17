import Image from "next/image";

export default function GoogleButton(props) {
  const { text } = props;
  return (
    <button
      type="button"
      className="w-[300px] bg-black hover:bg-gray-900 flex items-center justify-center rounded-full shadow-md gap-2 text-sm text-white py-3"
    >
      <Image src="/google.png" width={16} height={16} alt={text} /> {text}
    </button>
  );
}

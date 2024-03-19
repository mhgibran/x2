import Image from "next/image";

export default function GoogleButton({ htmlAttributes, text }) {
  return (
    <button
      type="button"
      {...htmlAttributes}
      className={`flex items-center justify-center gap-2 rounded-full bg-black text-white shadow-md hover:bg-gray-900 ${htmlAttributes.className}`}
    >
      <Image src="/google.png" width={16} height={16} alt={text} /> {text}
    </button>
  );
}

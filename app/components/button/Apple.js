import Image from "next/image";

export default function AppleButton({ htmlAttributes, text }) {
  return (
    <button
      type="button"
      {...htmlAttributes}
      className={`bg-black hover:bg-gray-900 flex items-center justify-center rounded-full shadow-md gap-2 text-white ${htmlAttributes.className}`}
    >
      <Image src="/apple.png" width={16} height={16} alt={text} /> {text}
    </button>
  );
}

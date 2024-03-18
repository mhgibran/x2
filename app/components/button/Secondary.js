export default function SecondaryButton({ htmlAttributes, text }) {
  return (
    <button
      type="button"
      {...htmlAttributes}
      className={`border border-gray-500 hover:bg-gray-50 rounded-full shadow-md text-black text-center ${htmlAttributes.className}`}
    >
      {text}
    </button>
  );
}

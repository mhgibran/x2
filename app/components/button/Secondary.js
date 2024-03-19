export default function SecondaryButton({ htmlAttributes, text }) {
  return (
    <button
      type="button"
      {...htmlAttributes}
      className={`rounded-full border border-gray-500 text-center text-black shadow-md hover:bg-gray-50 ${htmlAttributes.className}`}
    >
      {text}
    </button>
  );
}

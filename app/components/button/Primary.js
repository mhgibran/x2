export default function PrimaryButton({ htmlAttributes, text }) {
  return (
    <button
      type="button"
      {...htmlAttributes}
      className={`bg-blue-400 hover:bg-blue-500 rounded-full shadow-md gap-2 text-white text-center disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:shadow-none ${htmlAttributes.className}`}
    >
      {text}
    </button>
  );
}

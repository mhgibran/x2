export default function PrimaryButton({ htmlAttributes, text }) {
  return (
    <button
      type="button"
      {...htmlAttributes}
      className={`gap-2 rounded-full bg-blue-400 text-center text-white shadow-md hover:bg-blue-500 disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none ${htmlAttributes.className}`}
    >
      {text}
    </button>
  );
}

export default function SecondaryButton(props) {
  const { text, handleClick } = props;
  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-[300px] border border-gray-500 hover:bg-gray-50 rounded-full shadow-md gap-2 text-sm text-black text-center py-3"
    >
      {text}
    </button>
  );
}

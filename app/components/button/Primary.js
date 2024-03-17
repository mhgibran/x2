export default function PrimaryButton(props) {
  const { text } = props;
  return (
    <button
      type="button"
      className="w-[300px] bg-blue-400 hover:bg-blue-500 rounded-full shadow-md gap-2 text-sm text-white text-center py-3"
    >
      {text}
    </button>
  );
}

export default function TextWithLine(props) {
  const { text } = props;
  return (
    <div className="flex w-[300px] items-center">
      <span className="flex-grow border-b border-gray-400"></span>
      <span className="mx-4 text-sm">{text}</span>
      <span className="flex-grow border-b border-gray-400"></span>
    </div>
  );
}

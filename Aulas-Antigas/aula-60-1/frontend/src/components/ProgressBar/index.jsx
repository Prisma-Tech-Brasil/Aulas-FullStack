import formatTime from "../../utils/formatTime";

export default function ProgressBar() {
  const progressPercentage = (110 / 220) * 100;

  return (
    <div className="flex items-center justify-between flex-col w-full mt-4 relative">
      <div className="h-2 bg-gray-500 w-full  rounded-3xl"></div>
      <div
        className="h-2 bg-green absolute left-0 rounded-3xl"
        style={{ width: `${progressPercentage}%` }}
      ></div>
      <div className="flex justify-between w-full mt-2 text-sm text-gray-300">
        <p>{formatTime(110)}</p>
        <p>{formatTime(220)}</p>
      </div>
    </div>
  );
}

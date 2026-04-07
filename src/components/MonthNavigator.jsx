import { addMonths, subMonths } from "date-fns";

export default function MonthNavigator({ date, setDate }) {
  return (
    <div className="flex justify-between items-center px-4 py-3">

      {/* LEFT */}
      <button
        onClick={() => setDate(subMonths(date, 1))}
        className="w-10 h-10 flex items-center justify-center rounded-full 
        bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white 
        transition-all text-xl font-bold shadow-md"
      >
        ←
      </button>

      {/* RIGHT */}
      <button
        onClick={() => setDate(addMonths(date, 1))}
        className="w-10 h-10 flex items-center justify-center rounded-full 
        bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white 
        transition-all text-xl font-bold shadow-md"
      >
        →
      </button>

    </div>
  );
}
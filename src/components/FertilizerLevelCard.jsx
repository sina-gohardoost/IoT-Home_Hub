import { Sprout } from "lucide-react";

function FertilizerLevelCard({ level = 40 }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <Sprout className="text-green-600" />
        <h2 className="text-lg font-semibold text-gray-800">منبع کود</h2>
      </div>

      <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
        <div
          className="bg-green-500 h-full rounded-full 
          transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-600 mt-2">{level}% : باقی مانده</p>
    </div>
  );
}

export default FertilizerLevelCard;

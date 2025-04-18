import { Droplet } from "lucide-react";

function WaterLevelCard({ level = 65 }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">منبع آب</h2>
        <Droplet className="text-blue-500" />
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-blue-500 h-full rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-600 mt-2">{level}% : باقی مانده </p>
    </div>
  );
}

export default WaterLevelCard;

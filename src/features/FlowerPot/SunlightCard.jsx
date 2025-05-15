import { Sun } from "lucide-react";
import "./FlowerCard.css";

function SunlightCard({ level = 90 }) {
  const sunlightStatus =
    level > 80 ? "High" : level > 40 ? "Medium" : "Low";

  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Sunlight</h2>
        <Sun className="text-yellow-400" />
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-yellow-400 h-full rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-600 mt-2">{sunlightStatus} ({level}%)</p>
    </div>
  );
}

export default SunlightCard;

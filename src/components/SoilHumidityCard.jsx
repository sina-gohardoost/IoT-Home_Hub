import { Droplets } from "lucide-react";

function SoilHumidityCard({ humidity = 75 }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <Droplets className="text-blue-400 w-6 h-6" />
        <h2 className="text-lg font-semibold text-gray-800">رطوبت خاک</h2>
      </div>

      <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
        <div
          className="bg-blue-400 h-full rounded-full transition-all duration-500"
          style={{ width: `${humidity}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-600 mt-2 text-right">{humidity}%</p>
    </div>
  );
}

export default SoilHumidityCard;

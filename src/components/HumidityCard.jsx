import { Droplets } from "lucide-react";

function HumidityCard({ humidity = 75 }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Humidity</h2>
        <Droplets className="flex items-center gap-1 text-blue-400" />
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-blue-400 h-full rounded-full transition-all duration-500"
          style={{ width: `${humidity}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-600 mt-2">{humidity}%</p>
    </div>
  );
}

export default HumidityCard;

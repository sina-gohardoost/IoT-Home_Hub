import { Thermometer } from "lucide-react";

function TemperatureCard({ temperature = 26 }) {
  const percent = Math.min((temperature / 50) * 100, 100); // assuming max temp = 50°C

  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">دمای محیط</h2>
        <Thermometer className="text-red-500" />
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percent}%`,
            background: "linear-gradient(to right, #facc15, #f97316, #ef4444)", // yellow to orange to red
          }}
        ></div>
      </div>

      <p className="text-sm text-gray-600 mt-2">{temperature}°C</p>
    </div>
  );
}

export default TemperatureCard;

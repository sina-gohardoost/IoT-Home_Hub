import sunflowerGif from "../assets/twin_sunflower.gif";
import { Droplets } from "lucide-react";

function FlowerCard({ humidity = 75 }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center justify-between h-full">
      <img
        src={sunflowerGif}
        alt="Twin Sunflower"
        className="w-36 h-36 mb-4"
      />

      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-blue-400 h-full rounded-full transition-all duration-500"
          style={{ width: `${humidity}%` }}
        ></div>
      </div>

      <div className="flex items-center justify-between w-full mt-2">
        <span className="text-sm text-gray-600">Humidity</span>
        <div className="flex items-center gap-1 text-blue-400">
          <Droplets size={16} />
          <span className="text-sm">{humidity}%</span>
        </div>
      </div>
    </div>
  );
}

export default FlowerCard;

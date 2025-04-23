import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { LightbulbIcon } from "lucide-react";
import sunflowerGif from "../assets/twin_sunflower.gif";

function FlowerCard() {
  const [isUVOn, setIsUVOn] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center h-full bg-gradient-to-r from-lime-300 to-lime-500 rounded-2xl shadow-lg p-4 w-full max-w-sm overflow-hidden">

      {/* Glowing UV Light */}
      <div
        className={`absolute top-0 w-48 h-28 rounded-full blur-xl transition-all duration-500 pointer-events-none ${
          isUVOn ? "bg-purple-500/50" : "bg-transparent"
        }`}
      />

      {/* Toggle switch */}
      <div className="flex items-center gap-2 mb-2">
        <LightbulbIcon className="h-5 w-5 text-purple-500 scale-150" />
        <Switch 
          checked={isUVOn} 
          onCheckedChange={(checked) => {
            setIsUVOn(checked);
          }}
          className="data-[state=checked]:bg-purple-500 data-[state=unchecked]:bg-gray-200 border-2 border-black rounded-full"
        />
      </div>

      {/* Flower Image */}
      <div className="flex justify-center items-center flex-grow">
        <img
          src={sunflowerGif}
          alt="flower"
          className={`w-32 h-32 transition-transform duration-300 `}
        />
      </div>
    </div>
  );
}

export default FlowerCard;
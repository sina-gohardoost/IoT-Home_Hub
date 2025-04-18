import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { LightbulbIcon } from "lucide-react";
import sunflowerGif from "../assets/twin_sunflower.gif";

export default function FlowerCard() {
  const [isUVOn, setIsUVOn] = useState(false);

  return (
    <div className="relative flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg w-80 overflow-hidden">
      {/* Glowing UV Light */}
      <div
        className={`absolute top-0 w-36 h-12 rounded-full blur-xl transition-all duration-500 pointer-events-none ${
          isUVOn ? "bg-purple-500/50" : "bg-transparent"
        }`}
      />

      {/* Toggle switch */}
      <div className="flex items-center gap-2 mb-2">
        <LightbulbIcon className="h-5 w-5 text-purple-500" />
        <Switch 
          checked={isUVOn} 
          onCheckedChange={(checked) => {
            setIsUVOn(checked);
          }}
          className="data-[state=checked]:bg-purple-500 data-[state=unchecked]:bg-gray-200"
        />
      </div>

      {/* Flower Image */}
      <div className="flex justify-center items-center flex-grow">
        <img
          src={sunflowerGif}
          alt="flower"
          className={`w-32 h-32 transition-transform duration-300 `}
          // ${
          //   isUVOn ? "animate-wiggle" : ""
          // }`}
        />
      </div>
    </div>
  );
}
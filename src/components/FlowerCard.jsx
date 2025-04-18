import { useState } from "react";
import { LightbulbIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import sunflowerGif from "../assets/twin_sunflower.gif";

const MainFlowerCard = () => {
  const [isUVOn, setIsUVOn] = useState(false);

  return (
    <div className="relative bg-white p-6 rounded-2xl shadow-xl w-full max-w-md flex flex-col items-center gap-4">
      {/* 🌞 UV TOGGLE SECTION */}
      <div className="flex items-center gap-2 absolute top-4 right-4">
        <LightbulbIcon className="w-5 h-5 text-purple-500" />
        <span className="text-sm font-medium text-gray-600">UV</span>
        <Switch
          checked={isUVOn}
          onCheckedChange={() => setIsUVOn(!isUVOn)}
        />
      </div>

      {/* 🌸 Flower Image */}
      <div className="flex justify-center items-center flex-grow">
        <img
          src={sunflowerGif}
          alt="flower"
          className={`w-32 h-32 ${isUVOn ? "animate-wiggle" : ""}`}
        />
      </div>

      {/* You can add UV light gradient glow here later */}
    </div>
  );
};

export default MainFlowerCard;


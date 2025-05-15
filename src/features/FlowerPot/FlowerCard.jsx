import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { LightbulbIcon, Sun } from "lucide-react";
import sunflowerGif from "../../assets/twin_sunflower.gif";
import { motion } from "framer-motion";

function FlowerCard() {
  const [isUVOn, setIsUVOn] = useState(false);
  const [growthStage, setGrowthStage] = useState(0);
  
  // Simulate growth over time when UV light is on
  useEffect(() => {
    let interval;
    if (isUVOn && growthStage < 100) {
      interval = setInterval(() => {
        setGrowthStage(prev => Math.min(prev + 1, 100));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isUVOn, growthStage]);

  return (
    <motion.div 
      className="relative flex flex-col items-center justify-between h-full rounded-3xl shadow-lg p-6 w-full overflow-hidden border-2 border-green-400/20"
      style={{
        background: "linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(5, 150, 105, 0.1) 100%)",
        backdropFilter: "blur(12px)",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Glass panel effect */}
      <div className="absolute inset-0 -z-10 bg-black/20 backdrop-blur-md rounded-3xl" />
      
      {/* Animated glow effect */}
      <motion.div
        className={`absolute top-0 w-full h-40 rounded-full blur-2xl transition-all duration-1000 pointer-events-none`}
        animate={{
          opacity: isUVOn ? 0.6 : 0,
          backgroundColor: isUVOn ? "#8b5cf6" : "transparent",
        }}
      />

      {/* Header section */}
      <div className="w-full flex justify-between items-center mb-6">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Sun className="h-6 w-6 text-yellow-400" />
          <h3 className="text-xl font-bold text-white">Sunflower</h3>
        </motion.div>
        
        {/* Toggle switch with label */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-200">UV Light</span>
          <Switch 
            checked={isUVOn} 
            onCheckedChange={setIsUVOn}
            className="data-[state=checked]:bg-purple-500 data-[state=unchecked]:bg-gray-600 border-2 border-gray-700"
          />
        </div>
      </div>

      {/* Flower Image with animations */}
      <div className="flex justify-center items-center flex-grow relative w-full">
        <motion.div
          animate={{
            scale: isUVOn ? [1, 1.05, 1] : 1,
            transition: {
              repeat: isUVOn ? Infinity : 0,
              duration: 2
            }
          }}
          className="relative"
        >
          <img
            src={sunflowerGif}
            alt="flower"
            className="w-40 h-40 object-contain"
          />
          
          {/* Animated particles when UV is on */}
          {isUVOn && (
            <>
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-purple-400"
                  initial={{ 
                    opacity: 0.7,
                    x: 0, 
                    y: 0
                  }}
                  animate={{ 
                    opacity: 0,
                    x: Math.random() * 100 - 50, 
                    y: -Math.random() * 50 - 20
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 1 + Math.random() * 2,
                    delay: Math.random() * 2
                  }}
                  style={{
                    top: '50%',
                    left: '50%'
                  }}
                />
              ))}
            </>
          )}
        </motion.div>
      </div>
      
      {/* Growth progress bar */}
      <div className="w-full mt-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-200">Growth Progress</span>
          <span className="text-sm font-medium text-gray-200">{growthStage}%</span>
        </div>
        <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
            initial={{ width: "0%" }}
            animate={{ width: `${growthStage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default FlowerCard;
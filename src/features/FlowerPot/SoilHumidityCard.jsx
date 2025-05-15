import { Droplets } from "lucide-react";
import { motion } from "framer-motion";

function SoilHumidityCard({ humidity = 75 }) {
  // Soil moisture status based on humidity level
  const getStatus = () => {
    if (humidity < 40) return { text: "Dry", color: "text-orange-300", bg: "bg-orange-900/50" };
    if (humidity > 85) return { text: "Saturated", color: "text-blue-300", bg: "bg-blue-900/50" };
    return { text: "Optimal", color: "text-green-300", bg: "bg-green-900/50" };
  };
  
  const status = getStatus();
  
  return (
    <motion.div 
      className="rounded-3xl shadow-lg p-5 w-full border-2 border-teal-400/20 h-full"
      style={{
        background: "linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, rgba(13, 148, 136, 0.1) 100%)",
        backdropFilter: "blur(12px)",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Glass panel effect */}
      <div className="absolute inset-0 -z-10 bg-black/20 backdrop-blur-md rounded-3xl" />

      <div className="flex items-center justify-between mb-6">
        <Droplets className="text-teal-400 w-6 h-6" />
        <h2 className="text-lg font-bold text-white">Soil Moisture</h2>
      </div>

      {/* Circular progress indicator */}
      <div className="flex justify-center mb-6">
        <div className="relative w-28 h-28">
          {/* Background circle */}
          <div className="absolute inset-0 rounded-full bg-gray-700"></div>
          
          {/* Gradient progress circle */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#soil-gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={283} // 2 * PI * 45 (circumference)
              initial={{ strokeDashoffset: 283 }}
              animate={{ 
                strokeDashoffset: 283 - (humidity / 100) * 283 
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              transform="rotate(-90 50 50)"
            />
            <defs>
              <linearGradient id="soil-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span 
              className="text-2xl font-bold text-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {humidity}<span className="text-sm">%</span>
            </motion.span>
          </div>
        </div>
      </div>
      
      {/* Status indicator */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-300">Status:</span>
        <motion.span 
          className={`px-2 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}
          animate={{
            scale: humidity < 40 ? [1, 1.05, 1] : 1,
          }}
          transition={{
            repeat: humidity < 40 ? Infinity : 0,
            duration: 1
          }}
        >
          {status.text}
        </motion.span>
      </div>
    </motion.div>
  );
}

export default SoilHumidityCard;

import { Thermometer } from "lucide-react";
import { motion } from "framer-motion";
 
function TemperatureCard({ temperature = 26 }) {
  const percent = Math.min((temperature / 50) * 100, 100); // assuming max temp = 50°C
  
  // Determine temperature status and color
  const getStatus = () => {
    if (temperature < 15) return { text: "Too Cold", color: "text-blue-300", bg: "bg-blue-900/50" };
    if (temperature > 35) return { text: "Too Hot", color: "text-red-300", bg: "bg-red-900/50" };
    return { text: "Optimal", color: "text-green-300", bg: "bg-green-900/50" };
  };
  
  const status = getStatus();

  return (
    <motion.div 
      className="rounded-3xl shadow-lg p-5 w-full border-2 border-red-400/20 h-full"
      style={{
        background: "linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(220, 38, 38, 0.1) 100%)",
        backdropFilter: "blur(12px)",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Glass panel effect */}
      <div className="absolute inset-0 -z-10 bg-black/20 backdrop-blur-md rounded-3xl" />

      <div className="flex items-center justify-between mb-4">
        <Thermometer className="text-red-400 h-6 w-6" />
        <h2 className="text-lg font-bold text-white">Temperature</h2>
      </div>

      {/* Temperature display */}
      <div className="flex justify-center mb-4">
        <motion.div 
          className="text-4xl font-bold text-white flex items-baseline"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          {temperature}
          <span className="text-xl ml-1">°C</span>
        </motion.div>
      </div>

      {/* Temperature animation */}
      <div className="relative w-full bg-gray-700 rounded-full h-4 overflow-hidden mb-3">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(to right, #3b82f6, #facc15, #ef4444)",
          }}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      {/* Status indicator */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-300">Status:</span>
        <motion.span 
          className={`px-2 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}
          animate={{
            scale: temperature > 35 || temperature < 15 ? [1, 1.05, 1] : 1,
          }}
          transition={{
            repeat: temperature > 35 || temperature < 15 ? Infinity : 0,
            duration: 1
          }}
        >
          {status.text}
        </motion.span>
      </div>
      
      {/* Heat waves */}
      {temperature > 30 && (
        <div className="absolute top-5 right-16 opacity-50">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-1 bg-red-400 rounded-full"
              initial={{ y: 0, opacity: 0.8 }}
              animate={{ 
                y: -15 - (i * 5), 
                opacity: 0,
                scaleX: 0.7
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1 + (i * 0.2), 
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default TemperatureCard;

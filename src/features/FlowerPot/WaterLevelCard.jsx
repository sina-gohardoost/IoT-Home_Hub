import { Droplet } from "lucide-react";
import { motion } from "framer-motion";

function WaterLevelCard({ level = 65 }) {
  return (
    <motion.div 
      className="rounded-3xl shadow-lg p-5 w-full border-2 border-blue-400/20 h-full"
      style={{
        background: "linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(56, 189, 248, 0.1) 100%)",
        backdropFilter: "blur(12px)",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Glass panel effect */}
      <div className="absolute inset-0 -z-10 bg-black/20 backdrop-blur-md rounded-3xl" />

      <div className="flex items-center justify-between mb-4">
        <Droplet className="text-blue-400 h-6 w-6" />
        <h2 className="text-lg font-bold text-white">Water Level</h2>
      </div>

      {/* Water animation */}
      <div className="relative w-full bg-gray-700 rounded-full h-5 overflow-hidden mb-2">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-300 to-blue-500 flex items-center justify-end pr-2"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {level > 15 && (
            <span className="text-xs font-bold text-blue-900">{level}%</span>
          )}
        </motion.div>
        
        {level <= 15 && (
          <span className="absolute right-2 top-0 text-xs font-bold text-white">{level}%</span>
        )}
      </div>

      {/* Status indicator */}
      <div className="mt-3 flex justify-between items-center">
        <span className="text-sm text-gray-300">Status:</span>
        <motion.span 
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            level > 50 ? "bg-green-900/50 text-green-300" : 
            level > 20 ? "bg-yellow-900/50 text-yellow-300" : 
            "bg-red-900/50 text-red-300"
          }`}
          animate={{
            scale: level <= 20 ? [1, 1.05, 1] : 1,
          }}
          transition={{
            repeat: level <= 20 ? Infinity : 0,
            duration: 1
          }}
        >
          {level > 50 ? "Optimal" : level > 20 ? "Warning" : "Refill needed"}
        </motion.span>
      </div>

      {/* Animated water drops */}
      {level > 30 && (
        <div className="relative h-6 mt-2">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400"
              initial={{ top: -5, left: `${20 + i * 20}%`, opacity: 0.7 }}
              animate={{ 
                top: 20, 
                opacity: 0 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1 + (i * 0.2), 
                delay: i * 0.3,
                ease: "easeIn"
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default WaterLevelCard;

import { Sprout } from "lucide-react";
import { motion } from "framer-motion";

function FertilizerLevelCard({ level = 40 }) {
  return (
    <motion.div 
      className="rounded-3xl shadow-lg p-5 w-full border-2 border-green-400/20 h-full"
      style={{
        background: "linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(21, 128, 61, 0.1) 100%)",
        backdropFilter: "blur(12px)",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Glass panel effect */}
      <div className="absolute inset-0 -z-10 bg-black/20 backdrop-blur-md rounded-3xl" />

      <div className="flex items-center justify-between mb-4">
        <Sprout className="text-green-400 h-6 w-6" />
        <h2 className="text-lg font-bold text-white">Fertilizer</h2>
      </div>

      {/* Fertilizer level visualization */}
      <div className="relative h-36 w-full mb-4 overflow-hidden rounded-lg bg-gray-800">
        {/* Fertilizer level animation */}
        <motion.div 
          className="absolute bottom-0 w-full bg-gradient-to-t from-green-700 to-green-500"
          initial={{ height: 0 }}
          animate={{ height: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Particles floating up */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-green-300"
              initial={{ 
                bottom: Math.random() * 20,
                left: `${Math.random() * 90 + 5}%`, 
                opacity: 0.6 
              }}
              animate={{ 
                bottom: "100%", 
                opacity: 0,
                x: Math.random() * 20 - 10
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3 + Math.random() * 5, 
                delay: Math.random() * 3,
                ease: "easeOut" 
              }}
            />
          ))}
        </motion.div>
        
        {/* Level indicator */}
        <div className="absolute top-2 right-2 bg-gray-900/50 px-2 py-1 rounded-full">
          <span className="text-sm text-white font-medium">{level}%</span>
        </div>
      </div>
      
      {/* Status indicator */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-300">Status:</span>
        <motion.span 
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            level > 30 ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"
          }`}
          animate={{
            scale: level < 20 ? [1, 1.05, 1] : 1,
          }}
          transition={{
            repeat: level < 20 ? Infinity : 0,
            duration: 1
          }}
        >
          {level > 30 ? "Sufficient" : "Refill Needed"}
        </motion.span>
      </div>
    </motion.div>
  );
}

export default FertilizerLevelCard;

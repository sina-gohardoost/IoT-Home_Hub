import React from 'react';
import FlowerCard from '../features/FlowerPot/FlowerCard';
import WaterLevelCard from '../features/FlowerPot/WaterLevelCard';
import FertilizerLevelCard from '../features/FlowerPot/FertilizerLevelCard';
import TemperatureCard from '../features/FlowerPot/TemperatureCard';
import SoilHumidityCard from '../features/FlowerPot/SoilHumidityCard';
import PageTransition from '../components/PageTransition';
import { LeafIcon, FlowerIcon } from 'lucide-react';
import { motion } from 'framer-motion';

function FlowerPage() {
  // Animation variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 p-4 md:p-6">
        {/* Header with title and icon */}
        <div className="max-w-7xl mx-auto mb-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between border-b border-gray-700 pb-4"
          >
            <div className="flex items-center space-x-3">
              <FlowerIcon className="h-8 w-8 text-pink-500" />
              <h1 className="text-2xl font-bold text-white">Smart Garden Monitor</h1>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
              <LeafIcon size={16} className="text-green-400" />
              <span className="text-sm font-medium text-green-400">Plant Health: Good</span>
            </div>
          </motion.div>
        </div>

        {/* Main grid container */}
        <div className="mx-auto max-w-7xl">
          {/* Mobile layout (stacked) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid auto-rows-fr gap-4 md:hidden"
          >
            <motion.div variants={itemVariants}>
              <FlowerCard className="row-span-2" /> 
            </motion.div>
            <motion.div variants={itemVariants}>
              <TemperatureCard />
            </motion.div>
            <motion.div variants={itemVariants}>
              <SoilHumidityCard />
            </motion.div>
            <motion.div variants={itemVariants}>
              <WaterLevelCard />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FertilizerLevelCard />
            </motion.div>
          </motion.div>

          {/* Desktop/tablet layout (grid) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible" 
            className="hidden md:grid md:grid-cols-3 md:grid-rows-2 md:gap-6"
          >
            {/* First row */}
            <motion.div variants={itemVariants}>
              <TemperatureCard/>
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-start-1 md:row-start-2">
              <SoilHumidityCard/>
            </motion.div>
            
            {/* FlowerCard */}
            <motion.div variants={itemVariants} className="md:row-span-2 md:col-start-2 md:row-start-1 md:h-full">
              <FlowerCard/>
            </motion.div>
            
            {/* Second row */}
            <motion.div variants={itemVariants} className="md:col-start-3 md:row-start-1">
              <WaterLevelCard/>
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-start-3">
              <FertilizerLevelCard/>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

export default FlowerPage;
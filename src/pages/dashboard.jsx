import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  DropletIcon, 
  ThermometerIcon, 
  LightbulbIcon,
  BarChart3Icon,
  PlusIcon,
  MinusIcon,
  BatteryFullIcon,
  HomeIcon,
  ShieldCheckIcon,
  FanIcon,
  Tv2Icon,
  WifiIcon,
  PowerIcon
} from "lucide-react";
import PageTransition from "../components/PageTransition";

// Component for animated metric cards
const MetricCard = ({ icon, title, value, unit, color, increase }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <motion.div 
      variants={cardVariants}
      className={`bg-white rounded-xl shadow-md p-4 flex flex-col border-t-4 ${color} border-b-2 border-r-2 border-l-2 border-b-gray-200 border-r-gray-200 border-l-gray-200`}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-500 text-sm font-medium">{title}</span>
        {icon}
      </div>
      <div className="flex items-baseline">
        <span className="text-gray-800 text-2xl font-bold mr-2">{value}</span>
        <span className="text-gray-500">{unit}</span>
      </div>
      {increase !== undefined && (
        <div className="flex items-center gap-1 mt-2">
          {increase > 0 ? (
            <>
              <PlusIcon className="w-4 h-4 text-green-500" />
              <span className="text-xs text-green-500 font-medium">{Math.abs(increase)}% from yesterday</span>
            </>
          ) : (
            <>
              <MinusIcon className="w-4 h-4 text-red-500" />
              <span className="text-xs text-red-500 font-medium">{Math.abs(increase)}% from yesterday</span>
            </>
          )}
        </div>
      )}
    </motion.div>
  );
};

// Chart component
const Chart = ({ data, title, color = "bg-blue-500" }) => {
  const maxValue = Math.max(...data);
  
  return (
    <div className="bg-white rounded-xl shadow-md p-4 col-span-2 border-2 border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium text-gray-800">{title}</span>
        <BarChart3Icon className="text-gray-400 w-5 h-5" />
      </div>
      <div className="flex items-end justify-between h-40 gap-1 mt-2">
        {data.map((value, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <motion.div 
              className={`w-full ${color} rounded-t`}
              initial={{ height: 0 }}
              animate={{ height: `${(value / maxValue) * 100}%` }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
            <span className="text-xs text-gray-500 mt-1">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// System status component
const SystemStatus = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border-2 border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium text-gray-800">System Status</span>
        <WifiIcon className="text-green-500 w-5 h-5" />
      </div>
      <div className="space-y-3">
        {[
          { name: "WiFi Network", status: "Connected", color: "bg-green-100 text-green-800" },
          { name: "Security System", status: "Armed", color: "bg-green-100 text-green-800" },
          { name: "Smart Devices", status: "9 Online", color: "bg-green-100 text-green-800" },
          { name: "Energy Usage", status: "Optimized", color: "bg-green-100 text-green-800" }
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex justify-between items-center"
          >
            <span className="text-sm text-gray-700">{item.name}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${item.color}`}>
              {item.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Room card component
const RoomCard = ({ name, temperature, humidity, devices, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border-2 border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <span className="font-medium text-gray-800">{name}</span>
        {icon}
      </div>
      <div className="space-y-2 mt-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Temperature</span>
          <span className="font-medium">{temperature}°C</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Humidity</span>
          <span className="font-medium">{humidity}%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Devices</span>
          <span className="font-medium">{devices} active</span>
        </div>
      </div>
    </div>
  );
};

function Dashboard() {
  // Demo data for charts
  const energyUsageData = [4.2, 3.8, 4.5, 3.9, 4.1, 3.7, 3.2];
  const temperatureData = [21, 22, 23, 21, 20, 22, 21];
  
  // Metrics data with animations
  const [metrics, setMetrics] = useState([
    { 
      icon: <ThermometerIcon className="text-red-500 w-6 h-6" />, 
      title: "Temperature", 
      value: 22, 
      unit: "°C", 
      color: "border-red-500", 
      increase: -2
    },
    { 
      icon: <PowerIcon className="text-purple-500 w-6 h-6" />, 
      title: "Energy Usage", 
      value: 3.8, 
      unit: "kWh", 
      color: "border-purple-500", 
      increase: -5
    },
    { 
      icon: <ShieldCheckIcon className="text-green-500 w-6 h-6" />, 
      title: "Security", 
      value: "Armed", 
      unit: "", 
      color: "border-green-500"
    },
    { 
      icon: <LightbulbIcon className="text-amber-500 w-6 h-6" />, 
      title: "Lights", 
      value: 4, 
      unit: "on", 
      color: "border-amber-500", 
      increase: 0
    }
  ]);

  // Room data
  const rooms = [
    {
      name: "Living Room",
      temperature: 22,
      humidity: 45,
      devices: 3,
      icon: <Tv2Icon className="text-blue-500 w-5 h-5" />
    },
    {
      name: "Bedroom",
      temperature: 21,
      humidity: 40,
      devices: 2,
      icon: <LightbulbIcon className="text-amber-500 w-5 h-5" />
    },
    {
      name: "Kitchen",
      temperature: 23,
      humidity: 48,
      devices: 4,
      icon: <FanIcon className="text-green-500 w-5 h-5" />
    }
  ];

  // Animation for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-gray-800 flex items-center"
              >
                <HomeIcon className="mr-2 text-blue-600" size={28} />
                Smart Home Hub
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 mt-1"
              >
                Monitor and control your entire smart home system
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-4 md:mt-0">
                All systems operational
              </div>
            </motion.div>
          </div>

          {/* Metrics cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </motion.div>

          {/* Charts and status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Chart data={energyUsageData} title="Weekly Energy Usage (kWh)" color="bg-purple-500" />
            <SystemStatus />
          </div>
          
          {/* Rooms */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {rooms.map((room, index) => (
                <RoomCard key={index} {...room} />
              ))}
            </div>
          </div>
          
          {/* Temperature Chart */}
          <div className="grid grid-cols-1 gap-4">
            <Chart data={temperatureData} title="Weekly Temperature (°C)" color="bg-red-500" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Dashboard;

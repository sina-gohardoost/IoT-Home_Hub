import WaterLevelCard from "./components/WaterLevelCard";
import FertilizerLevelCard from "./components/FertilizerLevelCard";
import TemperatureCard from "./components/TemperatureCard";
import FlowerCard from "./components/FlowerCard";
import SoilHumidityCard from "./components/SoilHumidityCard";

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50 px-4 py-8 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <WaterLevelCard level={65} />
          <FertilizerLevelCard level={40} />
        </div>

        {/* Center Column */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-xs">
            <FlowerCard humidity={75} />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <SoilHumidityCard humidity={75} />
          <TemperatureCard temperature={26} />
        </div>
      </div>
    </div>
  );
}

export default App;
import WaterLevelCard from "./components/WaterLevelCard";
import FertilizerLevelCard from "./components/FertilizerLevelCard";
import TemperatureCard from "./components/TemperatureCard";
import FlowerCard from "./components/FlowerCard";
import SoilHumidityCard from "./components/SoilHumidityCard";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-500 to-emerald-900 p-4 md:p-6 flex items-center justify-center">
      {/* Main grid container - now properly centered */}
      <div className="mx-auto grid w-full max-w-7xl gap-4 md:gap-6">
        {/* Mobile layout (stacked) */}
        <div className="grid auto-rows-fr gap-4 md:hidden">
          <FlowerCard className="row-span-2" /> {/* Larger on mobile */}
          <TemperatureCard />
          <SoilHumidityCard />
          <WaterLevelCard />
          <FertilizerLevelCard />
        </div>

        {/* Desktop/tablet layout (grid) */}
        <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 md:gap-5">
          {/* First row */}
          <div>
            <TemperatureCard/>
          </div>
          <div className="md:col-start-1  md:row-start-2">
            <SoilHumidityCard/>
          </div>
          
          {/* FlowerCard */}
          <div className="md:row-span-2 md:col-start-2 md:row-start-1 md:h-full">
            <FlowerCard/>
          </div>
          
          {/* Second row */}
          <div className="md:col-start-3  md:row-start-1">
            <WaterLevelCard/>
          </div>
          <div className="md:col-start-3">
            <FertilizerLevelCard/>
          </div>
        
        </div>
      </div>
    </div>
  );
}
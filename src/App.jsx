import WaterLevelCard from "./components/WaterLevelCard";
import FertilizerLevelCard from "./components/FertilizerLevelCard";
import TemperatureCard from "./components/TemperatureCard";
import FlowerCard from "./components/FlowerCard";
import HumidityCard from "./components/HumidityCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Smart Flower Pot 🌿</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <WaterLevelCard level={65} />
          <FertilizerLevelCard level={40} />
          <HumidityCard humidity={75} />
          <TemperatureCard temperature={26} />
        </div>

        <FlowerCard humidity={75} />
      </div>
    </div>
  );
}


export default App;
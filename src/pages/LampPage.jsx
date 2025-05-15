import React, { useState } from 'react';
import { Slider } from '../components/ui/slider';
import PresetButton from '../components/PresetButton';
import StatusCard from '../features/Lamp/StatusCard';
import PageTransition from '../components/PageTransition';

function LampPage() {
  const [lampState, setLampState] = useState({
    isOn: true,
    brightness: 60,
    colorTemperature: 40,
    activePreset: null
  });

  const handleToggle = () => {
    setLampState(prev => ({
      ...prev,
      isOn: !prev.isOn,
      activePreset: null
    }));
  };

  const handleBrightnessChange = (value) => {
    setLampState(prev => ({
      ...prev,
      brightness: value[0],
      activePreset: null
    }));
  };

  const handleColorTempChange = (value) => {
    setLampState(prev => ({
      ...prev,
      colorTemperature: value[0],
      activePreset: null
    }));
  };

  const activatePreset = (preset) => {
    if (preset === 'reading') {
      setLampState({
        isOn: true,
        brightness: 80,
        colorTemperature: 70,
        activePreset: 'reading'
      });
    } else if (preset === 'relax') {
      setLampState({
        isOn: true,
        brightness: 40,
        colorTemperature: 20,
        activePreset: 'relax'
      });
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-dark-bg p-4">
        <div className="w-80 h-[500px] bg-slate-700 rounded-xl p-6 shadow-lg flex flex-col">
          <h1 className="text-2xl font-semibold mb-6 text-center">Smart Lamp Controller</h1>
          
          <StatusCard 
            isOn={lampState.isOn} 
            onToggle={handleToggle} 
          />
          
          <p className="text-base text-muted-foreground mt-6 mb-3">Brightness</p>
          <Slider 
            disabled={!lampState.isOn}
            value={[lampState.brightness]} 
            onValueChange={handleBrightnessChange}
            min={0}
            max={100}
            step={1}
            color="lamp-green"
            className="mb-2"
          />
          
          <p className="text-base text-muted-foreground mt-6 mb-3">Color Temperature</p>
          <Slider 
            disabled={!lampState.isOn}
            value={[lampState.colorTemperature]} 
            onValueChange={handleColorTempChange}
            min={0}
            max={100}
            step={1}
            color="lamp-orange"
            className="mb-2"
          />
          
          <div className="flex justify-between mt-6">
            <PresetButton 
              label="Reading" 
              onClick={() => activatePreset('reading')}
              disabled={!lampState.isOn}
              isActive={lampState.activePreset === 'reading'}
              isLampOn={lampState.isOn}
            />
            <PresetButton 
              label="Relax" 
              onClick={() => activatePreset('relax')}
              disabled={!lampState.isOn}
              isActive={lampState.activePreset === 'relax'}
              isLampOn={lampState.isOn}
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default LampPage;
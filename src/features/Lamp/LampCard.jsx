import React, { useEffect } from 'react';
import StatusCard from './StatusCard';
import { Slider } from '../../components/ui/slider';
import PresetButton from '../../components/PresetButton';
import useLampStore from '@/store/lampStore';

function LampCard() {
  const {
    isOn,
    brightness,
    colorTemperature,
    loading,
    error,
    fetchLampStatus,
    toggleLamp,
    setBrightness,
    setColorTemperature,
    setLampSettings
  } = useLampStore();

  useEffect(() => {
    fetchLampStatus();
  }, []);

  const handleBrightnessChange = (value) => {
    const newBrightness = value[0];
    setBrightness(newBrightness);
    setLampSettings({ isOn, brightness: newBrightness, colorTemperature });
  };

  const handleColorTempChange = (value) => {
    const newTemp = value[0];
    setColorTemperature(newTemp);
    setLampSettings({ isOn, brightness, colorTemperature: newTemp });
  };

  const activatePreset = (preset) => {
    if (preset === 'reading') {
      setLampSettings({ isOn: true, brightness: 80, colorTemperature: 70 });
    } else if (preset === 'relax') {
      setLampSettings({ isOn: true, brightness: 40, colorTemperature: 20 });
    }
  };

  return (
    <div className="w-80 h-[500px] bg-slate-700 rounded-xl p-6 shadow-lg flex flex-col">
      <h1 className="text-2xl font-semibold mb-6 text-center">Smart Lamp Controller</h1>

      <StatusCard isOn={isOn} onToggle={toggleLamp} loading={loading} />

      <p className="text-base text-muted-foreground mt-6 mb-3">Brightness</p>
      <Slider
        disabled={!isOn}
        value={[brightness]}
        onValueChange={handleBrightnessChange}
        min={0}
        max={100}
        step={1}
        className="mb-2"
      />

      <p className="text-base text-muted-foreground mt-6 mb-3">Color Temperature</p>
      <Slider
        disabled={!isOn}
        value={[colorTemperature]}
        onValueChange={handleColorTempChange}
        min={0}
        max={100}
        step={1}
        className="mb-2"
      />

      <div className="flex justify-between mt-6">
        <PresetButton label="Reading" onClick={() => activatePreset('reading')} disabled={!isOn} />
        <PresetButton label="Relax" onClick={() => activatePreset('relax')} disabled={!isOn} />
      </div>

      {error && <p className="text-red-500 mt-4 text-sm">⚠️ {error}</p>}
    </div>
  );
}

export default LampCard;

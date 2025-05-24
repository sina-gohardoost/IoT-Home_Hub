import { create } from 'zustand';
import { getLampStatus, setLampStatus } from '@/services/lampService';

const useLampStore = create((set) => ({
  isOn: false,
  brightness: 60,
  colorTemperature: 40,
  loading: false,
  error: null,

  fetchLampStatus: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getLampStatus();
      set({
        isOn: data.isOn,
        brightness: data.brightness ?? 60,
        colorTemperature: data.colorTemperature ?? 40,
      });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  toggleLamp: async () => {
    const prevState = useLampStore.getState().isOn;
    const newState = !prevState;
    set({ isOn: newState });
    try {
      await setLampStatus({ isOn: newState });
    } catch (err) {
      set({ isOn: prevState, error: err.message });
    }
  },

  setBrightness: (value) => set({ brightness: value }),

  setColorTemperature: (value) => set({ colorTemperature: value }),

  setLampSettings: async ({ isOn, brightness, colorTemperature }) => {
    const prev = useLampStore.getState();
    set({ isOn, brightness, colorTemperature });
    try {
      await setLampStatus({ isOn, brightness, colorTemperature });
    } catch (err) {
      set({
        isOn: prev.isOn,
        brightness: prev.brightness,
        colorTemperature: prev.colorTemperature,
        error: err.message,
      });
    }
  }
}));

export default useLampStore;

import React from 'react';
import { Switch } from '../../components/ui/switch';

const StatusCard = ({ isOn, onToggle }) => {
  return (
    <div 
      className={`${isOn ? 'bg-card-bg-bright' : 'bg-card-bg'} p-5 rounded-xl flex flex-col gap-2.5 transition-colors duration-300`}
    >
      <div className="flex justify-between items-center">
        <span className="text-base text-muted-foreground">Lamp Status</span>
        <Switch checked={isOn} onCheckedChange={onToggle} />
      </div>
      <span className={`text-[28px] font-bold ${isOn ? 'text-lamp-green' : 'text-muted-foreground'}`}>
        {isOn ? 'ON' : 'OFF'}
      </span>
    </div>
  );
};

export default StatusCard; 
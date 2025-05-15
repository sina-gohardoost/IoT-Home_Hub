import React from 'react';
import { cn } from '../lib/utils';

const PresetButton = ({ 
  label, 
  onClick, 
  disabled = false, 
  isActive = false, 
  isLampOn = true,
  className 
}) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={cn(
        "w-[110px] h-[50px] rounded-lg text-sm font-medium transition-all",
        isLampOn 
          ? "bg-card-bg-bright hover:bg-accent" 
          : "bg-card-bg hover:bg-accent/80",
        isActive 
          ? "text-lamp-green font-semibold" 
          : isLampOn ? "text-foreground" : "text-muted-foreground",
        "disabled:opacity-50 disabled:hover:bg-card-bg active:scale-[0.98] disabled:active:scale-100",
        className
      )}
    >
      {label}
    </button>
  );
};

export default PresetButton; 
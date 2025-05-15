import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  position: relative;
  height: 24px;
  display: flex;
  align-items: center;
  opacity: ${props => props.$disabled ? 0.5 : 1};
  pointer-events: ${props => props.$disabled ? 'none' : 'auto'};
`;

const SliderTrack = styled.div`
  width: 100%;
  height: 8px;
  background-color: var(--bg-card);
  border-radius: 4px;
  position: relative;
`;

const SliderFill = styled.div`
  position: absolute;
  height: 8px;
  left: 0;
  width: ${props => props.$percentage}%;
  background-color: ${props => props.$color};
  border-radius: 4px;
`;

const SliderHandle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: ${props => props.$percentage}%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Slider = ({ value = 0, onChange, color = 'var(--green)', disabled = false }) => {
  const [localValue, setLocalValue] = useState(value);
  const trackRef = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const updateValue = (clientX) => {
    if (trackRef.current && !disabled) {
      const rect = trackRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      const newValue = Math.round(percentage);
      setLocalValue(newValue);
      onChange(newValue);
    }
  };

  // Mouse Events
  const handleMouseDown = (e) => {
    if (disabled) return;
    isDragging.current = true;
    updateValue(e.clientX);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      updateValue(e.clientX);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // Touch Events
  const handleTouchStart = (e) => {
    if (disabled) return;
    isDragging.current = true;
    updateValue(e.touches[0].clientX);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    // Prevent scrolling while dragging
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    if (isDragging.current) {
      updateValue(e.touches[0].clientX);
      // Prevent scrolling while dragging
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  const handleTrackClick = (e) => {
    if (disabled) return;
    updateValue(e.clientX);
  };

  return (
    <SliderContainer $disabled={disabled}>
      <SliderTrack ref={trackRef} onClick={handleTrackClick}>
        <SliderFill $percentage={localValue} $color={color} />
        <SliderHandle 
          $percentage={localValue} 
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        />
      </SliderTrack>
    </SliderContainer>
  );
};

export default Slider; 
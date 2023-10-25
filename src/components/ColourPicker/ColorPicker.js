// ColorPicker.js
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function ColorPicker({ setColor }) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState('#ffffff'); // Initial color

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setCurrentColor(color.hex);
    setColor(color.hex);
  };

  return (
    <div>
      <button onClick={handleClick}>Pick Color</button>
      {displayColorPicker ? (
        <div style={{ position: 'absolute', zIndex: '2' }}>
          <div
            style={{ position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }}
            onClick={handleClose}
          />
          <SketchPicker color={currentColor} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
}

export default ColorPicker;

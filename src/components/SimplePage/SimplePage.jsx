import React, { useState } from 'react';

const SimplePage = () => {
  const [backgroundColor, setBackgroundColor] = useState('#29e31c'); // Initial background color
  const [centerColor, setCenterColor] = useState('#e91616'); // Initial background color

  const randomColor = () => {
    const symbols = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color = color + symbols[Math.floor(Math.random() * 16)];
    }
    setBackgroundColor(color);
  };
  const randomColorforCenter = () => {
    const symbols = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color = color + symbols[Math.floor(Math.random() * 16)];
    }
   
    setCenterColor(color);
  };

  const handleRandomColor = () => {
    randomColor()
    randomColorforCenter();
  }

  return (
    <div className='my-2 md:my-12 mx-2 md:mx-12'>
      <div className='text-center mb-4'>
        <p style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
          The random color will change with each click you make.
        </p>
        <button
          className='px-3 py-1 bg-lime-500 hover:bg-lime-600 rounded-lg text-slate-700 font-bold hover:text-white'
          onClick={() => handleRandomColor()}
        >
          Change Color
        </button>
      </div>
      <div className='flex justify-center'>
        <div
          className='w-screen h-screen relative flex justify-center items-center'
          style={{ background: backgroundColor }}
        >
          <div
            style={{ background: centerColor }}
            className='rounded-full h-72 w-72'
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SimplePage;

import React, { useState } from 'react';
import useTitles from '../../hooks/useTitles';

const SimplePage = () => {
  useTitles('|| Simple Page');
  const [backgroundColor, setBackgroundColor] = useState('#29e31c');
  const [centerColor, setCenterColor] = useState('#e91616'); 

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
      <div className='md:text-center mb-4'>
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
      <div className='flex md:justify-center'>
        <div
          className='w-80 md:w-screen h-56 md:h-screen relative flex justify-center items-center'
          style={{ background: backgroundColor }}
        >
          <div
            style={{ background: centerColor }}
            className='rounded-full h-24 md:h-56 lg:h-72 w-24 md:w-56 lg:w-72'
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SimplePage;

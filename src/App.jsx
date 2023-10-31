import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import { CiGlobe } from 'react-icons/ci';
import { TbPencilMinus } from 'react-icons/tb';
import { VscDebugRestart, VscAdd } from 'react-icons/vsc';
import { PiMonitorLight } from 'react-icons/pi';
import './App.css';


function App() {


  const [myStyleStore, setMyStyleStore] = useState({
    color: '#1698e9',
    fontFamily: 'roboto',
    fontSize: 52,
    fontWeight: 600,
    // lineHeight:1
    // width: 600,
    
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  console.log(myStyleStore);
  
  
  return (
    <div className='px-2 md:px-4 lg:px-6 my-8'>
      <div>
        <div className='grid  grid-cols-12 '>
          <div className='col-span-12 md:col-span-2 md:border-e-2 relative '>
            <div action='' className=''>
              {/* text color */}
              <div className='flex justify-between mt-2'>
                <div>
                  <label htmlFor=''>Text Color</label>
                </div>
                <div className='flex items-center'>
                  <CiGlobe className='p-[2px] text-2xl border-2 rounded-s-sm text-red-500' />{' '}
                  <input
                    type='color'
                    name=''
                    id=''
                    defaultValue='#1698e9'
                    onChange={(e) =>
                      setMyStyleStore({
                        ...myStyleStore,
                        color: e.target.value,
                      })
                    }
                    className='p-[2px] w-6 h-6 rounded-full'
                  />
                </div>
              </div>
              {/* typography */}
              {/* main task */}
              <div className='mt-2'>
                <div className=''>
                  <div className='flex justify-between items-center'>
                    Typography
                    <button
                      className='close flex items-center'
                      name='openModalButton'
                      id='openModalButton'
                      onClick={() => setIsModalOpen(!isModalOpen)}
                    >
                      <CiGlobe className='p-[2px] text-2xl border-2 rounded-s-sm' />{' '}
                      <TbPencilMinus className='p-[2px] text-2xl border-2 border-l-0 rounded-e-sm bg-stone-300' />
                    </button>
                  </div>
                </div>
                {/* modal part */}
                <div>
                  {isModalOpen && (
                    <div className='modal absolute  w-full duration-300 bg-gray-100 shadow-md shadow-slate-700 '>
                      <div className='modal-content '>
                        <div className='flex justify-between shadow-md shadow-slate-400 px-2 py-3 mt-1'>
                          <p className=''>Typography</p>
                          <div className='flex items-center gap-2'>
                            <button>
                              <VscDebugRestart className='border-2 text-xl ' />
                            </button>
                            <button>
                              <VscAdd className='border-2 text-xl' />{' '}
                            </button>
                          </div>
                        </div>

                        <div className='px-4 p-1 mt-4'>
                          {/* font family */}
                          <div className='grid grid-cols-2'>
                            <div className='flex items-center'>
                              <p>Family</p>
                            </div>
                            <div>
                              <select
                                name='font-family'
                                id='font-family'
                                className='px-2 py-2 w-full rounded-md'
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    fontFamily: e.target.value,
                                  })
                                }
                              >
                                <option value="'Roboto', sans-serif">
                                  Roboto
                                </option>
                                <option value="'Kenia', sans-serif">
                                  Kenia
                                </option>
                                <option value="'Josefin Sans', sans-serif">
                                  Josefin
                                </option>
                              </select>
                            </div>
                          </div>
                          {/* font size */}
                          <div>
                            <div className='grid grid-cols-2 mt-4'>
                              <div className='flex items-center gap-3'>
                                <p>Size</p>
                                <PiMonitorLight />
                              </div>
                              <div className='px-2'>
                                <p className='text-end'>px &#9660;</p>
                              </div>
                            </div>
                            <div className='flex items-center justify-between mt-2'>
                              <input
                                className='w-8/12 text-size h-2 rounded-full bg-slate-400 text-sky-400'
                                style={{ '--range-color': '#FF5733' }}
                                value={parseFloat(myStyleStore?.fontSize || 16)}
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    fontSize: parseFloat(e.target.value),
                                  })
                                }
                                type='range'
                                name=''
                                id=''
                              />{' '}
                              <input
                                value={myStyleStore?.fontSize }
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    fontSize: parseFloat(e.target.value),
                                  })
                                }
                                className='px-2 w-12 rounded-md  border-2 border-slate-400'
                              />
                            </div>
                          </div>
                          {/* font weight */}
                          <div className='grid grid-cols-2 mt-4'>
                            <div className='flex items-center'>
                              <p>Weight</p>
                            </div>
                            <div>
                              <select
                                name=''
                                id=''
                                className='px-2 py-2 w-full rounded-md'
                                defaultValue='600'
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    fontWeight: e.target.value,
                                  })
                                }
                              >
                                <option value='400'>400 (Low Normal)</option>
                                <option value='500'>500 (Normal)</option>
                                <option value='600'>600 (Semi Bold)</option>
                                <option value='700'>700 (Bold)</option>
                                <option value='800'>800 (High Bold)</option>
                                <option value='900'>900 (Extra Bold)</option>
                              </select>
                            </div>
                          </div>
                          {/* transform */}
                          <div className='grid grid-cols-2 mt-4'>
                            <div className='flex items-center'>
                              <p>Transform</p>
                            </div>
                            <div>
                              <select
                                name=''
                                id=''
                                className='px-2 py-2 w-full rounded-md'
                                defaultValue='600'
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    transform: e.target.value,
                                  })
                                }
                              >
                                <option value='rotate(5deg)'>
                                  Rotate (5deg)
                                </option>
                                <option value='rotate(25deg)'>
                                  Rotate (25deg)
                                </option>
                                <option value='rotate(50deg)'>
                                  Rotate (50deg)
                                </option>
                                <option value='rotate(75deg)'>
                                  Rotate (75deg)
                                </option>
                                <option value='rotate(90deg)'>
                                  Rotate (90deg)
                                </option>
                                <option value='rotate(120deg)'>
                                  Rotate (120deg)
                                </option>
                                <option value='rotate(150deg)'>
                                  Rotate (150deg)
                                </option>
                                <option value='rotate(180deg)'>
                                  Rotate (180deg)
                                </option>
                                <option value='skewY(15deg)'>
                                  skewY(15deg)
                                </option>
                                <option value='skewY(30deg)'>
                                  skewY(30deg)
                                </option>
                                <option value='skewY(45deg)'>
                                  skewY(45deg)
                                </option>
                                <option value='skewY(60deg)'>
                                  skewY(60deg)
                                </option>
                                <option value='skewY(75deg)'>
                                  skewY(75deg)
                                </option>
                              </select>
                            </div>
                          </div>
                          {/* style */}
                          <div className='grid grid-cols-2 mt-4'>
                            <div className='flex items-center'>
                              <p>Style</p>
                            </div>
                            <div>
                              <select
                                name=''
                                id=''
                                className='px-2 py-2 w-full rounded-md'
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    fontStyle: e.target.value,
                                  })
                                }
                              >
                                <option value='normal'>Normal</option>
                                <option value='italic'>Italic</option>
                              </select>
                            </div>
                          </div>
                          {/* decoration */}
                          <div className='grid grid-cols-2 mt-4'>
                            <div className='flex items-center'>
                              <p>Decoration</p>
                            </div>
                            <div>
                              <select
                                name=''
                                id=''
                                defaultValue='none'
                                className='px-2 py-2 w-full rounded-md'
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    textDecoration: e.target.value,
                                  })
                                }
                              >
                                <option value='none'>None</option>
                                <option value='underline'>Underline</option>
                                <option value='overline'>Overline</option>
                                <option value='line-through'>
                                  Line Through
                                </option>
                              </select>
                            </div>
                          </div>
                          {/* line height */}
                          <div>
                            <div className='grid grid-cols-2 mt-4'>
                              <div className='flex items-center gap-3'>
                                <p>Line-Height</p>
                                <PiMonitorLight />
                              </div>
                              <div className='px-2'>
                                <p className='text-end'>px &#9660;</p>
                              </div>
                            </div>
                            <div className='flex items-center justify-between mt-2'>
                              <input
                                className='w-8/12 text-size h-2 rounded-full bg-slate-400 text-sky-400'
                                style={{ '--range-color': '#FF5733' }}
                                value={parseFloat(myStyleStore?.lineHeight || 1)}
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    lineHeight: parseFloat(e.target.value),
                                  })
                                }
                                type='range'
                                name=''
                                id=''
                              />{' '}
                              <input
                                value={myStyleStore?.lineHeight || 1}
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    lineHeight: parseFloat(e.target.value),
                                  })
                                }
                                className='px-2 w-12 rounded-md  border-2 border-slate-400'
                              />
                            </div>
                          </div>
                          {/* letter spacing */}
                          <div>
                            <div className='grid grid-cols-2 mt-4'>
                              <div className='flex items-center gap-3'>
                                <p>Letter Spacing</p>
                                <PiMonitorLight />
                              </div>
                              <div className='px-2'>
                                <p className='text-end'>px &#9660;</p>
                              </div>
                            </div>
                            <div className='flex items-center justify-between mt-2'>
                              <input
                                className='w-8/12 text-size h-2 rounded-full bg-slate-400 text-sky-400'
                                style={{ '--range-color': '#FF5733' }}
                                value={parseFloat(myStyleStore?.letterSpacing || 1)}
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    letterSpacing: parseFloat(e.target.value),
                                  })
                                }
                                type='range'
                                name=''
                                id=''
                              />{' '}
                              <input
                                value={myStyleStore?.letterSpacing || 1}
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    letterSpacing: parseFloat(e.target.value),
                                  })
                                }
                                className='px-2 w-12 rounded-md  border-2 border-slate-400'
                              />
                            </div>
                          </div>
                          {/* word spacing */}
                          <div>
                            <div className='grid grid-cols-2 mt-4'>
                              <div className='flex items-center gap-3'>
                                <p>Word Spacing</p>
                                <PiMonitorLight />
                              </div>
                              <div className='px-2'>
                                <p className='text-end'>px &#9660;</p>
                              </div>
                            </div>
                            <div className='flex items-center justify-between mt-2'>
                              <input
                                className='w-8/12 text-size h-2 rounded-full bg-slate-400 text-sky-400'
                                style={{ '--range-color': '#FF5733' }}
                                value={parseFloat(myStyleStore?.wordSpacing || 1)}
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    wordSpacing: parseFloat(e.target.value),
                                  })
                                }
                                type='range'
                                name=''
                                id=''
                              />{' '}
                              <input
                                value={myStyleStore?.wordSpacing || 1}
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    wordSpacing: parseFloat(e.target.value),
                                  })
                                }
                                className='px-2 w-12 rounded-md  border-2 border-slate-400'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* text stroke */}
              <div className='flex justify-between mt-2'>
                <div>
                  <label htmlFor=''>Text Stroke</label>
                </div>
                <div>
                  <input
                    type=''
                    name=''
                    id=''
                    className='ml-4 w-4 h-4 rounded-full '
                  />
                </div>
              </div>
              {/* text shadow */}
              <div className='flex justify-between mt-2'>
                <div>
                  <label htmlFor=''>Text Shadow</label>
                </div>
                <div>
                  <input
                    type=''
                    name=''
                    id=''
                    className='ml-4 w-4 h-4 rounded-full '
                  />
                </div>
              </div>
              {/* blend mode */}
              <div className='flex justify-between mt-2'>
                <div>
                  <label htmlFor=''>Blend Mode</label>
                </div>
                <div>
                  <input
                    type=''
                    name=''
                    id=''
                    className='ml-4 w-4 h-4 rounded-full '
                  />
                </div>
              </div>
            </div>
          </div>
          {/* side part */}
          <div className=' col-span-12 md:col-span-10 mx-4'>
            <div>
              <Navbar />
            </div>
            <div className='flex justify-center items-center '>
              <p
                style={myStyleStore}
                // style={myCustomStyle}
                className='text-cyan-400 border-2 border-red-300 px-2 py-1 mt-40 abc'
              >
                Add your heading text here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default App

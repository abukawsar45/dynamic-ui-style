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
    fontSize: 24,
    fontWeight: 600,
    
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  console.log(myStyleStore);
  
  
  return (
    <div className='px-2 md:px-4 lg:px-6 my-8 h-screen'>
      <div>
        <div className='grid  grid-cols-12 '>
          <div className='col-span-12 md:col-span-2 md:border-e-2 relative '>
            <div action='' className=''>
              {/* text color */}
              <div className='flex justify-between'>
                <div>
                  <label htmlFor=''>Text Color</label>
                </div>
                <div>
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
                    className='ml-4 w-6 h-6 rounded-full'
                  />
                </div>
              </div>
              {/* typography Main task */}
              <div className=''>
                <div className=''>
                  <div className='flex justify-between items-center'>
                    Typography
                    <button
                      className='close flex items-center'
                      name='openModalButton'
                      id='openModalButton'
                      onClick={() => setIsModalOpen(!isModalOpen)}
                    >
                      <TbPencilMinus className='p-[2px] text-2xl border-2 rounded-s-sm' />{' '}
                      <CiGlobe className='p-[2px] text-2xl border-2 border-l-0 rounded-e-sm bg-stone-300' />
                    </button>
                  </div>
                </div>
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
                                defaultValue={parseFloat(myStyleStore.fontSize)}
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
                                value={myStyleStore?.fontSize}
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
                                name='font-weight'
                                id='font-family'
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
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* text stroke */}
              <div className='flex justify-between'>
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
              <div className='flex justify-between'>
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
              <div className='flex justify-between'>
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
                className='text-cyan-400 border-2 border-red-300 px-2 py-1'
                
              >Add your heading text here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default App

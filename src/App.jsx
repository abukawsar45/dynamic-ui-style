import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import { CiGlobe } from 'react-icons/ci';
import { TbPencilMinus } from 'react-icons/tb';
import { VscDebugRestart, VscAdd } from 'react-icons/vsc';


function App() {


   const [isModalOpen, setIsModalOpen] = useState(false);

  
  
  return (
    <div className='px-2 md:px-4 lg:px-6 my-8'>
      <div>
        <div className='grid  grid-cols-12 '>
          <div className='col-span-12 md:col-span-2 md:border-e-2 relative '>
            <div action='' className='mx-2'>
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
                    className='ml-4 w-4 h-4 rounded-full '
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
                    <div className='modal duration-300 bg-gray-100 shadow-md shadow-slate-700 '>
                      <div className='modal-content px-2 py-1 mt-1'>
                        <div className='flex justify-between '>
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
                        <div className='border-b-2 w-full border-slate-300 mt-2 shadow-md shadow-slate-900'></div>
                        <div className='px-2 p-1'>
                          {/* font family */}
                          <div className="flex justify-between items-center">
                            <p>family</p>
                            <p>roboto</p>
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
          <div className=' col-span-12 md:col-span-10 bg-slate-400'>
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};


export default App

import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import { CiGlobe } from 'react-icons/ci';
import { TbPencilMinus } from 'react-icons/tb';


function App() {


   const [isModalOpen, setIsModalOpen] = useState(false);

  
  
  return (
    <div className='px-2 md:px-4 lg:px-6 my-8'>
      <div>
        <div className='grid  grid-cols-12 gap-2'>
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
                  <div className='flex justify-between'>
                    Typography
                    <button
                      className='close flex items-center'
                      name='openModalButton'
                      id='openModalButton'
                      onClick={()=>setIsModalOpen(!isModalOpen)}
                    >
                      <TbPencilMinus/> <CiGlobe />
                    </button>
                  </div>
                </div>
                <div>
                  {isModalOpen && (
                    <div className='modal absolute ml-[0%] bg-gray-100 shadow-md shadow-slate-700 '>
                      <div className='modal-content'>
                        <button className=''>Typography</button>
                        <p>Modal Content Goes Here</p>
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

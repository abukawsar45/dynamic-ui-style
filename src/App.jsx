import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';


function App() {


   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => {
     setIsModalOpen(true);
   };

   const closeModal = () => {
     setIsModalOpen(false);
  };
  
  return (
    <div className='px-2 md:px-4 lg:px-6 my-8'>
      <div>
        <div className='grid  grid-cols-12'>
          <div className='col-span-12 md:col-span-2'>
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
              <div className='flex justify-between'>
                <div>
                  <button>Typography</button>
                </div>
                <div>
                  <button
                    name='openModalButton'
                    id='openModalButton'
                    onClick={openModal}
                  >
                    <span>icon</span> icon
                  </button>
                  {isModalOpen && (
                    <div className='modal'>
                      <div className='modal-content'>
                        <span className='close' onClick={closeModal}>
                          &times;
                        </span>
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

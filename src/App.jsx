import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import { CiGlobe } from 'react-icons/ci';
import { TbPencilMinus } from 'react-icons/tb';
import { VscDebugRestart, VscAdd } from 'react-icons/vsc';
import './App.css';


function App() {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRobotoClicked, setIsRobotoClicked] = useState(false);
  const [isKeniaClicked, setIsKeniaClicked] = useState(false);
  const [isJosefinClicked, setIsJosefinClicked] = useState(false);


  console.log({
    isRobotoClicked,
    isKeniaClicked,
    isJosefinClicked
  })

  useEffect(() => {
    
  },[isRobotoClicked,isKeniaClicked, isJosefinClicked])
  
  
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
                                onChange={(e) => {
                                  if (e.target.value === 'roboto') {
                                    setIsRobotoClicked(true);
                                    setIsKeniaClicked(false); // Reset the other font state
                                  } else if (e.target.value === 'kenia') {
                                    setIsKeniaClicked(true);
                                    setIsRobotoClicked(false); // Reset the other font state
                                  } else if (e.target.value === 'josefin') {
                                    setIsJosefinClicked(true);
                                    setIsKeniaClicked(false);
                                    setIsRobotoClicked(false); // Reset the other font state
                                  } else {
                                    setIsRobotoClicked(false);
                                    setIsKeniaClicked(false);
                                    setIsJosefinClicked(false);
                                  }
                                }}
                              >
                                <option value='roboto'>Roboto</option>
                                <option value='kenia'>Kenia</option>
                                <option value='josefin'>Josefin</option>
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
            <div className='flex justify-center items-center w-full'>
              <input
                className={`text-cyan-400 ${
                  isRobotoClicked
                    ? 'roboto'
                    : isKeniaClicked
                    ? 'kenia'
                    : isJosefinClicked
                    ? 'josefin'
                    : ''
                }`}
                type='text'
                name='heading'
                id=''
                defaultValue='Add your heading text here'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default App

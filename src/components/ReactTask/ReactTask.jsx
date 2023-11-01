import React, { useEffect, useState } from 'react';
import { CiGlobe } from 'react-icons/ci';
import { TbPencilMinus } from 'react-icons/tb';
import { VscDebugRestart, VscAdd } from 'react-icons/vsc';
import { PiMonitorLight } from 'react-icons/pi';
import { FaPencilAlt, FaSun } from 'react-icons/fa';
import { AiFillSetting, AiOutlineClose } from 'react-icons/ai';
import { GoPlus,GoFileDirectoryFill } from 'react-icons/go';
import './ReactTask.css';
import useTitles from '../../hooks/useTitles';


const ReactTask = () => {
  useTitles('|| React Task');
  const [myStyleStore, setMyStyleStore] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  // drag and drop file
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  console.log(myStyleStore);

  const myCustomStyle = {
    color: '#1698e9',
    fontFamily: 'roboto',
    fontSize: 52,
    fontWeight: 600,
    lineHeight: 1,
    // width: 600,
  };

  const handleResetStyle = () => {
    setMyStyleStore({});
  };

  useEffect(() => {
    setMyStyleStore(myCustomStyle);
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;

    if (files.length > 0) {
      const file = files[0];
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className=''>
      <div>
        <div className='grid  grid-cols-12'>
          {/* left side part */}
          <div className='col-span-12 md:col-span-3 lg:col-span-2 px-2 md:border-e-2 md:h-screen'>
            <div className='flex justify-between items-center md:mb-6 gap-2 md:gap-4 border-b border-slate-200'>
              <div className='flex flex-col justify-center items-center py-2 gap-1 '>
                <FaPencilAlt />
                <p>Content</p>
              </div>
              <div className='flex flex-col justify-center items-center py-2 gap-1 font-bold border-b-4 border-emerald-950 w-full'>
                <FaSun />
                <p>Style</p>
              </div>
              <div className='flex flex-col justify-center items-center py-2 gap-1 '>
                <AiFillSetting />
                <p>Advanced</p>
              </div>
            </div>
            <p className='flex items-center font-bold gap-2 mb-5'>
              {' '}
              &#9660; <span>Title</span>{' '}
            </p>
            <div action='' className=''>
              {/* text color */}
              <div className='flex justify-between mt-2 lg:mt-4'>
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
                    className='p-[2px] w-6 h-6 rounded-full hover:bg-slate-400'
                  />
                </div>
              </div>
              {/* typography */}
              {/* main task */}
              <div className='mt-2 lg:mt-4'>
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
                      {/*  <AiOutlineClose
                      onClick={() => removeSelectedFile()}
                      className='text-2xl hover:text-slate-50 hover:bg-red-400 '
                    /> */}
                      {isModalOpen ? (
                        <AiOutlineClose
                          onClick={() => removeSelectedFile()}
                          className='p-[2px] hover:p-[1px] text-2xl border-2 text-white bg-red-500 hover:text-slate-50 hover:bg-red-700'
                        />
                      ) : (
                        <TbPencilMinus className='p-[2px] text-2xl border-2 border-l-0 rounded-e-sm bg-stone-300 hover:bg-slate-400' />
                      )}
                    </button>
                  </div>
                </div>
                {/* modal part */}
                <div>
                  {isModalOpen && (
                    <div className='modal  w-full duration-300 bg-gray-100 shadow-md shadow-slate-700 '>
                      <div className='modal-content '>
                        <div className='flex justify-between shadow-md shadow-slate-400  py-3 mt-1'>
                          <p className=''>Typography</p>
                          <div className='flex items-center gap-2'>
                            <button
                              onClick={() => handleResetStyle()}
                              className='border-2 hover:text-stone-950 '
                            >
                              <VscDebugRestart className=' text-xl hover:font-bold hover:text-emerald-600 hover:bg-slate-200' />
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
                                name=''
                                id=''
                                defaultValue={myStyleStore?.fontFamily}
                                className='px-1 py-1 w-full rounded-md border'
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    fontFamily: e.target.value,
                                  })
                                }
                              >
                                <option value="'Risque', serif">Risque</option>
                                <option value="'Road Rage', sans-serif">
                                  Road Rage
                                </option>
                                <option value="'Roboto', sans-serif">
                                  Roboto
                                </option>
                                <option value="'Roboto Condensed', sans-serif">
                                  Roboto Condensed
                                </option>
                                <option value="'Roboto Flex', sans-serif">
                                  Roboto Flex
                                </option>
                                <option value="'Roboto Mono', sans-serif">
                                  Roboto Mono
                                </option>
                                <option value="'Roboto Serif', sans-serif">
                                  Roboto Serif
                                </option>
                                <option value="'Roboto Slab', sans-serif">
                                  Roboto Slab
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
                                className='w-8/12 text-size h-2 rounded-md bg-slate-400 text-sky-400'
                                min={0}
                                max={400}
                                style={{ '--range-color': '#FF5733' }}
                                value={parseFloat(myStyleStore?.fontSize || 0)}
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
                                className='px-2 w-12 rounded-md  border border-slate-400'
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
                                className='px-1 py-1 w-full rounded-md border'
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
                                className='px-1 py-1 w-full rounded-md border'
                                defaultValue='none'
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    transform: e.target.value,
                                  })
                                }
                              >
                                <option value='none'>Default</option>
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
                                className='px-1 py-1 w-full rounded-md border'
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    fontStyle: e.target.value,
                                  })
                                }
                              >
                                <option value='normal'>Default</option>
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
                                className='px-1 py-1 w-full rounded-md border'
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    textDecoration: e.target.value,
                                  })
                                }
                              >
                                <option value='none'>Defalut</option>
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
                                className='w-8/12 text-size h-2 rounded-md bg-slate-400 text-sky-400'
                                style={{ '--range-color': '#FF5733' }}
                                value={parseFloat(
                                  myStyleStore?.lineHeight || 0
                                )}
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
                                value={myStyleStore?.lineHeight || 0}
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    lineHeight: parseFloat(e.target.value),
                                  })
                                }
                                className='px-2 w-12 rounded-md  border border-slate-400'
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
                                className='w-8/12 text-size h-2 rounded-md bg-slate-400 text-sky-400'
                                style={{ '--range-color': '#FF5733' }}
                                value={parseFloat(
                                  myStyleStore?.letterSpacing || 0
                                )}
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
                                value={myStyleStore?.letterSpacing || 0}
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    letterSpacing: parseFloat(e.target.value),
                                  })
                                }
                                className='px-2 w-12 rounded-md  border border-slate-400'
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
                                className='w-8/12 text-size h-2 rounded-md bg-slate-400 text-sky-400'
                                style={{ '--range-color': '#FF5733' }}
                                value={parseFloat(
                                  myStyleStore?.wordSpacing || 0
                                )}
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
                                value={myStyleStore?.wordSpacing || 0}
                                onChange={(e) =>
                                  setMyStyleStore({
                                    ...myStyleStore,
                                    wordSpacing: parseFloat(e.target.value),
                                  })
                                }
                                className='px-2 w-12 rounded-md  border border-slate-400'
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
              <div className='flex justify-between mt-2 lg:mt-4'>
                <div>
                  <label htmlFor=''>Text Stroke</label>
                </div>
                <div>
                  <button className='close flex items-center'>
                    <TbPencilMinus className='p-[2px] text-2xl border-2 border-l-0 rounded-e-sm bg-stone-300  hover:bg-slate-400' />
                  </button>
                </div>
              </div>
              {/* text shadow */}
              <div className='flex justify-between mt-2 lg:mt-4'>
                <div>
                  <label htmlFor=''>Text Shadow</label>
                </div>
                <div>
                  <button className='close flex items-center'>
                    <TbPencilMinus className='p-[2px] text-2xl border-2 border-l-0 rounded-e-sm bg-stone-300  hover:bg-slate-400' />
                  </button>
                </div>
              </div>
              {/* blend mode */}
              <div className='grid grid-cols-2 mt-2 lg:mt-4'>
                <div className='flex items-center'>
                  <p>Blend Mode</p>
                </div>
                <div>
                  <select
                    name=''
                    id=''
                    className='px-1 py-1 w-full rounded-md border'
                    onChange={(e) =>
                      setMyStyleStore({
                        ...myStyleStore,
                        mixBlendMode: e.target.value, // Use valid blend mode here
                      })
                    }
                  >
                    <option value='normal'>Normal</option>
                    <option value='multiply'>Multiply</option>
                    <option value='overlay'>overlay</option>
                    <option value='darken'>darken</option>
                    <option value='lighten'>lighten</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/*right side part */}
          <div className=' col-span-12 md:col-span-9 lg:col-span-10 mx-4'>
            <div className='flex justify-center items-center '>
              <p
                style={myStyleStore}
                className='text-cyan-400 border-2 border-red-300 px-2 py-1 mt-40 abc'
              >
                Add your heading text here
              </p>
            </div>
            <div class='flex flex-col justify-center items-center mt-2 md:mt-6 lg:mt-20'>
              <div
                className={`dropzone group ${
                  isDragging ? 'dragging' : ''
                } border-2 border-slate-500 border-dotted w-80 h-32 flex flex-col justify-center items-center`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type='file'
                  id='file-input'
                  name='file'
                  accept='.jpg, .jpeg, .png, .pdf, .doc, .docx'
                  className='file-input'
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    if (e.target.files.length > 0) {
                      const file = e.target.files[0];
                      setSelectedFile(URL.createObjectURL(file));
                    }
                  }}
                />
                <label
                  htmlFor='file-input'
                  className='file-label flex flex-col justify-center items-center cursor-pointer'
                >
                  {!selectedFile && (
                    <span className='flex gap-2'>
                      <GoPlus className='text-4xl p-2 bg-red-300 opacity-70  hover:bg-red-400 rounded-full' />
                      <GoFileDirectoryFill className='text-4xl p-2 text-white bg-slate-800 opacity-70  hover:bg-black rounded-full' />
                    </span>
                  )}
                  {!selectedFile
                    ? isDragging
                      ? 'Paste here'
                      : 'Drag widget here'
                    : null}
                </label>
                {selectedFile && (
                  <>
                    <img
                      src={selectedFile}
                      alt='Selected File'
                      className='h-4/6 '
                    />
                    <AiOutlineClose
                      onClick={() => removeSelectedFile()}
                      className='text-2xl hover:text-slate-50 hover:bg-red-400 '
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactTask;

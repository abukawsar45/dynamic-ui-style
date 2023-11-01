import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../utilities/ActiveLink';

const Navbar = () => {
  return (
    <div className='md:grid grid-cols-12 '>
      <div className='col-span-12 md:col-span-3 lg:col-span-2  md:border-e-2 relative '></div>
      <div className=' mt-3 col-span-12 md:col-span-9 lg:col-span-10 mx-4'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between mx-2'>
          <div className=' md:px-2'>
            <Link to='/' className='font-bold'>
              ALMS Dev
            </Link>
          </div>
          <div className='flex  flex-col md:flex-row font-semibold gap-1 md:gap-6'>
            <ActiveLink to='/course'>Course</ActiveLink>
            <ActiveLink to='/dashboard'>Dashboard</ActiveLink>
            <ActiveLink to='/instructorRegistration'>
              Instructor Registration
            </ActiveLink>
            <ActiveLink to='/'>React Task</ActiveLink>
            <ActiveLink to='/simplePage'>Simple Page</ActiveLink>
            <ActiveLink to='/studentRegistration'>
              Student Registration
            </ActiveLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../utilities/ActiveLink';

const Navbar = () => {
  return (
    <div className='grid grid-cols-12 '>
      <div className='col-span-12 md:col-span-3 lg:col-span-2  md:border-e-2 relative '>
        
      </div>
      <div className=' mt-3 col-span-12 md:col-span-9 lg:col-span-10 mx-4'>
        <div className='flex items-center justify-between mx-2'>
          <div className='px-2'>
            <Link to='/'>ALMS Dev</Link>
          </div>
          <div className='flex gap-6'>
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
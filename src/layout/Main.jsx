import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const Main = () => {
  return (
    <div className='mx-1 md:mx-4 lg:mx-6 my-1 md:my-3 lg:my-5'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;

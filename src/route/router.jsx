import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import ReactTask from '../components/ReactTask/ReactTask';
import Course from '../components/Course/Course';
import Dashboard from '../components/Dashboard/Dashboard';
import InstructorRegistration from '../components/InstructorRegistration/InstructorRegistration';
import SimplePage from '../components/SimplePage/SimplePage';
import StudentRegistration from '../components/StudentRegistration/StudentRegistration';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ReactTask />,
      },
      {
        path: '/course',
        element: <Course/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/instructorRegistration',
        element: <InstructorRegistration/>
      },
      {
        path: '/simplePage',
        element: <SimplePage/>
      },
      {
        path: '/studentRegistration',
        element: <StudentRegistration/>
      }
    ],
  },
]);

export default router;

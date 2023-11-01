import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import ReactTask from '../components/ReactTask/ReactTask';


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
    ],
  },
]);

export default router;

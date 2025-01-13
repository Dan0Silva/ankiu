import { createBrowserRouter } from 'react-router-dom';

import Login from '../../scenes/Login';
import Register from '../../scenes/Register';
import Home from '../../scenes/Home';

const createRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

export default createRouter;

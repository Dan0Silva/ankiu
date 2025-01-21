import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import createRouter from './services/routes/router';

import { UserProvider } from './services/contexts/UserContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={createRouter} />
    </UserProvider>
    <ToastContainer position="top-right" theme="light" />
  </StrictMode>
);

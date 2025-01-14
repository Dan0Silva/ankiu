import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import createRouter from './services/routes/router';

const router = createRouter;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" theme="light" />
  </StrictMode>
);

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Pages
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ServicesPage from './pages/ServicesPage';
import TrackingPage from './pages/TrackingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';

// Layout
import MainLayout from './components/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'book', element: <BookingPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'tracking', element: <TrackingPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'faq', element: <FAQPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home/Home';
import About from '@pages/About/About';
import Services from '@pages/Services/Services';
import Industries from '@pages/Industries/Industries';
import Contact from '@pages/Contact/Contact';
import Careers from '@pages/Careers/Careers';
import StoryPage from '@pages/About/story'
import LegacyPage from '@pages/About/legacy'
import MobilePhonesPage from "@pages/Bussiness/MobilePhones"
import { ROUTES } from '@utils/constants';

/**
 * Application Router Configuration
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />,
      },
      {
        path: ROUTES.INDUSTRIES,
        element: <Industries />,
      },
      {
        path: ROUTES.CONTACT,
        element: <Contact />,
      },
      {
        path: ROUTES.CAREERS,
        element: <Careers />,
      },
      {
        path: ROUTES.STORY,
        element: <StoryPage />
      },
      {
        path: ROUTES.OUR_LEGACY,
        element: <LegacyPage />
      },
      {
        path: ROUTES.MOBILE_PHONES,
        element: <MobilePhonesPage />
      }
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

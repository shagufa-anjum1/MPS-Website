import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home/Home';
import About from '@pages/About/About';
import Services from '@pages/Services/Services';
import Industries from '@pages/Industries/Industries';
import Contact from '@pages/Contact/Contact';
import Careers from '@pages/Careers/Careers';
import StoryPage from '@pages/About/story';
import LegacyPage from '@pages/About/legacy';
import LeadershipPage from '../pages/About/leadership';
import PresencePage from '../pages/About/presence';
import RecognitionsPage from '../pages/About/recognitions';

// Business Pages
import Products from '../pages/About/Bussiness/Products';
import InnovationHub from '../pages/About/Bussiness/InnovationHub';
import B2BSolutions from '../pages/About/Bussiness/B2BSolutions';
import MobilePhonesPage from '@/pages/About/Bussiness/MobilePhones';

// Investors Pages
import FinancialPerformance from '../pages/About/Investors/FinancialPerformance';
import FilingsReports from '../pages/About/Investors/FilingsReports';
import CorporateGovernance from '../pages/About/Investors/CorporateGovernance';
import ShareholderInfo from '../pages/About/Investors/ShareholderInfo';

// Responsibility Pages
import Sustainability from '../pages/Responsibility/Sustainability';
import ESGInitiatives from '../pages/Responsibility/ESGInitiatives';
import CommunityImpact from '../pages/Responsibility/CommunityImpact';

// Careers Pages
import LifeAtCompany from '../pages/Careers/LifeAtCompany';
import JobOpenings from '../pages/Careers/JobOpenings';
import BenefitsPerks from '../pages/Careers/BenefitsPerks';

// Newsroom Pages
import PressReleases from '../pages/Newsroom/PressReleases';
import Blog from '../pages/Newsroom/Blog';
import Events from '../pages/Newsroom/Events';

import { ROUTES } from '@utils/constants';

/**
 * Application Router Configuration
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      // Home Route (Index)
      {
        index: true, // ✅ This makes it the default route at '/'
        element: <Home />,
      },
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

      // About Section Routes
      {
        path: ROUTES.STORY,
        element: <StoryPage />,
      },
      {
        path: ROUTES.OUR_LEGACY,
        element: <LegacyPage />,
      },
      {
        path: ROUTES.OUR_LEADERSHIP,
        element: <LeadershipPage />,
      },
      {
        path: ROUTES.OUR_PRESENCE,
        element: <PresencePage />,
      },
      {
        path: ROUTES.OUR_RECOGNITIONS,
        element: <RecognitionsPage />,
      },

      // Business Routes
      {
        path: ROUTES.MOBILE_PHONES,
        element: <MobilePhonesPage />,
      },
      {
        path: ROUTES.OUR_PRODUCTS,
        element: <Products />,
      },
      {
        path: ROUTES.OUR_INNOVATION,
        element: <InnovationHub />,
      },
      {
        path: ROUTES.OUR_B2B,
        element: <B2BSolutions />,
      },

      // Investors Routes
      {
        path: ROUTES.INVESTORS_FINANCIALS,
        element: <FinancialPerformance />,
      },
      {
        path: ROUTES.INVESTORS_FILINGS,
        element: <FilingsReports />,
      },
      {
        path: ROUTES.INVESTORS_GOVERNANCE,
        element: <CorporateGovernance />,
      },
      {
        path: ROUTES.INVESTORS_SHAREHOLDERS,
        element: <ShareholderInfo />,
      },

      // Responsibility Routes
      {
        path: ROUTES.RESPONSIBILITY_SUSTAINABILITY,
        element: <Sustainability />,
      },
      {
        path: ROUTES.RESPONSIBILITY_ESG,
        element: <ESGInitiatives />,
      },
      {
        path: ROUTES.RESPONSIBILITY_COMMUNITY,
        element: <CommunityImpact />,
      },

      // Careers Routes
      {
        path: ROUTES.CAREERS_LIFE,
        element: <LifeAtCompany />,
      },
      {
        path: ROUTES.CAREERS_JOBS,
        element: <JobOpenings />,
      },
      {
        path: ROUTES.CAREERS_BENEFITS,
        element: <BenefitsPerks />,
      },

      // Newsroom Routes
      {
        path: ROUTES.NEWSROOM_PRESS,
        element: <PressReleases />,
      },
      {
        path: ROUTES.NEWSROOM_BLOG,
        element: <Blog />,
      },
      {
        path: ROUTES.NEWSROOM_EVENTS,
        element: <Events />,
      },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

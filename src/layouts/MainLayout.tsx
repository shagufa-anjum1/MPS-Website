import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { useScrollToTop } from '@hooks/useScrollToTop';

/**
 * Main Layout Component
 * Wraps all pages with Header and Footer
 */
const MainLayout: React.FC = () => {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

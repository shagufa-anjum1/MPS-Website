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
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer
        companyName="MPS Enterprise"
        companyDescription="A leading manufacturing and technology-driven organization delivering scalable solutions across industries."
        headquarterCity="New Delhi, India"
        address="Corporate Office, New Delhi, India"
        email="info@mbgenterprise.com"
        phone="+91 11 4567 8900"
      />
    </div>
  );
};

export default MainLayout;

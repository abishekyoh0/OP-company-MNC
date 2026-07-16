import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Loader from '../ui/Loader';
import ScrollToTop from '../ui/ScrollToTop';
import ChatBot from '../ui/ChatBot';

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-bg-base text-text-main flex flex-col selection:bg-secondary/20 selection:text-secondary overflow-x-hidden">
      {/* Premium preloader screen */}
      <Loader />

      {/* Persistent global header */}
      <Navbar />

      {/* Main page canvas */}
      <main className="grow flex flex-col pt-[65px] md:pt-[76px]">
        {children}
      </main>

      {/* Persistent global footer */}
      <Footer />

      {/* Floating scroll tracker */}
      <ScrollToTop />

      {/* Floating interactive assistant */}
      <ChatBot />
    </div>
  );
};

export default MainLayout;

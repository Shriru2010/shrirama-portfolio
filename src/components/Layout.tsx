import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButton from './FloatingActionButton';
import ParticleSystem from './ParticleSystem';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Track route changes
    window.gtag?.('event', 'page_view', {
      page_path: location.pathname,
      page_title: document.title
    });

    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="min-h-screen relative">
      <ParticleSystem />
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Layout;
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Auth from './pages/Auth';
import './App.css';

function App() {
  const [view, setView] = useState('home'); // 'home' or 'auth'

  useEffect(() => {
    const handleNavigate = (e) => {
      setView(e.detail);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('app-navigate', handleNavigate);
    return () => window.removeEventListener('app-navigate', handleNavigate);
  }, []);

  return (
    <ThemeProvider>
      {view === 'home' ? (
        <MainLayout>
          <Home />
        </MainLayout>
      ) : (
        <Auth />
      )}
    </ThemeProvider>
  );
}

export default App;

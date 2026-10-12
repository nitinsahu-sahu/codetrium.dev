import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Home } from 'lucide-react';

// Guaranteed scroll to top on route change
const RouteScrollReset: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Immediate instantaneous scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Redundant delayed scroll to handle dynamic DOM mount
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

// 404 Not Found Page
const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 pt-28 pb-16">
      <div className="text-center max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mx-auto text-3xl font-extrabold font-mono">
          404
        </div>
        <h1 className="text-3xl font-extrabold text-white font-heading">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          The requested system route does not exist or has been relocated.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-lg shadow-cyan-500/20"
        >
          <Home className="w-4 h-4" />
          <span>Return to Codetrium.Dev Home</span>
        </Link>
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <RouteScrollReset />
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300">
          {/* Global Sticky Navigation */}
          <Navbar />

          {/* Main View Area */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              {/* Product page removed as requested - redirect to services */}
              <Route path="/products" element={<Navigate to="/services" replace />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/work" element={<Navigate to="/portfolio" replace />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/team" element={<Navigate to="/about" replace />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/hire" element={<Navigate to="/contact" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Global Multi-Column Footer */}
          <Footer />

          {/* Floating Scroll to Top button with scroll progress */}
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

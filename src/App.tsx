import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import APIProductsView from './views/APIProductsView';
import IntermediatesView from './views/IntermediatesView';
import ProductDetailView from './views/ProductDetailView';
import APIDetailView from './views/APIDetailView';
import HumanAPIsView from './views/HumanAPIsView';
import HumanAPICategoryView from './views/HumanAPICategoryView';
import SolventsView from './views/SolventsView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [route, setRoute] = useState({
    view: 'home',
    params: {} as Record<string, string>
  });

  // Handle path-based route changes (History API)
  useEffect(() => {
    const parseLocation = () => {
      // format: /view?category=X&slug=Y
      const view = window.location.pathname.replace(/^\//, '').split('/')[0] || 'home';

      const params: Record<string, string> = {};
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.forEach((val, key) => {
        params[key] = val;
      });
      setRoute({ view, params });

      // Buttery smooth transition scroll back to top of document
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    };

    window.addEventListener('popstate', parseLocation);
    parseLocation(); // Initial call
    return () => window.removeEventListener('popstate', parseLocation);
  }, []);

  // Push a new path to execute routing
  const navigate = (view: string, searchParams?: Record<string, string>) => {
    let path = `/${view === 'home' ? '' : view}`;
    if (searchParams) {
      const urlParams = new URLSearchParams(searchParams);
      const query = urlParams.toString();
      if (query) path += `?${query}`;
    }
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  // Render correct view block
  const renderView = () => {
    switch (route.view) {
      case 'about':
        return <AboutView navigate={navigate} />;
      case 'contact':
        return <ContactView navigate={navigate} />;
      case 'apis':
        return <APIProductsView initialCategory={route.params.category} navigate={navigate} />;
      case 'intermediates':
        return <IntermediatesView navigate={navigate} />;
      case 'product-detail':
        return (
          <ProductDetailView 
            category={route.params.category || 'chemicals'} 
            slug={route.params.slug || 'acids-and-bases'} 
            navigate={navigate} 
          />
        );
      case 'api-detail':
        return (
          <APIDetailView
            slug={route.params.slug || 'alendronate-sodium'}
            navigate={navigate}
          />
        );
      case 'human-apis':
        return <HumanAPIsView navigate={navigate} />;
      case 'human-api-category':
        return (
          <HumanAPICategoryView
            categorySlug={route.params.category || 'steroids'}
            navigate={navigate}
          />
        );
      case 'solvents':
        return <SolventsView navigate={navigate} />;
      case 'home':
      default:
        return <HomeView navigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg antialiased selection:bg-primary/10 selection:text-primary">
      {/* Dynamic Header */}
      <Navbar currentPath={route.view} navigate={navigate} />

      {/* Main View Area with transition animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${route.view}-${JSON.stringify(route.params)}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Shared Footer block */}
      <Footer navigate={navigate} />
    </div>
  );
}

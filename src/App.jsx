import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LampPage from './pages/LampPage';
import FlowerPage from './pages/FlowerPage';
import Dashboard from './pages/dashboard';
import NavBar from './components/NavBar';

// AnimatePresence requires a non-static key to work properly with routes
// This component tracks location changes for route animations
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lamp" element={<LampPage />} />
        <Route path="/flower" element={<FlowerPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen pb-16 md:pb-0 md:pt-16">
        {/* Modern Navigation Bar */}
        <NavBar />
        
        {/* Animated Routes */}
        <main className="h-full">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import GenerateModel from './components/GenerateModel';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Page content controlled by routes */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/generate" element={<GenerateModel />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}


import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

export default function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar  />
        <LandingPage/>
      <Footer />
    </div>
  );
}
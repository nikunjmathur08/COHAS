import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramPage from './pages/ProgramPage';
import EventPage from './pages/EventPage';
import InvolvePage from './pages/InvolvePage';

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/involve" element={<InvolvePage />} />
      </Routes>
    </>
  );
}

export default App;

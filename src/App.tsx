import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramPage from './pages/ProgramPage';
import EventPage from './pages/EventPage';

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </>
  );
}

export default App;

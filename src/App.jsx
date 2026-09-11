import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import LearningStarsPage from './pages/LearningStarsPage';
import HowWeHelpPage from './pages/HowWeHelpPage';
import GlleryPage from './pages/GalleryPage';
import DonatePage from './pages/DonatePage';


export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="learning-stars" element={<LearningStarsPage />} />
            <Route path="how-we-help" element={<HowWeHelpPage />} />
            <Route path="gallery" element={<GlleryPage />} />
            <Route path="donation" element={<DonatePage />} />
            <Route path="donate" element={<DonatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}
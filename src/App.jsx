import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import LearningStars from './pages/LearningStars';


export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="learning-stars" element={<LearningStars />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}
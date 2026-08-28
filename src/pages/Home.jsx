import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import LearningStars from '../components/LearningStars';
import About from '../components/About';
import Impact from '../components/Impact';
import Support from '../components/Support';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import HowWeSupport from '../components/HowWeSupport';
import News from '../components/News';
import Newsletter from '../components/NewsLetter';
import Footer from '../components/Footer';
import ScrollNav from '../components/ScrollNav';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Kenya Thriving - Learning Stars | Educating Orphaned Children in Kenya</title>
        <meta
          name="description"
          content="Kenya Thriving's Learning Stars programme gives orphaned and vulnerable children in Kenya access to education. 100% of every donation reaches the children."
        />
      </Helmet>
      <ScrollNav />
      <Hero />
      <LearningStars />
      <About />
      <Impact />
      <Support />
      <Gallery />
      <Testimonials />
      <HowWeSupport />
      <News />
      <Newsletter />
      <Footer />
  
    </>
  );
}
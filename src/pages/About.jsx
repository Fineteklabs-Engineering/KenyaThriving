import { Helmet } from 'react-helmet-async';
import AboutHero from '../components/AboutHero';
import AboutStory from '../components/AboutStory';
import MissionVision from '../components/MissionVission';
import Team from '../components/Team';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Kenya Thriving</title>
        <meta
          name="description"
          content="Kenya Thriving is a UK charity educating orphaned and vulnerable children in Kenya through the Learning Stars programme."
        />
      </Helmet>
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <Team />
    </>
  );
}
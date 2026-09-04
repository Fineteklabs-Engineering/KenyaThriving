import { Helmet } from 'react-helmet-async';
import LearningStarsHero from '../components/LearningStarsHero';
import LearningStarsAbout from '../components/LearningStarsAbout';
import LearningStarsImpact from '../components/LearningStarsImpact';

export default function LearningStarsPage() {
  return (
    <>
      <Helmet>
        <title>Learning Stars | Kenya Thriving</title>
        <meta
          name="description"
          content="The Learning Stars Initiative gives orphaned and vulnerable children in Kenya access to quality education, care and mentorship."
        />
      </Helmet>
      <LearningStarsHero />
      <LearningStarsAbout />
      <LearningStarsImpact />
    </>
  );
}
import { Helmet } from 'react-helmet-async';
import LSHero from '../components/LsHero';

export default function LearningStars() {
  return (
    <>
      <Helmet>
        <title>Learning Stars | Kenya Thriving</title>
        <meta
          name="description"
          content="The Learning Stars Initiative gives orphaned and vulnerable children in Kenya access to quality education, care and mentorship."
        />
      </Helmet>
      <LSHero />
    </>
  );
}
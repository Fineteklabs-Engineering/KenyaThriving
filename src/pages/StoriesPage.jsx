import { Helmet } from 'react-helmet-async';
import StoriesHero from '../components/StoriesHero';

export default function StoriesPage() {
  return (
    <>
      <Helmet>
        <title>Inspiring Stories | Kenya Thriving</title>
        <meta
          name="description"
          content="Real stories of orphaned and vulnerable children in Kenya whose lives are being changed through education, care and community support."
        />
      </Helmet>
      <StoriesHero />
    </>
  );
}
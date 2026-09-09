import { Helmet } from 'react-helmet-async';
import HowWeHelpHero from '../components/HowWeHelpHero';
import Fundraiser from '../components/Fundraiser';
import HowWeHelpImpact from '../components/HowWeHelpImpact';

export default function HowWeHelpPage() {
  return (
    <>
      <Helmet>
        <title>How We Help | Kenya Thriving</title>
        <meta
          name="description"
          content="How Kenya Thriving turns your support into real change — education, care and mentorship for orphaned and vulnerable children in Kenya."
        />
      </Helmet>
      <HowWeHelpHero />
      <Fundraiser />
      <HowWeHelpImpact />
    </>
  );
}
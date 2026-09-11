import { Helmet } from 'react-helmet-async';
import DonateHero from '../components/Donatehero';

export default function DonatePage() {
  return (
    <>
      <Helmet>
        <title>Donate | Kenya Thriving</title>
        <meta
          name="description"
          content="Make a donation to Kenya Thriving and give orphaned and vulnerable children in Kenya the chance to learn and thrive. 100% of every gift reaches the children."
        />
      </Helmet>

      <DonateHero />
      {/* more donate sections can be added here later */}
    </>
  );
}
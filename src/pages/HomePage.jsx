import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { WaitlistForm } from '../components/WaitlistForm';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WaitlistForm />
      <Footer />
    </>
  );
};

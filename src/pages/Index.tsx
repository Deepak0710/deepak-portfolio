import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Gadamsetty Deepak | Portfolio</title>
        <meta name="description" content="Gadamsetty Deepak - Software Developer portfolio showcasing skills, experience, and projects." />
        <meta name="keywords" content="Gadamsetty Deepak, Software Developer, Portfolio, Web Development" />
        <meta property="og:title" content="Gadamsetty Deepak | Portfolio" />
        <meta property="og:description" content="Software Developer portfolio showcasing skills, experience, and projects." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

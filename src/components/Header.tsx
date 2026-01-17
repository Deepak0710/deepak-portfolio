import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/90 backdrop-blur-md py-4' : 'py-6'
      }`}
    >
      <div className="container max-w-5xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('hero')}
          className="font-heading text-xl tracking-wide text-foreground"
        >
          GD
        </button>
        
        <nav className="flex gap-8">
          {['About', 'Experience', 'Skills', 'Certifications', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="nav-link hidden sm:block"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

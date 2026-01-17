const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 opacity-0 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
          Welcome to my portfolio
        </p>
        
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-medium text-foreground mb-6 opacity-0 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>Gadamsetty Deepak</h1>

        <div className="flex justify-center mb-8 opacity-0 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
          <div className="accent-line" />
        </div>
        
        <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed mb-12 opacity-0 animate-fade-in" style={{
          animationDelay: '0.8s'
        }}>
          Data Engineer & QA Analyst | Datamart Testing Specialist
        </p>
        
        <div className="flex justify-center gap-6 opacity-0 animate-fade-in" style={{
          animationDelay: '1s'
        }}>
          <a href="https://www.linkedin.com/in/grv-deepak-b31a9a251/" target="_blank" rel="noopener noreferrer" className="nav-link hover:text-accent">
            LinkedIn
          </a>
          <span className="text-border">|</span>
          <a href="mailto:deepakgrv7@gmail.com" className="nav-link hover:text-accent">
            Email
          </a>
          <span className="text-border">|</span>
          <a href="https://github.com/Deepak0710" target="_blank" rel="noopener noreferrer" className="nav-link hover:text-accent">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
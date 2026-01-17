const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="container max-w-3xl mx-auto text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Contact
        </p>
        
        <h2 className="section-heading">
          Let's connect
        </h2>
        
        <p className="body-text text-lg max-w-xl mx-auto mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your visions. Feel free to reach out.
        </p>
        
        <a 
          href="mailto:deepakgrv7@gmail.com"
          className="inline-block font-heading text-2xl sm:text-3xl text-foreground hover:text-accent transition-colors duration-300"
        >
          deepakgrv7@gmail.com
        </a>
        
        <div className="flex justify-center gap-8 mt-12">
          <a 
            href="https://www.linkedin.com/in/grv-deepak-b31a9a251/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link hover:text-accent"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Deepak0710"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

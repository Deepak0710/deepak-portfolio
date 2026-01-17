const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container max-w-3xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Deepak Gadamsetty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

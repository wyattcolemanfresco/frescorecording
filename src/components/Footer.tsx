import frescoLogo from "@/assets/fresco-logo-main.png";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={frescoLogo} alt="Fresco Recording Services" className="h-12 w-auto" />
          <p className="text-muted-foreground font-body text-sm text-center">
            © {new Date().getFullYear()} Fresco Recording Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#home"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

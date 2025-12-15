import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex items-center justify-center min-h-[70vh] px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-primary animate-pulse" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Thank You!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Your message has been received. We'll get back to you within 24-48 hours 
            to discuss your project and schedule your session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-semibold">
              <Link to="/">Back to Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold">
              <Link to="/#services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;

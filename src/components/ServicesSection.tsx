import { Button } from "@/components/ui/button";
import studioMainImage from "@/assets/studio-main.jpg";
import studioEquipmentImage from "@/assets/studio-equipment.jpg";
import studioSessionImage from "@/assets/studio-session.jpg";

const services = [
  {
    title: "Music Recording",
    subtitle: "Professional Studio Sessions",
    description:
      "From demo recordings to full album production, our engineers bring your musical vision to life with industry-standard equipment and decades of experience.",
    image: studioMainImage,
    features: ["Multi-track Recording", "Mixing & Mastering", "Live Sessions", "Remote Recording"],
  },
  {
    title: "Voice Over",
    subtitle: "Crystal Clear Narration",
    description:
      "Our acoustically treated booth and high-end microphones capture every nuance of your voice for commercials, podcasts, e-learning, and more.",
    image: studioEquipmentImage,
    features: ["Commercial VO", "Podcast Production", "E-Learning", "IVR & Phone Systems"],
  },
  {
    title: "Film & ADR",
    subtitle: "Post-Production Excellence",
    description:
      "Automatic Dialogue Replacement and foley work for film and television. We sync your audio perfectly to picture with professional precision.",
    image: studioSessionImage,
    features: ["ADR Recording", "Foley Work", "Sound Design", "Audio Post-Production"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            OUR SERVICES
          </h2>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-primary font-body text-sm uppercase tracking-widest mb-2">
                  {service.subtitle}
                </p>
                <h3 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-foreground font-body"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="hero" asChild>
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

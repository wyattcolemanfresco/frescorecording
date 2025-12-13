import { Music, Mic, Film, Headphones } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Music Recording",
    description: "State of the art equipment for professional music production",
  },
  {
    icon: Mic,
    title: "Voice Over",
    description: "Crystal clear voice recording for commercials and narration",
  },
  {
    icon: Film,
    title: "ADR & Film",
    description: "Post-production audio for film and television projects",
  },
  {
    icon: Headphones,
    title: "Audio Books",
    description: "Professional narration recording for audiobook production",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-4">
            About Us
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            THE BEST SOUND
            <span className="text-gradient block">IN PENSACOLA</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg font-body leading-relaxed">
            Fresco Recording Services is a premier recording studio located in Pensacola, FL, 
            offering audio recording with state-of-the-art equipment and techniques heard on 
            the most influential programs and records. We specialize in Music, Voice Over, 
            Audio Books and ADR Recording, providing the quickest workflow, a relaxing 
            environment, and the best sound quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

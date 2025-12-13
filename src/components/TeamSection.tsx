const teamMembers = [
  {
    name: "Fabio Arauz",
    role: "Owner/Chief Engineer",
    initial: "FA",
  },
  {
    name: "Wyatt Coleman",
    role: "Producer/House Engineer",
    initial: "WC",
  },
  {
    name: "Kyle Septer",
    role: "House Engineer",
    initial: "KS",
  },
  {
    name: "Tiffany Isom",
    role: "House Engineer",
    initial: "TI",
  },
  {
    name: "Brandon Nguyen",
    role: "Producer",
    initial: "BN",
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-4">
            Meet the Crew
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            OUR TEAM
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="glass-card p-6 text-center hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                <span className="font-display text-3xl text-primary">
                  {member.initial}
                </span>
              </div>
              <h3 className="font-display text-xl text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

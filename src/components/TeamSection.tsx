import teamFabio from "@/assets/team-fabio.jpg";
import teamTiffany from "@/assets/team-tiffany.png";
import teamBrandon from "@/assets/team-brandon.jpg";
import teamWyatt from "@/assets/team-wyatt-new.jpg";

const teamMembers = [
  {
    name: "Fabio Arauz",
    role: "Owner/Chief Engineer",
    image: teamFabio,
  },
  {
    name: "Tiffany Isom",
    role: "House Engineer",
    image: teamTiffany,
  },
  {
    name: "Holly Whittemore",
    role: "Engineer",
    image: null,
  },
  {
    name: "Jeffrey Jadallah",
    role: "Engineer",
    image: null,
  },
  {
    name: "Brandon Nguyen",
    role: "Producer",
    image: teamBrandon,
  },
  {
    name: "Wyatt Coleman",
    role: "Marketing & Technology",
    image: teamWyatt,
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
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300 bg-secondary/50 flex items-center justify-center">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <span className="text-3xl text-muted-foreground font-display">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
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

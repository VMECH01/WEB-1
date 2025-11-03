import { GraduationCap, Lightbulb, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const founders = [
  {
    name: "Dr. Rashi Gupta",
    title: "Co-Founder",
    expertise: "Renewable Energy Research & Innovation",
  },
  {
    name: "Dr. Bharat Gupta",
    title: "Co-Founder",
    expertise: "Clean Energy Technology & Development",
  },
];

export const FoundersSection = () => {
  return (
    <section id="team" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold">
              Leadership &
              <span className="block text-primary mt-2">Vision</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet the visionary leaders driving innovation in clean energy transformation
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Founders Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {founders.map((founder, index) => (
              <Card
                key={founder.name}
                className="p-8 md:p-10 border-2 border-border/50 hover:border-primary/30 transition-all hover:shadow-2xl group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon/Avatar Placeholder */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-2">{founder.name}</h3>
                <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                  {founder.title}
                </div>
                <p className="text-muted-foreground leading-relaxed">{founder.expertise}</p>
              </Card>
            ))}
          </div>

          {/* Vision Statement */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Visionary Leadership</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dr. Rashi Gupta and Dr. Bharat Gupta are <span className="font-semibold text-foreground">renewable energy visionaries</span> who built Crescendo Innovations on a shared belief that innovation can be the driving force behind a cleaner planet. Their passion for combining science with impact has shaped our mission to create smarter, greener energy solutions.
                </p>
              </div>
            </div>
          </Card>

          {/* Team Values */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="p-6 text-center hover:shadow-xl transition-all group border-border/50 hover:border-primary/30">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Scientific Excellence</h4>
              <p className="text-sm text-muted-foreground">Rigorous research & development</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all group border-border/50 hover:border-primary/30">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Innovation First</h4>
              <p className="text-sm text-muted-foreground">Pushing boundaries of possibility</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all group border-border/50 hover:border-primary/30">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Global Impact</h4>
              <p className="text-sm text-muted-foreground">Empowering communities worldwide</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

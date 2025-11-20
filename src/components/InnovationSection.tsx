import { Atom, Battery, FlaskConical, Lightbulb, Recycle, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const technologies = [
  {
    icon: Atom,
    title: "Hydrogen Innovation",
    description: "High-energy-density fuel with diverse applications from grid-scale storage to industrial processes.",
    highlights: ["Electrolyzer Efficiency", "Fuel Cell Durability", "Safe Storage Solutions"],
  },
  {
    icon: Battery,
    title: "Lithium Battery Tech",
    description: "Advanced battery systems with enhanced energy density, rapid discharge, and modular scalability.",
    highlights: ["Solid-State Electrolytes", "Silicon Anode Integration", "Enhanced Lifecycle"],
  },
];

const capabilities = [
  { icon: FlaskConical, label: "Advanced R&D", color: "from-accent to-primary" },
  { icon: Lightbulb, label: "Innovative Solutions", color: "from-accent to-primary" },
  { icon: Zap, label: "High Performance", color: "from-accent to-primary" },
  { icon: Recycle, label: "Sustainable Practices", color: "from-accent to-primary" },
];

export const InnovationSection = () => {
  return (
    <section id="innovation" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold">
            Technology &
            <span className="block text-primary mt-2">Innovation</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our focus on hydrogen and lithium battery technologies is a deliberate strategic choice grounded in their unparalleled potential for driving the next wave of clean energy innovation.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Technology Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 stagger-15">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card
                key={tech.title}
                className="p-8 md:p-10 border-2 border-border/50 hover:border-primary/30 transition-all hover:shadow-2xl group animate-fade-in-up"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{tech.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-semibold text-primary uppercase tracking-wide">
                    Key Innovations
                  </div>
                  <div className="grid gap-3">
                    {tech.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Strategic Vision */}
  <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20 mb-12 animate-fade-in-up anim-delay-03">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Strategic Approach</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            By pioneering innovations at the intersection of hydrogen and lithium technologies, Crescendo Innovations addresses critical challenges in <span className="font-semibold text-foreground">energy storage capacity, system flexibility, and cost-efficiency</span>. This dual-technology approach allows us to serve diverse market needs while offering investors and policymakers scalable, future-ready solutions that align with global clean energy targets.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our R&D commitment and strategic industry collaborations ensure continuous technology improvement, de-risking investments and facilitating policy frameworks that incentivize adoption and infrastructure development.
          </p>
        </Card>

        {/* Capabilities Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in anim-delay-04">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card
                key={capability.label}
                className="p-6 text-center hover:shadow-xl transition-all group border-border/50 hover:border-primary/30"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${capability.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-sm font-semibold">{capability.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

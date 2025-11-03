import {
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Atom,
  Leaf,
  BarChart3,
  Zap,
  Sparkles,
  ShieldCheck
} from "lucide-react";

import { Card } from "@/components/ui/card";

const problems = [
  {
    challenge: "Energy Storage Variability",
    solution: "Efficient, reliable storage systems that balance renewable energy supply and demand for grid stability.",
  },
  {
    challenge: "Hydrogen Technical Hurdles",
    solution: "Advanced electrolyzer efficiency, enhanced fuel cell durability, and safe, cost-effective storage solutions.",
  },
  {
    challenge: "Lithium Battery Limitations",
    solution: "Improved energy density, longer lifecycle, faster charging capabilities, and safer battery chemistries.",
  },
  {
    challenge: "Commercial Adoption Barriers",
    solution: "Cost-effective solutions with seamless grid integration and regulatory compliance frameworks.",
  },
];

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold">
              What We're
              <span className="block text-primary mt-2">Solving</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crescendo Innovations is solving critical challenges in the energy sector related to the storage, efficiency, and scalability of renewable energy systems.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Problems & Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {problems.map((item, index) => (
              <Card
                key={item.challenge}
                className="p-8 border-2 border-border/50 hover:border-primary/30 transition-all hover:shadow-xl group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Atom className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.challenge}</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4 mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-1">{item.solution}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Impact Statement */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-card to-accent/5 border-2 border-primary/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Transformative Impact</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Crescendo Innovations develops <span className="font-semibold text-foreground">scientifically advanced hydrogen and lithium battery technologies</span> that improve energy storage capacity, efficiency, cost-effectiveness, and scalability.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This enables better renewable energy integration, grid resiliency, and supports the global transition to clean energy while reducing carbon emissions and dependence on fossil fuels. Our technology is adaptable and economically viable for large-scale industrial and community energy systems, bridging gaps between laboratory innovation and commercial deployment.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Scalable</div>
                <div className="text-sm text-muted-foreground">Enterprise-Ready Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Sustainable</div>
                <div className="text-sm text-muted-foreground">Environmentally Responsible</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Future-Ready</div>
                <div className="text-sm text-muted-foreground">Next-Gen Technology</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

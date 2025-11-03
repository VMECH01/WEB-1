import { Sparkles, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold">
              About
              <span className="block text-primary mt-2">Crescendo Innovations</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Vision Statement */}
            <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground">
                At Crescendo Innovations, we believe the future of energy must be <span className="font-semibold text-primary">bold, sustainable, and transformative</span>. With pioneering research in hydrogen and lithium energy technologies, we are reimagining how the world powers itself — cleanly, efficiently, and responsibly.
              </p>
            </div>

            {/* Founder Story */}
            <Card className="p-8 md:p-12 border-2 border-border/50 hover:border-primary/30 transition-all shadow-xl hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground pt-2">Our Story</h3>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Founded by renewable energy visionaries, <span className="font-semibold text-foreground">Dr. Rashi Gupta</span> and <span className="font-semibold text-foreground">Dr. Bharat Gupta</span>, Crescendo Innovations was built on a shared belief that innovation can be the driving force behind a cleaner planet. Their passion for combining science with impact has shaped our mission: to create smarter, greener energy solutions that empower people, industries, and communities everywhere.
              </p>
            </Card>

            {/* Mission Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 bg-gradient-to-br from-card to-primary/5 border border-primary/20 hover:shadow-xl transition-all group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">Our Focus</h4>
                <p className="text-muted-foreground leading-relaxed">
                  From advanced hydrogen applications to next-generation lithium battery technologies, we are not just building energy systems — we are building a sustainable future.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-card to-accent/5 border border-accent/20 hover:shadow-xl transition-all group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary-glow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">Our Commitment</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Every step we take is guided by a commitment to pushing boundaries, protecting the planet, and leaving behind a legacy of progress for generations to come.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

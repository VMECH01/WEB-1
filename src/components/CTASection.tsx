import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-12 md:p-16 text-center space-y-8 shadow-2xl hover:shadow-3xl transition-all">
            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
              Join Us in Shaping <br></br>
              <span className="mt-1 text-green-800 font-bold">
                The Energy Future
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Partner with Crescendo Innovations to accelerate the global transition to clean, sustainable energy. Let's create a legacy of progress together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="lg" className="group">
                <Mail className="w-5 h-5" />
                Contact Our Team
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="glassy" size="lg">
                <MessageSquare className="w-5 h-5" />
                Schedule Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 grid sm:grid-cols-3 gap-6 text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-col items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">Innovation-Driven</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">Scientifically Validated</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">Future-Ready Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

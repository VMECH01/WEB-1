import ButtonVariants from "@/components/ButtonVariants";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();

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

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up anim-delay-01">
              Partner with Crescendo Innovations to accelerate the global transition to clean, sustainable energy. Let's create a legacy of progress together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up anim-delay-02">
              <ButtonVariants
                variant="hero"
                size="lg"
                icon={Mail}
                iconPosition="left"
                onClick={() => navigate("/contact")}
              >
                Contact Our Team
               
              </ButtonVariants>
              <ButtonVariants
                variant="glassy"
                size="lg"
                icon={MessageSquare}
                onClick={() => navigate("/contact#consultation")}
              >
                Schedule Consultation
              </ButtonVariants>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 grid sm:grid-cols-3 gap-6 text-sm animate-fade-in anim-delay-03">
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

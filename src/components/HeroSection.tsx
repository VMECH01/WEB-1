import ButtonVariants from "@/components/ButtonVariants";
import VideoPortal from "@/components/VideoPortal";
import { ArrowRight, Leaf, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const HeroSection = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-0.4 hero-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-background/97 via-background/95 to-background/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float anim-delay-10" />
  <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-glow/5 rounded-full blur-3xl animate-float anim-delay-20" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 shadow-lg animate-fade-in">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Powering the Future with Sustainable Energy</span>
          </div>
 
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight animate-fade-in-up">
            Leading Innovation in <br></br>
            <span className="mt-1 text-green-800 font-semibold">
              Clean Energy Transformation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-black md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up anim-delay-02">
            Pioneering hydrogen and lithium battery technologies to reimagine how the world powers itself — cleanly, efficiently, and responsibly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up anim-delay-04">
            <ButtonVariants
              variant="hero"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => navigate("/features")}
            >
              Explore Our Technology
            </ButtonVariants>
            <ButtonVariants
              variant="glassy"
              size="lg"
              icon={Zap}
              onClick={() => setIsVideoOpen(true)}
            >
              Our Mission
            </ButtonVariants>
          </div>

          {/* Video Modal */}
          <VideoPortal
            isOpen={isVideoOpen}
            onClose={() => setIsVideoOpen(false)}
            videoSrc="/demo.mp4"
            title="Our Mission - Crescendo Innovations"
          />

          {/* Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 max-w-3xl mx-auto animate-fade-in anim-delay-06">
            <div className="p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all hover:shadow-lg group">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                Hydrogen
              </div>
              <div className="text-sm text-muted-foreground mt-2">Energy Storage Innovation</div>
            </div>
            <div className="p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-accent/30 transition-all hover:shadow-lg group">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                Lithium
              </div>
              <div className="text-sm text-muted-foreground mt-2">Battery Technology</div>
            </div>
            <div className="p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all hover:shadow-lg group">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                Future
              </div>
              <div className="text-sm text-muted-foreground mt-2">Sustainable Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

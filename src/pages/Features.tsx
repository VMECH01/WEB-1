"use client";

import ButtonVariants from "@/components/ButtonVariants";
import VideoPortal from "@/components/VideoPortal";
import { ArrowRight, Lightbulb, Zap, Shield, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import isometricUrl from "@/assets/iso4.jpg";

const Features = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const features = [
    {
      icon: Zap,
      title: "Hydrogen Technology",
      description: "Advanced hydrogen fuel cells for efficient, clean energy storage and generation with industry-leading efficiency rates.",
    },
    {
      icon: Lightbulb,
      title: "Lithium Innovation",
      description: "Next-generation lithium battery technology optimized for energy density, longevity, and sustainable sourcing.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Rigorous testing and validation protocols ensure all products meet the highest international safety standards.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Solutions designed to scale from small applications to grid-level energy storage for entire regions.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Cutting-Edge <span className="text-primary">Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the innovations that power the energy revolution.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 animate-fade-in-up">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <div className="inline-flex items-center text-primary font-semibold group-hover:gap-2 gap-1 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlight with Illustration */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-fade-in-up">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Why Choose Crescendo?</h3>
            <ul className="space-y-4">
              {[
                "Patent-pending hydrogen extraction methodology",
                "99.9% uptime reliability guarantee",
                "Carbon-negative manufacturing process",
                "Global supply chain with local support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <ButtonVariants
              variant="hero"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => navigate("/contact")}
            >
              Request a Demo
            </ButtonVariants>
          </div>
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              <img src={isometricUrl} alt="Technology illustration" className="w-full h-auto iso-float" />
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="text-center space-y-6 animate-fade-in">
          <h3 className="text-2xl font-bold">Ready to Transform Energy?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join leading organizations worldwide in adopting sustainable energy solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"> */}
            {/* <ButtonVariants
              variant="glassy"
              size="lg"
              onClick={() => navigate("/pricing")}
            > */}
              {/* View Pricing Plans
            </ButtonVariants> */}
            {/* <ButtonVariants
              variant="glassy"
              size="lg"
              icon={Zap}
              onClick={() => setIsVideoOpen(true)}
            > */}
              {/* Watch Demo
            </ButtonVariants> */}
          {/* </div>
        </div> */}

        {/* Video Player (portal) */}
        {/* <VideoPortal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoSrc="/demo.mp4"
          title="Crescendo Technology Demo"
        /> */}
      </div>
    </section>
  );
};

export default Features;

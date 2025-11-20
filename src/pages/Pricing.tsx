"use client";

import ButtonVariants from "@/components/ButtonVariants";
import VideoPortal from "@/components/VideoPortal";
import { Check, ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import isometricUrl from "@/assets/iso6.svg";

const Pricing = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "/month",
      description: "Perfect for small deployments and pilot projects",
      features: [
        "Up to 10 kW capacity",
        "Basic monitoring dashboard",
        "Email support",
        "Monthly maintenance",
        "Warranty coverage",
      ],
      cta: "Start Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for growing energy needs",
      features: [
        "Up to 100 kW capacity",
        "Advanced analytics dashboard",
        "24/7 phone + email support",
        "Weekly maintenance",
        "Extended warranty (3 years)",
        "Custom integration support",
        "Priority updates",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large-scale deployments",
      features: [
        "Unlimited capacity",
        "Dedicated account manager",
        "24/7 premium support",
        "Predictive maintenance",
        "Lifetime warranty",
        "Custom infrastructure",
        "On-site training",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that scales with your energy needs. All plans include our core technology.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-primary/50 shadow-2xl scale-105"
                  : "bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30"
              }`}
            >
              <div className="p-8">
                {plan.highlighted && (
                  <div className="absolute top-4 right-4 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                </div>

                <ButtonVariants
                  variant={plan.highlighted ? "hero" : "glassy"}
                  size="lg"
                  className="w-full justify-center mb-8"
                  onClick={() => navigate("/contact")}
                >
                  {plan.cta}
                </ButtonVariants>

                <ul className="space-y-4">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison with Illustration */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-fade-in">
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              <img src={isometricUrl} alt="Pricing comparison illustration" className="w-full h-auto iso-float" />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">What's Included in Every Plan</h3>
            <ul className="space-y-3">
              {[
                "Access to our proprietary hydrogen & lithium technology",
                "Real-time energy monitoring and reporting",
                "Automated system optimization",
                "Quarterly performance reviews",
                "Free software updates forever",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ / CTA */}
        <div className="text-center space-y-6 animate-fade-in">
          <h3 className="text-2xl font-bold">Have Questions?</h3>
          <p className="text-muted-foreground">
            Our team is ready to customize a solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ButtonVariants
              variant="hero"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => navigate("/contact")}
            >
              Schedule a Consultation
            </ButtonVariants>
            <ButtonVariants
              variant="glassy"
              size="lg"
              icon={Zap}
              onClick={() => setIsVideoOpen(true)}
            >
              Watch Pricing Demo
            </ButtonVariants>
          </div>
        </div>

        {/* Video Player (portal) */}
        <VideoPortal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoSrc="/demo.mp4"
          title="Pricing & Plans Overview"
        />
      </div>
    </section>
  );
};

export default Pricing;

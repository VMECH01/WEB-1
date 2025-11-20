"use client";

import ButtonVariants from "@/components/ButtonVariants";
import VideoPortal from "@/components/VideoPortal";
import { ArrowRight, Plug, Zap, Cloud, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import isometricUrl from "@/assets/isometric.svg";

const Integrations = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const integrations = [
    {
      name: "Smart Grid Systems",
      icon: Zap,
      description: "Seamless integration with modern smart grid infrastructure for real-time load balancing.",
      available: true,
    },
    {
      name: "IoT Monitoring",
      icon: Smartphone,
      description: "Connect IoT devices to track energy consumption and optimize usage patterns in real-time.",
      available: true,
    },
    {
      name: "Cloud Analytics",
      icon: Cloud,
      description: "Advanced analytics powered by cloud infrastructure for predictive maintenance and insights.",
      available: true,
    },
    {
      name: "API Access",
      icon: Plug,
      description: "Full REST API for custom integrations with your existing enterprise systems.",
      available: true,
    },
    {
      name: "Third-Party Connectors",
      icon: Zap,
      description: "Pre-built connectors for leading energy management and ERP platforms.",
      available: false,
    },
    {
      name: "Custom Solutions",
      icon: Plug,
      description: "White-label and custom integration solutions tailored to your requirements.",
      available: false,
    },
  ];

  const partners = [
    { name: "Energy Grid Corp", type: "Smart Grid Partner" },
    { name: "CloudTech Solutions", type: "Cloud Infrastructure" },
    { name: "IoT Dynamics", type: "IoT Platform" },
    { name: "DataFlow Analytics", type: "Data & Analytics" },
    { name: "GreenTech Alliance", type: "Sustainability Partner" },
    { name: "FuturePower Systems", type: "Enterprise Solutions" },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ecosystem <span className="text-primary">Integrations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crescendo works seamlessly with your existing tools and platforms.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Integration Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 animate-fade-in-up">
          {integrations.map((integration, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border transition-all duration-300 ${
                integration.available
                  ? "bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-lg"
                  : "bg-muted/30 border-border/30 opacity-60"
              }`}
            >
              <div className="flex items-start gap-4">
                <integration.icon className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold">{integration.name}</h3>
                    {!integration.available && (
                      <span className="px-2 py-1 text-xs bg-accent/30 text-accent rounded">Coming Soon</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features with Illustration */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-fade-in">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Enterprise-Grade Integration</h3>
            <ul className="space-y-4">
              {[
                "RESTful APIs with comprehensive documentation",
                "Webhooks for event-driven automation",
                "OAuth 2.0 for secure authentication",
                "Real-time data synchronization",
                "Scalable architecture for enterprise deployments",
                "24/7 technical support for integrations",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>{item}</span>
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
              View API Documentation
            </ButtonVariants>
          </div>
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              <img src={isometricUrl} alt="Integration illustration" className="w-full h-auto iso-float" />
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-12">Trusted by Industry Leaders</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all text-center group cursor-pointer"
              >
                <h4 className="font-bold group-hover:text-primary transition-colors">{partner.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Developer CTA */}
        <div className="text-center space-y-6 animate-fade-in bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-12">
          <Plug className="w-12 h-12 text-primary mx-auto" />
          <h3 className="text-2xl font-bold">Ready to Integrate?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our development team is ready to help you build custom integrations or connect with existing platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonVariants variant="hero" size="lg" onClick={() => navigate("/contact")}>
              Contact Sales
            </ButtonVariants>
            <ButtonVariants variant="glassy" size="lg" icon={Zap} onClick={() => setIsVideoOpen(true)}>
              Watch Integration Guide
            </ButtonVariants>
          </div>
        </div>

        {/* Video Player (portal) */}
        <VideoPortal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoSrc="/demo.mp4"
          title="Integration Guide & API Overview"
        />
      </div>
    </section>
  );
};

export default Integrations;

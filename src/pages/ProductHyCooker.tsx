// ProductHyCooker.tsx
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Leaf, Zap, Flame, Shield, Clock, Globe, Battery, Users, Trees, Heart, Target, CheckCircle, Play, Pause, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import ButtonVariants from "@/components/ButtonVariants";
import hycookerMain from "@/assets/img3.png";
import hycookerIso from "@/assets/img2.png";

export const ProductHyCooker = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotation, setRotation] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const features = [
    {
      icon: Flame,
      title: "Zero-Carbon Cooking",
      description: "Pure hydrogen combustion produces only water vapor as byproduct",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "67% Faster Cooking",
      description: "Instant heat generation reduces cooking time significantly",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Smart Safety System",
      description: "Auto-shutdown, leak detection, and child lock features",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Climate Adaptive",
      description: "Optimized performance across diverse environmental conditions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Battery,
      title: "Energy Efficient",
      description: "85% more efficient than traditional cooking methods",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: Leaf,
      title: "Zero Deforestation",
      description: "Eliminates need for wood and charcoal completely",
      color: "from-lime-500 to-green-500"
    }
  ];

  const impactData = [
    { icon: Trees, value: "100%", label: "Reduction in Wood Usage", description: "Complete elimination of deforestation for cooking" },
    { icon: Heart, value: "89%", label: "Health Improvement", description: "Reduction in respiratory diseases from smoke" },
    { icon: Users, value: "5-7", label: "Hours Saved Weekly", description: "Time gained from wood collection and cooking" },
    { icon: Target, value: "Zero", label: "Carbon Emissions", description: "Pure water vapor as the only byproduct" }
  ];

  const demonstrationSteps = [
    { title: "Hydrogen Activation", description: "Safe hydrogen fuel cell ignition" },
    { title: "Instant Heat Generation", description: "0-300°C in under 10 seconds" },
    { title: "Precise Temperature Control", description: "Digital accuracy within ±2°C" },
    { title: "Automatic Safety Monitoring", description: "Continuous system health checks" }
  ];

  const technicalSpecs = [
    { category: "Performance", specs: ["0-300°C in 8s", "85% efficiency", "Digital temperature control"] },
    { category: "Safety", specs: ["Auto-shutdown", "Leak detection", "Overheat protection", "Child lock"] },
    { category: "Environmental", specs: ["Zero CO2 emissions", "No particulate matter", "Water vapor only"] },
    { category: "Design", specs: ["304 Stainless steel", "IP54 rating", "2.5kg weight", "Compact footprint"] }
  ];

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const rotateProduct = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Product Showcase */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        
        <div className="container relative z-10 px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Interactive Product Display */}
            <div className="flex justify-center">
              <div className="relative group">
                <div 
                  className="relative transform-gpu transition-all duration-700 ease-out"
                  style={{ transform: `rotateY(${rotation}deg)` }}
                >
                  <img
                    src={hycookerMain}
                    alt="HyCooker - Revolutionary Hydrogen Cooking Device"
                    className="w-full max-w-lg h-auto "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                </div>
                
                {/* Interactive Controls */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={rotateProduct}
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
                  >
                    <RotateCcw className="w-5 h-5 text-slate-700" />
                  </button>
                  <button
                    onClick={handleVideoToggle}
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 text-slate-700" /> : <Play className="w-5 h-5 text-slate-700" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-green-700">Available Now</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
                HyCooker
                <span className="block text-2xl md:text-3xl text-slate-600 mt-6 font-normal tracking-normal">
                  The future of clean cooking is here.
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Experience revolutionary hydrogen-powered cooking that's faster, safer, and completely emission-free. 
                Join the movement towards sustainable living without compromising performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <ButtonVariants
                  variant="hero"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  Order Now
                </ButtonVariants>
                <ButtonVariants
                  variant="outline"
                  size="lg"
                >
                  Watch Demo
                </ButtonVariants>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">0%</div>
                  <div className="text-sm text-slate-600">Emissions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">67%</div>
                  <div className="text-sm text-slate-600">Faster</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-600">Safe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Visualization */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Transformative
              <span className="block text-green-600 mt-2">Impact</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Measurable benefits for health, environment, and communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactData.map((item, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-0 group hover:scale-105">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-10 h-10 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{item.value}</div>
                <div className="text-lg font-semibold text-slate-800 mb-3">{item.label}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Grid */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Intelligent
              <span className="block text-green-600 mt-2">Features</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <Card className={`p-8 transition-all duration-500 border-2 ${
                  activeFeature === index 
                    ? 'border-green-300 shadow-2xl scale-105' 
                    : 'border-slate-200 hover:border-green-200'
                }`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  
                  {activeFeature === index && (
                    <div className="absolute bottom-6 left-8">
                      <CheckCircle className="w-6 h-6 text-green-500 animate-pulse" />
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Demonstration */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                How It
                <span className="block text-green-600 mt-2">Works</span>
              </h2>
              
              <div className="space-y-6">
                {demonstrationSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <div className="w-3 h-3 rounded-full bg-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl flex items-center justify-center p-12">
                <img
                  src={hycookerIso}
                  alt="HyCooker Technology"
                  className="w-full h-auto max-w-sm transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-2xl flex items-center justify-center transform rotate-12">
                <Flame className="w-8 h-8 text-green-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center transform -rotate-12">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Technical
              <span className="block text-green-400 mt-2">Excellence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="text-center group">
                <h3 className="text-xl font-semibold text-green-400 mb-6">{spec.category}</h3>
                <div className="space-y-3">
                  {spec.specs.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all group-hover:scale-105 duration-300"
                    >
                      <div className="text-sm text-slate-300">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Ready to Cook
            <span className="block mt-2">with the Future?</span>
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of families already experiencing cleaner, faster, and safer cooking with HyCooker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ButtonVariants
              variant="hero"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="bg-white text-green-700 hover:bg-slate-100 border-0"
            >
              Order HyCooker Now
            </ButtonVariants>
            <ButtonVariants
              variant="glassy"
              size="lg"
              className="bg-white/10 text-white hover:bg-white/20 border-white/20"
            >
              Download Brochure
            </ButtonVariants>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 text-sm text-green-200 max-w-2xl mx-auto">
            <div>✓ Free Shipping</div>
            <div>✓ 2-Year Warranty</div>
            <div>✓ Installation Support</div>
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <video
        ref={videoRef}
        className="hidden"
        controls
        poster="/img1.png"
      >
        <source src="/assets/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ProductHyCooker;
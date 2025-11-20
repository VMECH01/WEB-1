"use client";

import ButtonVariants from "@/components/ButtonVariants";
import VideoPortal from "@/components/VideoPortal";
import { Calendar, User, ArrowRight, BookOpen, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import isometricUrl from "@/assets/isometric.svg";

const Blog = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const posts = [
    {
      title: "The Future of Hydrogen Energy: What You Need to Know",
      excerpt:
        "Explore the transformative potential of hydrogen as the world's primary energy source and its role in combating climate change.",
      author: "Dr. Sarah Chen",
      date: "Nov 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: isometricUrl,
    },
    {
      title: "Lithium Battery Breakthroughs: Higher Capacity, Lower Cost",
      excerpt:
        "Recent innovations in lithium extraction and refinement are making batteries more affordable and environmentally sustainable than ever.",
      author: "James Mitchell",
      date: "Nov 12, 2024",
      readTime: "7 min read",
      category: "Innovation",
      image: isometricUrl,
    },
    {
      title: "Case Study: How Corporation X Reduced Carbon by 60% with Crescendo",
      excerpt:
        "Discover how a Fortune 500 company transformed its energy strategy and achieved unprecedented sustainability goals.",
      author: "Emily Rodriguez",
      date: "Nov 10, 2024",
      readTime: "6 min read",
      category: "Case Studies",
      image: isometricUrl,
    },
    {
      title: "The Economics of Clean Energy: ROI in 2024 and Beyond",
      excerpt:
        "A detailed breakdown of the financial returns and long-term benefits of investing in renewable energy solutions.",
      author: "David Park",
      date: "Nov 8, 2024",
      readTime: "8 min read",
      category: "Economics",
      image: isometricUrl,
    },
    {
      title: "Grid-Scale Energy Storage: The Missing Piece in the Renewable Puzzle",
      excerpt:
        "How Crescendo's technology enables consistent, reliable power from intermittent renewable sources.",
      author: "Dr. Sarah Chen",
      date: "Nov 5, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: isometricUrl,
    },
    {
      title: "Building a Sustainable Future: Policy, Innovation, and Action",
      excerpt:
        "A comprehensive look at how governments, businesses, and individuals can collaborate to achieve net-zero goals.",
      author: "Alex Thompson",
      date: "Nov 1, 2024",
      readTime: "9 min read",
      category: "Sustainability",
      image: isometricUrl,
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Energy <span className="text-primary">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Latest articles, research, and insights on the future of clean energy.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Featured Post */}
        <div className="mb-16 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all">
            <div className="h-full min-h-96">
              <img src={isometricUrl} alt="Featured post" className="w-full h-full object-cover iso-float" />
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">Featured</span>
                <span className="text-sm text-muted-foreground">{posts[0].date}</span>
              </div>
              <h3 className="text-3xl font-bold leading-tight">{posts[0].title}</h3>
              <p className="text-muted-foreground text-lg">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                <span>{posts[0].author}</span>
                <span>•</span>
                <span>{posts[0].readTime}</span>
              </div>
              <ButtonVariants
                variant="hero"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Read Article
              </ButtonVariants>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in">
          {posts.slice(1).map((post, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="h-40 overflow-hidden bg-muted">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 space-y-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t border-border/30">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="text-center space-y-6 animate-fade-in bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-12">
          <BookOpen className="w-12 h-12 text-primary mx-auto" />
          <h3 className="text-2xl font-bold">Stay Updated</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly insights on clean energy innovation and sustainability trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <ButtonVariants variant="hero" size="lg">
              Subscribe
            </ButtonVariants>
          </div>
          <div className="border-t border-border/30 pt-6">
            <p className="text-sm text-muted-foreground mb-4">Watch our latest insights</p>
            <ButtonVariants
              variant="glassy"
              size="lg"
              icon={Zap}
              onClick={() => setIsVideoOpen(true)}
            >
              Watch Energy Insights
            </ButtonVariants>
          </div>
        </div>

        {/* Video Player (portal) */}
        <VideoPortal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoSrc="/demo.mp4"
          title="Latest Energy Insights"
        />
      </div>
    </section>
  );
};

export default Blog;

"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple frontend validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    // Simulate sending delay
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");

      // Reset form
      setFormData({ name: "", email: "", message: "" });

      // Reset status after a delay
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }, 1500);
  };

  return (
    <>
    <Header />
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold">
            Get In
            <span className="block text-primary mt-2">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <Card className="p-8 md:p-12 border-2 border-border/50 shadow-md animate-fade-in-up mb-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or inquiry..."
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <Loader2 className="animate-spin mr-2" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" /> Send Message
                  </>
                )}
              </Button>

              {status === "sent" && (
                <div className="flex items-center text-green-600 text-sm gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Message sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center text-red-500 text-sm gap-1">
                  <XCircle className="w-4 h-4" />
                  Please fill out all fields.
                </div>
              )}
            </div>
          </form>
        </Card>
      </div>
    </section>
  </>
  );
};

export default Contact;

import logo from "@/assets/logo.png";
import { Leaf, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Crescendo Innovations" className="h-12 w-12 rounded" />
              <div>
                <div className="text-lg font-bold tracking-tight text-foreground">CRESCENDO</div>
                <div className="text-1xl font-bold text-muted-foreground -mt-1">INNOVATIONS</div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Leading innovation in clean energy transformation through pioneering hydrogen and lithium battery technologies.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <Leaf className="w-4 h-4" />
              <span className="font-medium">Sustainable • Innovative • Future-Ready</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#innovation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Innovation
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Founders
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>crescendoinnovations[at]gmail[dot]com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                  Thane, Maharashtra
                </p></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© 2025 Crescendo Innovations. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

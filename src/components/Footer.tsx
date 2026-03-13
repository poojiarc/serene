import { Link } from "react-router-dom";
import { Home, Info, Package, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home", icon: Home },
                { to: "/about", label: "About Us", icon: Info },
                { to: "/products", label: "Products", icon: Package },
                { to: "/contact", label: "Contact Us", icon: Mail },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    <item.icon size={14} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact Details</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <a href="tel:+917893084227" className="hover:text-primary transition-colors">
                  +91 7893084227
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <a
                  href="mailto:serenedermapharmaceutical@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  serenedermapharmaceutical@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <span>LVS Heights, Bidrahalli, Bangalore – 560049</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Our Location</h3>
            <div className="rounded-lg overflow-hidden h-40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d77.7!3d13.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBidrahalli%2C+Bangalore!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Serene Derma Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 mb-2">
            <img src="/images/logo.jpg" alt="Serene Derma logo" className="h-8 w-auto brightness-200" />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-sm font-bold text-secondary-foreground">Serene</span>
              <span className="font-heading text-[10px] font-semibold text-secondary-foreground/70 tracking-wider">DERMA</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 text-sm text-secondary-foreground/80">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-400 hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Serene Derma Pharmaceuticals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Package, Mail, Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About Us", icon: Info },
  { to: "/products", label: "Products", icon: Package },
  { to: "/contact", label: "Contact Us", icon: Mail },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.jpg" alt="Serene Derma logo" className="h-10 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-bold text-primary">Serene Derma Pharmaceutical</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${pathname === item.to ? "active" : ""}`}
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-secondary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border animate-slide-up">
          <div className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`nav-link py-2 ${pathname === item.to ? "active" : ""}`}
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

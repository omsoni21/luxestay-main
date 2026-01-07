import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-accent/10 card-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary font-serif font-bold text-lg">L</span>
            </div>
            <span className="font-serif text-xl font-bold text-primary hidden sm:inline">
              LuxeStay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground hover-gold font-medium text-sm"
            >
              Home
            </Link>
            <Link
              to="/rooms"
              className="text-foreground hover-gold font-medium text-sm"
            >
              Rooms
            </Link>
            <Link
              to="/about"
              className="text-foreground hover-gold font-medium text-sm"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover-gold font-medium text-sm"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/guest/login"
              className="text-foreground hover-gold font-medium text-sm transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/guest/signup"
              className="btn-gold px-6 py-2 rounded-lg font-medium text-sm"
            >
              Sign Up
            </Link>
            <Link
              to="/admin/login"
              className="text-secondary hover-gold font-medium text-xs transition-colors ml-2"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 space-y-4 border-t border-accent/10 pt-4">
            <Link
              to="/"
              className="block text-foreground hover-gold font-medium text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/rooms"
              className="block text-foreground hover-gold font-medium text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rooms
            </Link>
            <Link
              to="/about"
              className="block text-foreground hover-gold font-medium text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-foreground hover-gold font-medium text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-accent/10 space-y-3">
              <Link
                to="/guest/login"
                className="block text-foreground hover-gold font-medium text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/guest/signup"
                className="block btn-gold px-4 py-2 rounded-lg font-medium text-sm text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                to="/admin/login"
                className="block text-center text-secondary hover-gold font-medium text-xs"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin Portal
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

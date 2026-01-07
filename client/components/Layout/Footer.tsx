import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-lg">L</span>
              </div>
              <span className="font-serif text-xl font-bold">LuxeStay</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Experience luxury hotel booking and management with elegance and sophistication.
            </p>
          </div>

          {/* Guest Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Guest Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/rooms"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Browse Rooms
                </Link>
              </li>
              <li>
                <Link
                  to="/guest/login"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  My Bookings
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Admin Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Management</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/admin/login"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/login"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Room Management
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/login"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Booking Control
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/login"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">info@luxestay.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  123 Luxury Avenue<br />
                  Premium City, PC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social and Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              © 2024 LuxeStay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=2000&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="text-9xl font-serif font-bold text-accent opacity-80 mb-4">
            404
          </div>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-md mx-auto">
          The luxury experience you're looking for seems to have checked out. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-accent text-primary hover:bg-accent/90 px-8 py-4 rounded-lg font-medium text-lg transition-all"
        >
          ← Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

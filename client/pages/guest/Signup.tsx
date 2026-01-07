import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Chrome, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { authService } from "@/utils/auth";

export default function GuestSignup() {
  const navigate = useNavigate();
  // Redirect to dashboard if already logged in (run after render)
  useEffect(() => {
    const current = authService.getCurrentUser();
    if (current) {
      navigate("/guest/dashboard");
    }
  }, [navigate]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validation
    if (!formData.name.trim()) {
      setError("Name is required");
      setLoading(false);
      return;
    }

    if (!formData.email.trim()) {
      setError("Email is required");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (!agreeToTerms) {
      setError("You must agree to the terms and conditions");
      setLoading(false);
      return;
    }

    try {
      // Sign up user (no auto-login)
      const created = authService.signup(
        formData.name,
        formData.email,
        formData.password,
      );

      // Redirect to login with success message and prefilled email
      navigate(
        `/guest/login?signup=success&email=${encodeURIComponent(
          created.email,
        )}`,
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary flex items-center justify-center px-4">
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

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary font-serif font-bold text-xl">
                L
              </span>
            </div>
            <span className="font-serif text-2xl font-bold text-primary-foreground">
              LuxeStay
            </span>
          </Link>
          <h1 className="font-serif text-3xl font-bold text-primary-foreground mb-2">
            Join LuxeStay
          </h1>
          <p className="text-primary-foreground/70">
            Create your luxury hotel account
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 card-shadow">
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="w-4 h-4 rounded border-border cursor-pointer mt-1"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-foreground">
                I agree to the{" "}
                <Link to="/" className="text-accent hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/" className="text-accent hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-gold py-3 rounded-lg font-medium text-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              <Check className="w-5 h-5" />
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-muted-foreground">Or</span>
            </div>
          </div>

          {/* Social Signup */}
          <button
            type="button"
            className="w-full border border-border py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-muted transition-colors"
          >
            <Chrome className="w-5 h-5" />
            Sign up with Google
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link
              to="/guest/login"
              className="text-accent hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

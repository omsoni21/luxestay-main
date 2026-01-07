import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, Chrome } from "lucide-react";
import { useState, useEffect } from "react";
import { authService } from "@/utils/auth";

export default function GuestLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const signupSuccess = params.get("signup") === "success";
  const prefillEmail = params.get("email") || "";

  // Redirect to dashboard if already logged in
  useEffect(() => {
    const current = authService.getCurrentUser();
    if (current) {
      navigate("/guest/dashboard");
    }
  }, [navigate]);
  const [email, setEmail] = useState(prefillEmail);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage] = useState(
    signupSuccess ? "Account created successfully. Please sign in." : "",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Attempt login
      authService.login(email, password);
      // Redirect to dashboard on successful login
      navigate("/guest/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
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
            Welcome Back
          </h1>
          <p className="text-primary-foreground/70">
            Sign in to your luxury hotel account
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 card-shadow">
          {successMessage && (
            <div className="mb-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm">
              {successMessage}
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-foreground">
                  Password
                </label>
                <a href="#" className="text-accent text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded border-border cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-foreground"
              >
                Remember me
              </label>
            </div>

            {/* Demo Credentials Info */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-3 text-xs text-muted-foreground">
              <p className="font-medium text-foreground mb-1">
                Demo Credentials:
              </p>
              <p>Email: user@example.com</p>
              <p>Password: password123</p>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-gold py-3 rounded-lg font-medium text-lg transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Sign In"}
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

          {/* Social Login */}
          <button
            type="button"
            className="w-full border border-border py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-muted transition-colors"
          >
            <Chrome className="w-5 h-5" />
            Continue with Google
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link
              to="/guest/signup"
              className="text-accent hover:underline font-medium"
            >
              Sign up
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

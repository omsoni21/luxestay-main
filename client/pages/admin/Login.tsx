import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Shield } from "lucide-react";
import { useState } from "react";
import { authService } from "@/utils/auth";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Attempt login with role validation
      authService.login(email, password, role);
      // Redirect to admin dashboard on successful login
      navigate("/admin/dashboard");
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
            Admin Portal
          </h1>
          <p className="text-primary-foreground/70">
            Hotel management & administration
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 card-shadow">
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Role Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-3">
              Login Role
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["admin", "manager", "staff"].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`py-2 px-3 rounded-lg border transition-all text-sm font-medium capitalize ${
                    role === r
                      ? "bg-accent text-primary border-accent"
                      : "border-border text-foreground hover:border-accent"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

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
                  placeholder="admin@luxestay.com"
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
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
              <p className="font-medium text-foreground mb-2">
                Demo Admin Credentials:
              </p>
              <div className="space-y-1">
                <div>
                  <p className="font-medium">Admin:</p>
                  <p>Email: admin@luxestay.com | Password: admin123</p>
                </div>
                <div>
                  <p className="font-medium">Manager:</p>
                  <p>Email: manager@luxestay.com | Password: manager123</p>
                </div>
                <div>
                  <p className="font-medium">Staff:</p>
                  <p>Email: staff@luxestay.com | Password: staff123</p>
                </div>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-gold py-3 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Shield className="w-5 h-5" />
              {loading
                ? "Signing In..."
                : `Sign In as ${role === "admin" ? "Admin" : role === "manager" ? "Manager" : "Staff"}`}
            </button>
          </form>

          {/* Info */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-800">
              <strong>Demo Mode:</strong> This is a demo application. Login with
              the provided credentials to test the admin dashboard features.
            </p>
          </div>
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

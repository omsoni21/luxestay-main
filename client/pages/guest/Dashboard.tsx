import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import {
  User,
  Calendar,
  Download,
  LogOut,
  Edit2,
  Clock,
  CheckCircle,
} from "lucide-react";
import { authService } from "@/utils/auth";

export default function GuestDashboard() {
  const navigate = useNavigate();
  const currentUser = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate("/");
  };

  // Redirect if not authenticated
  if (!currentUser) {
    navigate("/guest/login");
    return null;
  }

  const bookings = [
    {
      id: 1,
      roomName: "Royal Deluxe Suite",
      checkIn: "Dec 20, 2024",
      checkOut: "Dec 22, 2024",
      status: "confirmed",
      total: 628,
    },
    {
      id: 2,
      roomName: "Presidential Gold Suite",
      checkIn: "Jan 10, 2025",
      checkOut: "Jan 15, 2025",
      status: "pending",
      total: 3295,
    },
    {
      id: 3,
      roomName: "Ivory Luxury Penthouse",
      checkIn: "Nov 15, 2024",
      checkOut: "Nov 17, 2024",
      status: "completed",
      total: 928,
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      confirmed: "bg-green-100 text-green-700 border-green-200",
      pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
      completed: "bg-blue-100 text-blue-700 border-blue-200",
    };
    return styles[status as keyof typeof styles] || styles.confirmed;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex justify-between items-start">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
              My Dashboard
            </h1>
            <p className="text-muted-foreground">
              Welcome back, {currentUser?.name}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <div className="bg-white rounded-xl p-6 card-shadow mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl mb-4">
                {currentUser?.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                {currentUser?.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {currentUser?.email}
              </p>

              <div className="space-y-2">
                <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors text-sm font-medium border border-border">
                  <User className="w-4 h-4" />
                  Edit Profile
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors text-sm font-medium border border-border">
                  <Edit2 className="w-4 h-4" />
                  Account Settings
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Total Bookings
                  </p>
                  <p className="font-serif text-3xl font-bold text-accent">3</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Nights Stayed
                  </p>
                  <p className="font-serif text-3xl font-bold text-accent">9</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Total Spent
                  </p>
                  <p className="font-serif text-2xl font-bold text-accent">
                    $4,851
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* My Bookings */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  My Bookings
                </h2>
                <Link
                  to="/rooms"
                  className="btn-gold px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Book a Room
                </Link>
              </div>

              {bookings.length > 0 ? (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Room
                          </p>
                          <p className="font-medium text-foreground">
                            {booking.roomName}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Check-in
                          </p>
                          <p className="font-medium text-foreground">
                            {booking.checkIn}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Check-out
                          </p>
                          <p className="font-medium text-foreground">
                            {booking.checkOut}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground mb-1">
                            Total
                          </p>
                          <p className="font-serif text-xl font-bold text-accent">
                            ${booking.total}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-border pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <div
                            className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getStatusBadge(
                              booking.status,
                            )}`}
                          >
                            {getStatusIcon(booking.status)}
                            <span className="text-sm font-medium capitalize">
                              {booking.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                          <button className="flex-1 sm:flex-none flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors text-sm font-medium">
                            <Download className="w-4 h-4" />
                            Invoice
                          </button>
                          <button className="flex-1 sm:flex-none flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors text-sm font-medium">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl">
                  <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    No Bookings Yet
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Start your luxury journey by booking a room
                  </p>
                  <Link
                    to="/rooms"
                    className="btn-gold px-6 py-2 rounded-lg font-medium inline-block"
                  >
                    Browse Rooms
                  </Link>
                </div>
              )}
            </div>

            {/* Account Information */}
            <div className="bg-white rounded-xl p-6 sm:p-8 card-shadow">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Account Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <p className="text-foreground font-medium">
                    {currentUser?.name}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <p className="text-foreground font-medium">
                    {currentUser?.email}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Phone
                  </label>
                  <p className="text-foreground font-medium">
                    +1 (555) 123-4567
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Member Since
                  </label>
                  <p className="text-foreground font-medium">Jan 15, 2024</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <button className="px-6 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors font-medium">
                  Edit Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

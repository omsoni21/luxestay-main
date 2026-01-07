import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Link, useNavigate } from "react-router-dom";
import { Home, Users, Calendar, TrendingUp, LogOut } from "lucide-react";
import { authService } from "@/utils/auth";

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground border-b border-primary-foreground/10 card-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-primary font-serif font-bold text-lg">L</span>
          </div>
          <span className="font-serif text-xl font-bold hidden sm:inline">
            LuxeStay Admin
          </span>
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const currentUser = authService.getCurrentUser();

  // Redirect if not authenticated or not admin
  if (
    !currentUser ||
    !["admin", "manager", "staff"].includes(currentUser.role)
  ) {
    navigate("/admin/login");
    return null;
  }

  const monthlyData = [
    { month: "Jan", bookings: 24, revenue: 12000 },
    { month: "Feb", bookings: 32, revenue: 15000 },
    { month: "Mar", bookings: 28, revenue: 14500 },
    { month: "Apr", bookings: 41, revenue: 18000 },
    { month: "May", bookings: 35, revenue: 16800 },
    { month: "Jun", bookings: 48, revenue: 22000 },
  ];

  const occupancyData = [
    { name: "Occupied", value: 72, fill: "#D4A855" },
    { name: "Available", value: 28, fill: "#E0E0E0" },
  ];

  const roomTypeData = [
    { type: "Deluxe", count: 24, occupancy: 85 },
    { type: "Suite", count: 18, occupancy: 72 },
    { type: "VIP", count: 8, occupancy: 95 },
  ];

  const kpis = [
    {
      title: "Total Rooms",
      value: "50",
      change: "+2 from last month",
      icon: Home,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Booked Rooms",
      value: "36",
      change: "+4 from yesterday",
      icon: Calendar,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Today Check-ins",
      value: "8",
      change: "4 pending",
      icon: Users,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Monthly Revenue",
      value: "$22,000",
      change: "+18% from last month",
      icon: TrendingUp,
      color: "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-muted">
      <AdminHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Welcome back, Admin!
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your hotel today
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">
                      {kpi.title}
                    </p>
                    <p className="font-serif text-3xl font-bold text-foreground">
                      {kpi.value}
                    </p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${kpi.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{kpi.change}</p>
              </div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 card-shadow">
            <h2 className="font-serif text-xl font-bold text-foreground mb-6">
              Monthly Revenue & Bookings
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="revenue" fill="#D4A855" name="Revenue ($)" />
                <Bar dataKey="bookings" fill="#9DA8D3" name="Bookings" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Occupancy Rate */}
          <div className="bg-white rounded-xl p-6 card-shadow">
            <h2 className="font-serif text-xl font-bold text-foreground mb-6">
              Occupancy Rate
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={occupancyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {occupancyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <p className="font-serif text-3xl font-bold text-accent">72%</p>
              <p className="text-sm text-muted-foreground">Total Occupancy</p>
            </div>
          </div>
        </div>

        {/* Room Type Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 card-shadow">
            <h2 className="font-serif text-xl font-bold text-foreground mb-6">
              Room Type Performance
            </h2>
            <div className="space-y-4">
              {roomTypeData.map((room, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">
                      {room.type} ({room.count})
                    </span>
                    <span className="text-accent font-bold">
                      {room.occupancy}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full transition-all"
                      style={{ width: `${room.occupancy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-xl p-6 card-shadow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-serif text-xl font-bold text-foreground">
                Recent Bookings
              </h2>
              <Link
                to="/admin/bookings"
                className="text-accent hover:underline text-sm font-medium"
              >
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: "John Doe",
                  room: "Royal Deluxe Suite",
                  date: "Dec 20, 2024",
                  status: "Confirmed",
                },
                {
                  name: "Sarah Smith",
                  room: "Ivory Penthouse",
                  date: "Dec 21, 2024",
                  status: "Confirmed",
                },
                {
                  name: "Mike Johnson",
                  room: "Presidential Suite",
                  date: "Dec 22, 2024",
                  status: "Pending",
                },
              ].map((booking, idx) => (
                <div
                  key={idx}
                  className="pb-4 border-b border-border last:border-0"
                >
                  <p className="font-medium text-foreground">{booking.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {booking.room}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">
                      {booking.date}
                    </span>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-primary text-primary-foreground rounded-xl p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/admin/rooms"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors text-center"
            >
              <Home className="w-6 h-6 mx-auto mb-2" />
              <p className="font-medium">Manage Rooms</p>
            </Link>
            <Link
              to="/admin/bookings"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors text-center"
            >
              <Calendar className="w-6 h-6 mx-auto mb-2" />
              <p className="font-medium">View Bookings</p>
            </Link>
            <Link
              to="/admin/restaurant"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors text-center"
            >
              <span className="text-2xl mb-2 block">🍽️</span>
              <p className="font-medium">Restaurant</p>
            </Link>
            <Link
              to="/admin/billing"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors text-center"
            >
              <span className="text-2xl mb-2 block">💳</span>
              <p className="font-medium">Billing</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

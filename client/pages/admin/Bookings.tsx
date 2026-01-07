import { Link } from "react-router-dom";
import { LogOut, Eye, CheckCircle, Clock } from "lucide-react";

const AdminHeader = () => (
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
      <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
        <LogOut className="w-4 h-4" />
        <span className="text-sm font-medium">Logout</span>
      </button>
    </div>
  </header>
);

export default function Bookings() {
  const bookings = [
    {
      id: "BK001",
      guestName: "John Doe",
      email: "john@example.com",
      room: "Royal Deluxe Suite",
      checkIn: "Dec 20, 2024",
      checkOut: "Dec 22, 2024",
      nights: 2,
      total: 628,
      status: "confirmed",
    },
    {
      id: "BK002",
      guestName: "Sarah Smith",
      email: "sarah@example.com",
      room: "Ivory Penthouse",
      checkIn: "Dec 21, 2024",
      checkOut: "Dec 23, 2024",
      nights: 2,
      total: 928,
      status: "pending",
    },
    {
      id: "BK003",
      guestName: "Mike Johnson",
      email: "mike@example.com",
      room: "Presidential Suite",
      checkIn: "Dec 19, 2024",
      checkOut: "Dec 21, 2024",
      nights: 2,
      total: 1298,
      status: "checkedin",
    },
    {
      id: "BK004",
      guestName: "Emma Wilson",
      email: "emma@example.com",
      room: "Charcoal Suite",
      checkIn: "Dec 25, 2024",
      checkOut: "Dec 27, 2024",
      nights: 2,
      total: 528,
      status: "confirmed",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "checkedin":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "checkedin":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-muted">
      <AdminHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Booking Management
          </h1>
          <p className="text-muted-foreground">
            Manage all guest bookings and check-ins
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Bookings", value: bookings.length },
            { label: "Confirmed", value: bookings.filter(b => b.status === "confirmed").length },
            { label: "Pending", value: bookings.filter(b => b.status === "pending").length },
            { label: "Checked In", value: bookings.filter(b => b.status === "checkedin").length },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 card-shadow">
              <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
              <p className="font-serif text-2xl font-bold text-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-xl card-shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Booking ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Guest
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Room
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Dates
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Nights
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Total
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-mono text-sm font-semibold text-accent">
                      {booking.id}
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-foreground">
                          {booking.guestName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {booking.email}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-foreground">
                      {booking.room}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      <div>{booking.checkIn}</div>
                      <div className="text-muted-foreground text-xs">
                        to {booking.checkOut}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-foreground">
                      {booking.nights}
                    </td>
                    <td className="px-6 py-4 font-serif font-bold text-accent">
                      ${booking.total}
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {getStatusIcon(booking.status)}
                        <span className="capitalize">
                          {booking.status === "checkedin" ? "Checked In" : booking.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

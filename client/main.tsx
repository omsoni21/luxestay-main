import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages - Guest
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GuestLogin from "./pages/guest/Login";
import GuestSignup from "./pages/guest/Signup";
import RoomListing from "./pages/guest/RoomListing";
import RoomDetails from "./pages/guest/RoomDetails";
import Booking from "./pages/guest/Booking";

// Pages - Admin
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminRooms from "./pages/admin/Rooms";
import AdminBookings from "./pages/admin/Bookings";
import AdminRestaurant from "./pages/admin/Restaurant";
import AdminBilling from "./pages/admin/Billing";
import AdminStaff from "./pages/admin/Staff";

// Pages - Common
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Guest Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guest/login" element={<GuestLogin />} />
          <Route path="/guest/signup" element={<GuestSignup />} />
          <Route path="/rooms" element={<RoomListing />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/booking" element={<Booking />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/rooms" element={<AdminRooms />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/restaurant" element={<AdminRestaurant />} />
          <Route path="/admin/billing" element={<AdminBilling />} />
          <Route path="/admin/staff" element={<AdminStaff />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

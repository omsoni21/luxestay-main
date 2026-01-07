import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ChevronRight } from "lucide-react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import RoomCard from "@/components/RoomCard";

export default function Home() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const featuredRooms = [
    {
      id: "1",
      name: "Royal Deluxe Suite",
      type: "Deluxe",
      price: 299,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop",
      rating: 4.8,
      reviews: 245,
      amenities: ["WiFi", "AC", "Family"],
    },
    {
      id: "2",
      name: "Presidential Gold Suite",
      type: "VIP",
      price: 599,
      image: "https://images.unsplash.com/photo-1516142776402-b0ab0c47ffa9?w=500&h=400&fit=crop",
      rating: 5,
      reviews: 189,
      amenities: ["WiFi", "AC", "Family"],
    },
    {
      id: "3",
      name: "Ivory Luxury Penthouse",
      type: "Suite",
      price: 449,
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&h=400&fit=crop",
      rating: 4.9,
      reviews: 312,
      amenities: ["WiFi", "AC", "Family"],
    },
    {
      id: "4",
      name: "Charcoal Business Suite",
      type: "Deluxe",
      price: 249,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop",
      rating: 4.7,
      reviews: 156,
      amenities: ["WiFi", "AC", "Family"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen max-h-[700px] bg-gradient-to-br from-primary via-primary/95 to-primary overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=2000&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            {/* Tag */}
            <div className="inline-block mb-4">
              <span className="bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-medium border border-accent/30">
                ✨ Luxury Hotel Experiences
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              Experience Luxury at Its Finest
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Discover our collection of premium rooms and suites, meticulously designed for your comfort and elegance.
            </p>
          </div>

          {/* Search Card */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 card-shadow">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Location */}
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City or Hotel"
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>
                </div>

                {/* Check-in */}
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Check-in
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Check-out
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <Link
                    to="/rooms"
                    className="w-full btn-gold px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Search
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Rooms & Suites
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked luxury accommodations curated for discerning guests seeking unparalleled comfort
            </p>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12 sm:mt-16">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-lg font-medium text-lg hover:gap-3 transition-all"
            >
              View All Rooms
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Luxury Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-12 sm:mb-16">
            Why Choose LuxeStay
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 card-shadow hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Premium Luxury
              </h3>
              <p className="text-muted-foreground">
                Experience opulence and sophistication in every detail, from lavish furnishings to personalized service.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 card-shadow hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Worldwide Locations
              </h3>
              <p className="text-muted-foreground">
                Discover exclusive properties in the world's most desirable destinations, all under one umbrella.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 card-shadow hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Exclusive Perks
              </h3>
              <p className="text-muted-foreground">
                Enjoy special benefits, early access to promotions, and personalized loyalty rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-12 sm:mb-16">
            Special Offers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Offer 1 */}
            <div className="relative overflow-hidden rounded-2xl bg-accent/10 border border-accent/20 p-8 sm:p-12">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -mr-20 -mt-20" />
              <div className="relative z-10">
                <span className="inline-block bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Limited Time
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  Early Bird Special
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book 30 days in advance and enjoy 25% off your stay. Perfect for planning your dream vacation.
                </p>
                <Link
                  to="/rooms"
                  className="inline-flex items-center gap-2 btn-gold px-6 py-2 rounded-lg font-medium"
                >
                  Book Now
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-8 sm:p-12">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -mr-20 -mt-20" />
              <div className="relative z-10">
                <span className="inline-block bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Exclusive
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
                  Weekend Getaway
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Experience luxury with complimentary spa access, breakfast, and airport transfers.
                </p>
                <Link
                  to="/rooms"
                  className="inline-flex items-center gap-2 bg-accent text-primary hover:bg-accent/90 px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Explore Deals
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready for Your Luxury Escape?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Join thousands of satisfied guests who have experienced the pinnacle of hotel luxury.
          </p>
          <Link
            to="/guest/signup"
            className="inline-flex items-center gap-2 bg-accent text-primary hover:bg-accent/90 px-8 py-4 rounded-lg font-medium text-lg transition-all"
          >
            Get Started Today
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

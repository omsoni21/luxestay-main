import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ChevronLeft, ChevronRight, Wifi, Wind, Users, MapPin, Star, Check } from "lucide-react";

export default function RoomDetails() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const roomImages = [
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1516142776402-b0ab0c47ffa9?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
  ];

  const room = {
    id: id || "1",
    name: "Royal Deluxe Suite",
    type: "Deluxe",
    price: 299,
    rating: 4.8,
    reviews: 245,
    location: "New York, Manhattan",
    description:
      "Experience the epitome of luxury in our Royal Deluxe Suite. This sophisticated accommodation features premium furnishings, a marble bathroom with rainfall shower, and floor-to-ceiling windows offering stunning city views.",
    amenities: [
      { icon: Wifi, name: "High-Speed WiFi" },
      { icon: Wind, name: "Climate Control" },
      { icon: Users, name: "Spacious Layout" },
    ],
    features: [
      "King-size bed with Egyptian cotton sheets",
      "Marble bathroom with rainfall shower and heated floor",
      "Separate living area with sofa and work desk",
      "55-inch Smart TV with premium streaming services",
      "Mini bar and coffee/tea facilities",
      "Luxurious bath amenities",
      "Daily housekeeping service",
      "24/7 room service",
      "Concierge service",
      "Safe deposit box",
    ],
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % roomImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? roomImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Image Gallery */}
      <section className="relative bg-muted">
        <div className="max-w-7xl mx-auto">
          {/* Main Image */}
          <div className="relative h-96 sm:h-[500px] overflow-hidden rounded-b-2xl">
            <img
              src={roomImages[currentImageIndex]}
              alt={`${room.name} - View ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Gallery Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Gallery Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {roomImages.length}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="px-4 sm:px-6 lg:px-8 py-6 flex gap-2 overflow-x-auto">
            {roomImages.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentImageIndex
                    ? "border-accent"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-grow px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {room.type}
                    </div>
                    <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
                      {room.name}
                    </h1>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{room.location}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(room.rating)
                            ? "fill-accent text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-foreground font-medium">
                    {room.rating} ({room.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Room Description
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {room.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {room.amenities.map((amenity, idx) => {
                    const Icon = amenity.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-4 bg-muted rounded-lg"
                      >
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <span className="font-medium text-foreground">
                          {amenity.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Room Features */}
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Room Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest Reviews Section */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Guest Reviews
                </h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="bg-muted rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-medium text-foreground">
                            Sarah Johnson
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Verified Guest • 2 months ago
                          </p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-accent text-accent"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-foreground">
                        Absolutely stunning room! The attention to detail is
                        impeccable. The staff was incredibly attentive and
                        friendly. I felt truly pampered during my stay. Highly
                        recommend!
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 sm:p-8 card-shadow sticky top-24">
                {/* Price */}
                <div className="mb-6">
                  <p className="text-muted-foreground text-sm mb-1">Starting at</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-4xl font-bold text-accent">
                      ${room.price}
                    </span>
                    <span className="text-muted-foreground">/night</span>
                  </div>
                </div>

                {/* Booking Form */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Check-in
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Check-out
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Guests
                    </label>
                    <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                    </select>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-muted rounded-lg p-4 mb-6 space-y-2 border border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      ${room.price} × 1 night
                    </span>
                    <span className="font-medium text-foreground">
                      ${room.price}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service fee</span>
                    <span className="font-medium text-foreground">$30</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between">
                    <span className="font-medium text-foreground">Total</span>
                    <span className="font-serif text-xl font-bold text-accent">
                      ${room.price + 30}
                    </span>
                  </div>
                </div>

                {/* Book Now Button */}
                <Link
                  to="/booking"
                  className="w-full btn-gold py-3 rounded-lg font-medium text-lg transition-all duration-300 block text-center mb-4"
                >
                  Book Now
                </Link>

                {/* Add to Wishlist */}
                <button className="w-full border border-accent text-accent py-3 rounded-lg font-medium hover:bg-accent/5 transition-colors">
                  ♡ Add to Wishlist
                </button>

                {/* Info */}
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Free cancellation up to 7 days before arrival
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

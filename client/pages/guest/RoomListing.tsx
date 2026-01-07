import { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import RoomCard from "@/components/RoomCard";
import { ChevronDown, Sliders } from "lucide-react";

export default function RoomListing() {
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState(500);
  const [sortBy, setSortBy] = useState("popular");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const roomTypes = ["Deluxe", "Suite", "VIP", "Presidential"];

  const allRooms = [
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
    {
      id: "5",
      name: "Amber Executive Suite",
      type: "Suite",
      price: 379,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop",
      rating: 4.8,
      reviews: 203,
      amenities: ["WiFi", "AC", "Family"],
    },
    {
      id: "6",
      name: "Crown Royal Suite",
      type: "VIP",
      price: 699,
      image: "https://images.unsplash.com/photo-1516142776402-b0ab0c47ffa9?w=500&h=400&fit=crop",
      rating: 5,
      reviews: 98,
      amenities: ["WiFi", "AC", "Family"],
    },
    {
      id: "7",
      name: "Elegance Standard Room",
      type: "Deluxe",
      price: 199,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop",
      rating: 4.6,
      reviews: 421,
      amenities: ["WiFi", "AC", "Family"],
    },
    {
      id: "8",
      name: "Platinum Luxury Suite",
      type: "Suite",
      price: 529,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop",
      rating: 4.9,
      reviews: 267,
      amenities: ["WiFi", "AC", "Family"],
    },
  ];

  // Filter and sort rooms
  let filteredRooms = allRooms.filter((room) => {
    if (selectedType && room.type !== selectedType) return false;
    if (room.price > priceRange) return false;
    return true;
  });

  if (sortBy === "price-low") {
    filteredRooms.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredRooms.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredRooms.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Luxury Rooms & Suites
          </h1>
          <p className="text-muted-foreground">
            Discover our curated collection of premium accommodations
          </p>
        </div>
      </section>

      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div
            className={`lg:col-span-1 ${
              mobileFiltersOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="bg-white rounded-xl p-6 card-shadow sticky top-24">
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="font-serif text-lg font-bold text-foreground">
                  Filters
                </h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>

              {/* Room Type Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                  Room Type
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="roomType"
                      value=""
                      checked={selectedType === ""}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-4 h-4 rounded border-border cursor-pointer"
                    />
                    <span className="ml-3 text-foreground">All Types</span>
                  </label>
                  {roomTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="roomType"
                        value={type}
                        checked={selectedType === type}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-4 h-4 rounded border-border cursor-pointer"
                      />
                      <span className="ml-3 text-foreground">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                  Price Range
                </h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="100"
                    max="800"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full cursor-pointer"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">$100</span>
                    <span className="font-serif text-lg font-bold text-accent">
                      ${priceRange}
                    </span>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedType("");
                  setPriceRange(500);
                  setSortBy("popular");
                }}
                className="w-full py-2 px-4 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sorting and Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <p className="text-muted-foreground">
                  Showing <span className="font-bold text-foreground">{filteredRooms.length}</span> rooms
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
                >
                  <Sliders className="w-4 h-4" />
                  Filters
                </button>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none w-full sm:w-48 pl-4 pr-10 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white cursor-pointer"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Rooms Grid */}
            {filteredRooms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {filteredRooms.map((room) => (
                  <RoomCard key={room.id} {...room} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="mb-4 text-4xl">🔍</div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  No Rooms Found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters to find available rooms
                </p>
                <button
                  onClick={() => {
                    setSelectedType("");
                    setPriceRange(500);
                  }}
                  className="btn-gold px-6 py-2 rounded-lg font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import { Star, Wifi, Wind, Users } from "lucide-react";

interface RoomCardProps {
  id: string;
  image: string;
  name: string;
  type: string;
  price: number;
  rating: number;
  reviews: number;
  amenities: string[];
}

export default function RoomCard({
  id,
  image,
  name,
  type,
  price,
  rating,
  reviews,
  amenities,
}: RoomCardProps) {
  return (
    <div className="group bg-card rounded-xl overflow-hidden card-shadow hover:shadow-2xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Room Type Badge */}
        <div className="inline-block mb-2">
          <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
            {type}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-accent text-accent"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating} ({reviews} reviews)
          </span>
        </div>

        {/* Amenities Icons */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-2">
            {amenities.slice(0, 3).map((amenity, idx) => {
              let Icon = Wifi;
              if (amenity === "AC") Icon = Wind;
              if (amenity === "WiFi") Icon = Wifi;
              if (amenity === "Family") Icon = Users;
              return (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center"
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-end justify-between">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Starting at</div>
            <div className="font-serif text-2xl font-bold text-accent">
              ${price}
              <span className="text-base text-muted-foreground font-sans font-normal">
                /night
              </span>
            </div>
          </div>
          <Link
            to={`/room/${id}`}
            className="btn-gold px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

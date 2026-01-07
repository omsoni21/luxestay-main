import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { CheckCircle, Users, Globe, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We are committed to delivering exceptional service in every aspect of our operations.",
    },
    {
      icon: Users,
      title: "Guest-Centric",
      description:
        "Every decision we make is guided by a dedication to our guests' comfort and satisfaction.",
    },
    {
      icon: Globe,
      title: "Global Vision",
      description:
        "We aspire to be the leading luxury hotel platform connecting guests worldwide.",
    },
  ];

  const achievements = [
    { number: "50+", label: "Luxury Properties" },
    { number: "100K+", label: "Happy Guests" },
    { number: "15", label: "Years of Excellence" },
    { number: "98%", label: "Guest Satisfaction" },
  ];

  const team = [
    {
      name: "Margaret Johnson",
      role: "Chief Executive Officer",
      bio: "15 years of experience in luxury hospitality management.",
    },
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      bio: "Leading innovation in hotel technology and digital solutions.",
    },
    {
      name: "Victoria Smith",
      role: "Chief Operations Officer",
      bio: "Expert in streamlining hotel operations and guest experience.",
    },
    {
      name: "James Rodriguez",
      role: "Head of Customer Experience",
      bio: "Dedicated to ensuring every guest feels like royalty.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            About LuxeStay
          </h1>
          <p className="text-lg text-primary-foreground/80">
            Redefining luxury hotel experiences through elegance, innovation,
            and unparalleled service
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-grow px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <section className="max-w-4xl mx-auto py-16 sm:py-24">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Founded in 2008, LuxeStay emerged from a simple vision: to create
              a seamless bridge between discerning travelers and the world's
              most prestigious hotels. What started as a boutique booking
              platform has evolved into a comprehensive luxury hospitality
              ecosystem.
            </p>
            <p>
              Our journey has been marked by an unwavering commitment to
              excellence. We've partnered with iconic hotels across continents,
              each sharing our passion for delivering unforgettable experiences.
              Today, LuxeStay stands as a testament to the power of marrying
              timeless elegance with cutting-edge technology.
            </p>
            <p>
              From our guests to our hotel partners to our dedicated team, every
              stakeholder is part of our extended family. We don't just book
              rooms; we curate memories, forge connections, and celebrate the
              art of hospitality.
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section className="max-w-6xl mx-auto py-16 sm:py-24 bg-muted rounded-2xl px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="text-center">
                <p className="font-serif text-4xl sm:text-5xl font-bold text-accent mb-2">
                  {achievement.number}
                </p>
                <p className="text-foreground font-medium">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="max-w-6xl mx-auto py-16 sm:py-24">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 card-shadow hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="max-w-6xl mx-auto py-16 sm:py-24">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden card-shadow hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-4xl mx-auto py-16 sm:py-24">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Why Choose LuxeStay
          </h2>
          <div className="space-y-4">
            {[
              "Curated collection of premium hotels and resorts",
              "Transparent pricing with no hidden charges",
              "24/7 dedicated concierge and customer support",
              "Flexible cancellation policies for peace of mind",
              "Exclusive member benefits and loyalty rewards",
              "Advanced booking technology and seamless experience",
            ].map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto py-16 sm:py-24 bg-primary text-primary-foreground rounded-2xl px-8 sm:px-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Join thousands of discerning travelers who trust LuxeStay for their
            luxury accommodations.
          </p>
          <a
            href="/rooms"
            className="inline-flex items-center gap-2 bg-accent text-primary hover:bg-accent/90 px-8 py-4 rounded-lg font-medium text-lg transition-all"
          >
            Explore Our Rooms
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}

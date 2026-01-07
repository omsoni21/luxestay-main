import { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@luxestay.com", "info@luxestay.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Luxury Avenue", "Premium City, PC 12345, USA"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Customer Support", "Office: Mon-Fri 9AM-6PM"],
    },
  ];

  const faqs = [
    {
      question: "How do I make a reservation?",
      answer:
        "Simply browse our collection of luxury rooms, select your dates, and proceed to checkout. Our secure payment system ensures your transaction is safe and protected.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Most bookings allow free cancellation up to 7 days before arrival. Premium bookings may have different terms. Please check your specific booking details.",
    },
    {
      question: "Do you offer group bookings?",
      answer:
        "Yes! We offer special rates for group bookings. Please contact our group coordinator at groups@luxestay.com for more information.",
    },
    {
      question: "How can I update my booking?",
      answer:
        "Log into your account and access 'My Bookings'. You can modify dates or room preferences directly, or contact our support team for assistance.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), UPI payments, digital wallets, and bank transfers.",
    },
    {
      question: "Is there a loyalty program?",
      answer:
        "Yes! Members earn points on every booking. These points can be redeemed for discounts, upgrades, or complimentary services.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-primary-foreground/80">
            We're here to help with any questions about bookings or our services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-grow px-4 sm:px-6 lg:px-8">
        {/* Contact Info Cards */}
        <section className="max-w-6xl mx-auto py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-4xl mx-auto py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-gold py-3 rounded-lg font-medium text-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map or Info */}
            <div className="space-y-6">
              <div className="bg-muted rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    Our Location
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    123 Luxury Avenue
                    <br />
                    Premium City, PC 12345
                    <br />
                    United States
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Map integration coming soon
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white rounded-xl p-6 card-shadow">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                  Response Time
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Email Inquiry</span>
                    <span className="font-medium text-accent">24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Phone Support</span>
                    <span className="font-medium text-accent">Immediate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Chat Support</span>
                    <span className="font-medium text-accent">5 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto py-16 sm:py-24">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow"
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between font-serif text-lg font-bold text-foreground">
                    {faq.question}
                    <span className="transition group-open:rotate-180">
                      <svg
                        className="h-5 w-5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto py-16 sm:py-24 bg-primary text-primary-foreground rounded-2xl px-8 sm:px-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Need More Assistance?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Our dedicated concierge team is available 24/7 to help with any
            questions or special requests.
          </p>
          <a
            href="mailto:support@luxestay.com"
            className="inline-flex items-center gap-2 bg-accent text-primary hover:bg-accent/90 px-8 py-4 rounded-lg font-medium text-lg transition-all"
          >
            <Mail className="w-5 h-5" />
            Email Us
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}

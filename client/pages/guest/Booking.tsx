import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ChevronRight, Lock, Check } from "lucide-react";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const room = {
    name: "Royal Deluxe Suite",
    pricePerNight: 299,
    nights: 2,
    serviceFee: 30,
    taxPercentage: 12,
  };

  const subtotal = room.pricePerNight * room.nights;
  const tax = Math.round(subtotal * (room.taxPercentage / 100));
  const total = subtotal + tax + room.serviceFee;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Complete Your Booking
          </h1>
          <p className="text-muted-foreground">Step {step} of 3</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Steps Indicator */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {[
                { step: 1, title: "Guest Details" },
                { step: 2, title: "Billing & Review" },
                { step: 3, title: "Payment" },
              ].map((s) => (
                <button
                  key={s.step}
                  onClick={() => setStep(s.step)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    step === s.step
                      ? "border-accent bg-accent/5"
                      : step > s.step
                      ? "border-accent bg-accent/10"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                        step >= s.step
                          ? "bg-accent text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step > s.step ? <Check className="w-4 h-4" /> : s.step}
                    </div>
                    <span className="font-medium text-foreground">
                      {s.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Booking Summary */}
            <div className="mt-8 bg-white rounded-xl p-6 card-shadow">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                Booking Summary
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-foreground">{room.name}</p>
                  <p className="text-muted-foreground">Deluxe Suite</p>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">
                      ${room.pricePerNight} × {room.nights} nights
                    </span>
                    <span className="font-medium text-foreground">
                      ${subtotal}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">
                      Tax ({room.taxPercentage}%)
                    </span>
                    <span className="font-medium text-foreground">${tax}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service fee</span>
                    <span className="font-medium text-foreground">
                      ${room.serviceFee}
                    </span>
                  </div>
                </div>
                <div className="border-t border-border pt-3 flex justify-between items-center">
                  <span className="font-medium text-foreground">Total</span>
                  <span className="font-serif text-2xl font-bold text-accent">
                    ${total}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Guest Details */}
            {step === 1 && (
              <div className="bg-white rounded-xl p-6 sm:p-8 card-shadow">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Guest Information
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      placeholder="Any special requests? (e.g., late check-in, room preferences)"
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 rounded border-border cursor-pointer mt-1"
                    />
                    <label htmlFor="terms" className="text-sm text-foreground">
                      I agree to the cancellation policy and terms of service
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full btn-gold py-3 rounded-lg font-medium text-lg flex items-center justify-center gap-2 transition-all"
                  >
                    Continue to Billing
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            )}

            {/* Step 2: Billing & Review */}
            {step === 2 && (
              <div className="bg-white rounded-xl p-6 sm:p-8 card-shadow">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Billing Address & Review
                </h2>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Address *
                    </label>
                    <input
                      type="text"
                      placeholder="123 Main Street"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        placeholder="New York"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        State/Province *
                      </label>
                      <input
                        type="text"
                        placeholder="NY"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        placeholder="10001"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        placeholder="United States"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                    </div>
                  </div>

                  {/* Check-in/Check-out Preview */}
                  <div className="bg-muted rounded-lg p-4 border border-border">
                    <h3 className="font-medium text-foreground mb-3">
                      Reservation Details
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Check-in</span>
                        <span className="font-medium text-foreground">
                          Dec 20, 2024
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Check-out</span>
                        <span className="font-medium text-foreground">
                          Dec 22, 2024
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-border pt-2 mt-2">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium text-foreground">
                          2 nights
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border border-border py-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 btn-gold py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
                    >
                      Continue to Payment
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="bg-white rounded-xl p-6 sm:p-8 card-shadow">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Payment Method
                </h2>

                <form className="space-y-6">
                  {/* Payment Method Selection */}
                  <div className="space-y-3">
                    {[
                      { id: "card", label: "Credit/Debit Card" },
                      { id: "upi", label: "UPI Payment" },
                      { id: "wallet", label: "Digital Wallet" },
                    ].map((method) => (
                      <label
                        key={method.id}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          paymentMethod === method.id
                            ? "border-accent bg-accent/5"
                            : "border-border hover:border-accent/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={paymentMethod === method.id}
                          onChange={(e) =>
                            setPaymentMethod(e.target.value)
                          }
                          className="w-4 h-4 cursor-pointer"
                        />
                        <span className="ml-3 font-medium text-foreground">
                          {method.label}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* Card Payment Form */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4 pt-6 border-t border-border">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Card Holder Name *
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          placeholder="4532 1234 5678 9010"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 font-mono"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* UPI Payment Form */}
                  {paymentMethod === "upi" && (
                    <div className="space-y-4 pt-6 border-t border-border">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          UPI ID *
                        </label>
                        <input
                          type="text"
                          placeholder="yourname@upi"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                        />
                      </div>
                    </div>
                  )}

                  {/* Security Notice */}
                  <div className="bg-muted rounded-lg p-4 border border-border flex items-start gap-3">
                    <Lock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground mb-1">
                        Secure Payment
                      </p>
                      <p className="text-muted-foreground">
                        Your payment information is encrypted and secure. We
                        never store your card details.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 border border-border py-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="flex-1 btn-gold py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all text-lg"
                    >
                      <Lock className="w-5 h-5" />
                      Pay ${total}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Download, Eye } from "lucide-react";

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

export default function Billing() {
  const [selectedInvoice, setSelectedInvoice] = useState<number | null>(null);

  const invoices = [
    {
      id: "INV001",
      guestName: "John Doe",
      bookingId: "BK001",
      roomCharges: 598,
      tax: 72,
      serviceCharge: 30,
      roomService: 0,
      total: 700,
      date: "Dec 22, 2024",
      status: "paid",
    },
    {
      id: "INV002",
      guestName: "Sarah Smith",
      bookingId: "BK002",
      roomCharges: 898,
      tax: 108,
      serviceCharge: 30,
      roomService: 75,
      total: 1111,
      date: "Dec 23, 2024",
      status: "pending",
    },
    {
      id: "INV003",
      guestName: "Mike Johnson",
      bookingId: "BK003",
      roomCharges: 1198,
      tax: 144,
      serviceCharge: 30,
      roomService: 120,
      total: 1492,
      date: "Dec 21, 2024",
      status: "paid",
    },
    {
      id: "INV004",
      guestName: "Emma Wilson",
      bookingId: "BK004",
      roomCharges: 498,
      tax: 60,
      serviceCharge: 30,
      roomService: 50,
      total: 638,
      date: "Dec 24, 2024",
      status: "pending",
    },
  ];

  const selectedInvoiceData = selectedInvoice
    ? invoices[selectedInvoice]
    : null;

  const totalRevenue = invoices.reduce((sum, inv) => sum + inv.total, 0);
  const paidAmount = invoices
    .filter((inv) => inv.status === "paid")
    .reduce((sum, inv) => sum + inv.total, 0);
  const pendingAmount = invoices
    .filter((inv) => inv.status === "pending")
    .reduce((sum, inv) => sum + inv.total, 0);

  return (
    <div className="min-h-screen bg-muted">
      <AdminHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Billing & Invoices
          </h1>
          <p className="text-muted-foreground">
            Manage invoices and track revenue
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 card-shadow">
                <p className="text-muted-foreground text-sm mb-1">
                  Total Revenue
                </p>
                <p className="font-serif text-2xl font-bold text-accent">
                  ${totalRevenue.toLocaleString()}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 card-shadow">
                <p className="text-muted-foreground text-sm mb-1">Paid</p>
                <p className="font-serif text-2xl font-bold text-green-600">
                  ${paidAmount.toLocaleString()}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 card-shadow">
                <p className="text-muted-foreground text-sm mb-1">Pending</p>
                <p className="font-serif text-2xl font-bold text-yellow-600">
                  ${pendingAmount.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Invoices Table */}
            <div className="bg-white rounded-xl card-shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Invoice ID
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Guest
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Amount
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
                    {invoices.map((invoice, idx) => (
                      <tr
                        key={invoice.id}
                        className="border-b border-border hover:bg-muted/50 transition-colors cursor-pointer"
                        onClick={() =>
                          setSelectedInvoice(
                            selectedInvoice === idx ? null : idx,
                          )
                        }
                      >
                        <td className="px-6 py-4 font-mono text-sm font-semibold text-accent">
                          {invoice.id}
                        </td>
                        <td className="px-6 py-4 font-medium text-foreground">
                          {invoice.guestName}
                        </td>
                        <td className="px-6 py-4 text-foreground">
                          {invoice.date}
                        </td>
                        <td className="px-6 py-4 font-serif font-bold text-accent">
                          ${invoice.total}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                              invoice.status === "paid"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {invoice.status === "paid" ? "Paid" : "Pending"}
                          </span>
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

          {/* Right Column - Invoice Preview */}
          <div className="lg:col-span-1">
            {selectedInvoiceData ? (
              <div className="bg-white rounded-xl p-6 card-shadow">
                <div className="mb-6 pb-6 border-b border-border">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Invoice {selectedInvoiceData.id}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {selectedInvoiceData.date}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Guest</p>
                    <p className="font-medium text-foreground">
                      {selectedInvoiceData.guestName}
                    </p>
                  </div>

                  <div>
                    <p className="text-muted-foreground text-sm mb-1">
                      Booking ID
                    </p>
                    <p className="font-mono text-sm text-accent font-semibold">
                      {selectedInvoiceData.bookingId}
                    </p>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-t border-b border-border py-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Room Charges</span>
                    <span className="font-medium text-foreground">
                      ${selectedInvoiceData.roomCharges}
                    </span>
                  </div>
                  {selectedInvoiceData.roomService > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Room Service
                      </span>
                      <span className="font-medium text-foreground">
                        ${selectedInvoiceData.roomService}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Service Charge
                    </span>
                    <span className="font-medium text-foreground">
                      ${selectedInvoiceData.serviceCharge}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (12%)</span>
                    <span className="font-medium text-foreground">
                      ${selectedInvoiceData.tax}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Total</span>
                    <span className="font-serif text-3xl font-bold text-accent">
                      ${selectedInvoiceData.total}
                    </span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mb-6">
                  <span
                    className={`inline-block px-4 py-2 rounded-lg text-sm font-medium w-full text-center ${
                      selectedInvoiceData.status === "paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {selectedInvoiceData.status === "paid"
                      ? "✓ Paid"
                      : "⏳ Pending Payment"}
                  </span>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-center gap-2 btn-gold py-2 rounded-lg font-medium transition-all">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                  {selectedInvoiceData.status === "pending" && (
                    <button className="w-full border border-border py-2 rounded-lg font-medium text-foreground hover:bg-muted transition-colors">
                      Mark as Paid
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <p className="text-muted-foreground">
                  Select an invoice to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

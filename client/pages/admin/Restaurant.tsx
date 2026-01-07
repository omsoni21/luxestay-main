import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Edit2, Trash2, LogOut, Clock, CheckCircle } from "lucide-react";

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

export default function Restaurant() {
  const [activeTab, setActiveTab] = useState("orders");
  const [showAddMenu, setShowAddMenu] = useState(false);

  const orders = [
    {
      id: "ORD001",
      roomNumber: "301",
      guestName: "John Doe",
      items: "Caesar Salad, Grilled Fish, Wine",
      status: "preparing",
      time: "15 mins ago",
      total: 75,
    },
    {
      id: "ORD002",
      roomNumber: "305",
      guestName: "Sarah Smith",
      items: "Pasta Carbonara, Dessert",
      status: "served",
      time: "5 mins ago",
      total: 45,
    },
    {
      id: "ORD003",
      roomNumber: "401",
      guestName: "Mike Johnson",
      items: "Breakfast Set, Coffee",
      status: "preparing",
      time: "8 mins ago",
      total: 28,
    },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Caesar Salad",
      category: "Appetizers",
      price: 18,
      available: true,
    },
    {
      id: 2,
      name: "Grilled Fish",
      category: "Main Course",
      price: 32,
      available: true,
    },
    {
      id: 3,
      name: "Pasta Carbonara",
      category: "Main Course",
      price: 28,
      available: true,
    },
    {
      id: 4,
      name: "Chocolate Cake",
      category: "Desserts",
      price: 12,
      available: false,
    },
  ];

  const getStatusBadge = (status: string) => {
    return status === "preparing"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";
  };

  const getStatusIcon = (status: string) => {
    return status === "preparing" ? (
      <Clock className="w-4 h-4" />
    ) : (
      <CheckCircle className="w-4 h-4" />
    );
  };

  return (
    <div className="min-h-screen bg-muted">
      <AdminHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Restaurant Management
          </h1>
          <p className="text-muted-foreground">
            Manage menu items and room service orders
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-3 font-medium border-b-2 transition-colors ${
              activeTab === "orders"
                ? "border-accent text-accent"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Active Orders
          </button>
          <button
            onClick={() => setActiveTab("menu")}
            className={`px-4 py-3 font-medium border-b-2 transition-colors ${
              activeTab === "menu"
                ? "border-accent text-accent"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Menu Management
          </button>
        </div>

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Active Orders", value: 2 },
                { label: "Preparing", value: 2 },
                { label: "Served Today", value: 12 },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 card-shadow">
                  <p className="text-muted-foreground text-sm mb-1">
                    {stat.label}
                  </p>
                  <p className="font-serif text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-xl card-shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Order ID
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Room
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Guest
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Items
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-border hover:bg-muted/50 transition-colors"
                      >
                        <td className="px-6 py-4 font-mono text-sm font-semibold text-accent">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 font-medium text-foreground">
                          #{order.roomNumber}
                        </td>
                        <td className="px-6 py-4 text-foreground">
                          {order.guestName}
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground">
                          {order.items}
                        </td>
                        <td className="px-6 py-4">
                          <div
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(
                              order.status,
                            )}`}
                          >
                            {getStatusIcon(order.status)}
                            <span className="capitalize">
                              {order.status === "preparing"
                                ? "Preparing"
                                : "Served"}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-serif font-bold text-accent">
                          ${order.total}
                        </td>
                        <td className="px-6 py-4">
                          <button className="px-3 py-1 rounded-lg text-sm font-medium bg-green-100 text-green-700 hover:bg-green-200 transition-colors">
                            Mark Served
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Menu Tab */}
        {activeTab === "menu" && (
          <div className="space-y-6">
            <div className="flex justify-end">
              <button
                onClick={() => setShowAddMenu(!showAddMenu)}
                className="flex items-center gap-2 btn-gold px-6 py-3 rounded-lg font-medium"
              >
                <Plus className="w-5 h-5" />
                Add Menu Item
              </button>
            </div>

            {showAddMenu && (
              <div className="bg-white rounded-xl p-6 sm:p-8 card-shadow">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Add New Menu Item
                </h2>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Item Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Grilled Salmon"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Category
                    </label>
                    <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50">
                      <option>Appetizers</option>
                      <option>Main Course</option>
                      <option>Desserts</option>
                      <option>Beverages</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Price ($)
                    </label>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Availability
                    </label>
                    <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50">
                      <option>Available</option>
                      <option>Unavailable</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Description
                    </label>
                    <textarea
                      placeholder="Item description"
                      rows={3}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>
                </form>

                <div className="flex gap-4">
                  <button
                    onClick={() => setShowAddMenu(false)}
                    className="flex-1 border border-border py-2 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 btn-gold py-2 rounded-lg font-medium">
                    Add Item
                  </button>
                </div>
              </div>
            )}

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.category}
                      </p>
                      <h3 className="font-serif text-lg font-bold text-foreground">
                        {item.name}
                      </h3>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.available
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.available ? "Available" : "Out of Stock"}
                    </span>
                  </div>

                  <p className="font-serif text-2xl font-bold text-accent mb-4">
                    ${item.price}
                  </p>

                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors text-sm font-medium">
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-red-200 rounded-lg text-red-600 hover:bg-red-50 transition-colors text-sm font-medium">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

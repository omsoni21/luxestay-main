import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Edit2, Trash2, LogOut } from "lucide-react";

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

export default function Rooms() {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Royal Deluxe Suite",
      type: "Deluxe",
      capacity: 2,
      price: 299,
      status: "Available",
      floor: 3,
    },
    {
      id: 2,
      name: "Ivory Luxury Penthouse",
      type: "Suite",
      capacity: 3,
      price: 449,
      status: "Occupied",
      floor: 5,
    },
    {
      id: 3,
      name: "Presidential Gold Suite",
      type: "VIP",
      capacity: 4,
      price: 599,
      status: "Available",
      floor: 10,
    },
    {
      id: 4,
      name: "Charcoal Business Suite",
      type: "Deluxe",
      capacity: 2,
      price: 249,
      status: "Maintenance",
      floor: 2,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700";
      case "Occupied":
        return "bg-blue-100 text-blue-700";
      case "Maintenance":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-muted">
      <AdminHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Room Management
            </h1>
            <p className="text-muted-foreground">
              Manage all rooms and their availability
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 btn-gold px-6 py-3 rounded-lg font-medium"
          >
            <Plus className="w-5 h-5" />
            Add Room
          </button>
        </div>

        {/* Add/Edit Room Form */}
        {(showAddForm || editingId) && (
          <div className="bg-white rounded-xl p-6 sm:p-8 card-shadow mb-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
              {editingId ? "Edit Room" : "Add New Room"}
            </h2>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Room Name
                </label>
                <input
                  type="text"
                  defaultValue={
                    editingId
                      ? rooms.find((r) => r.id === editingId)?.name
                      : ""
                  }
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Room Type
                </label>
                <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50">
                  <option>Deluxe</option>
                  <option>Suite</option>
                  <option>VIP</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Capacity
                </label>
                <input
                  type="number"
                  min="1"
                  max="6"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Price per Night ($)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Floor
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Status
                </label>
                <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50">
                  <option>Available</option>
                  <option>Occupied</option>
                  <option>Maintenance</option>
                </select>
              </div>
            </form>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setEditingId(null);
                }}
                className="flex-1 border border-border py-2 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 btn-gold py-2 rounded-lg font-medium"
              >
                {editingId ? "Update Room" : "Add Room"}
              </button>
            </div>
          </div>
        )}

        {/* Rooms Table */}
        <div className="bg-white rounded-xl card-shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Room Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Capacity
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Floor
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
                {rooms.map((room) => (
                  <tr
                    key={room.id}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-foreground">
                      {room.name}
                    </td>
                    <td className="px-6 py-4 text-foreground">{room.type}</td>
                    <td className="px-6 py-4 text-foreground">
                      {room.capacity} guests
                    </td>
                    <td className="px-6 py-4 font-serif font-bold text-accent">
                      ${room.price}
                    </td>
                    <td className="px-6 py-4 text-foreground">Floor {room.floor}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          room.status
                        )}`}
                      >
                        {room.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingId(room.id)}
                          className="p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

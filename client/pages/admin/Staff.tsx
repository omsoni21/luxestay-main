import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Edit2, Trash2, LogOut, Clock } from "lucide-react";

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

export default function Staff() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "James Smith",
      role: "Manager",
      department: "Operations",
      shift: "Morning",
      status: "active",
      joinDate: "Jan 15, 2023",
      phone: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "Lisa Johnson",
      role: "Receptionist",
      department: "Front Desk",
      shift: "Evening",
      status: "active",
      joinDate: "Jun 20, 2023",
      phone: "+1 (555) 234-5678",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Housekeeper",
      department: "Housekeeping",
      shift: "Morning",
      status: "active",
      joinDate: "Mar 10, 2022",
      phone: "+1 (555) 345-6789",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Chef",
      department: "Restaurant",
      shift: "Evening",
      status: "inactive",
      joinDate: "Aug 05, 2023",
      phone: "+1 (555) 456-7890",
    },
  ]);

  const roleColors: { [key: string]: string } = {
    Manager: "bg-purple-100 text-purple-700",
    Receptionist: "bg-blue-100 text-blue-700",
    Housekeeper: "bg-green-100 text-green-700",
    Chef: "bg-orange-100 text-orange-700",
    "Room Service": "bg-pink-100 text-pink-700",
    Security: "bg-red-100 text-red-700",
  };

  const departments = [
    "Operations",
    "Front Desk",
    "Housekeeping",
    "Restaurant",
    "Security",
  ];
  const roles = [
    "Manager",
    "Receptionist",
    "Housekeeper",
    "Chef",
    "Room Service",
    "Security",
  ];
  const shifts = ["Morning", "Evening", "Night", "Flexible"];

  return (
    <div className="min-h-screen bg-muted">
      <AdminHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Staff Management
            </h1>
            <p className="text-muted-foreground">
              Manage team members and their roles
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 btn-gold px-6 py-3 rounded-lg font-medium"
          >
            <Plus className="w-5 h-5" />
            Add Staff
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Staff", value: staff.length },
            {
              label: "Active",
              value: staff.filter((s) => s.status === "active").length,
            },
            {
              label: "On Duty",
              value: staff.filter((s) => s.shift !== "Night").length,
            },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 card-shadow">
              <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
              <p className="font-serif text-2xl font-bold text-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Add/Edit Form */}
        {(showAddForm || editingId) && (
          <div className="bg-white rounded-xl p-6 sm:p-8 card-shadow mb-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
              {editingId ? "Edit Staff Member" : "Add New Staff Member"}
            </h2>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={
                    editingId ? staff.find((s) => s.id === editingId)?.name : ""
                  }
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="staff@luxestay.com"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Role
                </label>
                <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50">
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Department
                </label>
                <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50">
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Shift
                </label>
                <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50">
                  {shifts.map((shift) => (
                    <option key={shift} value={shift}>
                      {shift}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Status
                </label>
                <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="leave">On Leave</option>
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
                {editingId ? "Update" : "Add Staff"}
              </button>
            </div>
          </div>
        )}

        {/* Staff Table */}
        <div className="bg-white rounded-xl card-shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Department
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Shift
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Join Date
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
                {staff.map((member) => (
                  <tr
                    key={member.id}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-foreground">
                          {member.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {member.phone}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          roleColors[member.role] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {member.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-foreground">
                      {member.department}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-foreground">
                        <Clock className="w-4 h-4 text-accent" />
                        {member.shift}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-foreground">
                      {member.joinDate}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          member.status === "active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {member.status === "active" ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingId(member.id)}
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

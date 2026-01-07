# LuxeStay Authentication Implementation Demo

## 🎯 Quick Start: Test Signup & Login

### **Test #1: Sign Up a New User**

1. Go to: `http://localhost:8080/guest/signup`
2. Fill the form:
   ```
   Full Name: Sarah Anderson
   Email: sarah.anderson@example.com
   Password: Welcome@2024
   Confirm Password: Welcome@2024
   Check: ☑ I agree to Terms of Service and Privacy Policy
   ```
3. Click: **"Create Account"** button
4. Expected Result: Redirected to `/guest/dashboard`
5. Verify: Dashboard shows "Welcome back, Sarah Anderson"

---

### **Test #2: Logout**

1. On the dashboard, click **"Logout"** button (top right)
2. Expected Result: Redirected to homepage
3. Verify: You're logged out

---

### **Test #3: Login with Created Account**

1. Go to: `http://localhost:8080/guest/login`
2. Fill the form:
   ```
   Email: sarah.anderson@example.com
   Password: Welcome@2024
   ```
3. Click: **"Sign In"** button
4. Expected Result: Redirected to `/guest/dashboard`
5. Verify: Dashboard shows "Welcome back, Sarah Anderson"

---

## 📁 File Structure

### Authentication Files

```
client/
├── utils/
│   └── auth.ts                 # Core authentication service
├── hooks/
│   └── useAuth.ts              # Auth hook for protected pages
├── pages/
│   ├── guest/
│   │   ├── Login.tsx           # Guest login page
│   │   ├── Signup.tsx          # Guest signup page
│   │   └── Dashboard.tsx       # Guest dashboard (protected)
│   └── admin/
│       ├── Login.tsx           # Admin login page
│       └── Dashboard.tsx       # Admin dashboard (protected)
└── components/
    └── Layout/
        └── Header.tsx          # Header with logout button
```

---

## 🔐 Authentication Service (`client/utils/auth.ts`)

### Core Functions

#### 1. **Signup Function**

```typescript
authService.signup(name: string, email: string, password: string): User
```

**What it does:**

- Validates email is not already registered
- Creates new user object
- Stores user in localStorage under `luxestay_users`
- Automatically logs in the user
- Stores session in `luxestay_auth`
- Returns User object

**Example Usage:**

```typescript
try {
  const user = authService.signup(
    "Sarah Anderson",
    "sarah.anderson@example.com",
    "Welcome@2024",
  );
  console.log("User created:", user);
  // Output: {
  //   id: "guest-1699564800000",
  //   name: "Sarah Anderson",
  //   email: "sarah.anderson@example.com",
  //   role: "guest"
  // }
} catch (error) {
  console.error(error.message); // "Email already registered"
}
```

---

#### 2. **Login Function**

```typescript
authService.login(email: string, password: string, role?: string): User
```

**What it does:**

- Searches for user by email
- Verifies password matches
- Optional role validation (for admin)
- Creates session in localStorage
- Returns User object

**Example Usage:**

```typescript
try {
  const user = authService.login("sarah.anderson@example.com", "Welcome@2024");
  console.log("Logged in as:", user.name);
} catch (error) {
  console.error(error.message); // "Invalid email or password"
}
```

**Admin Login with Role:**

```typescript
try {
  const user = authService.login(
    "admin@luxestay.com",
    "admin123",
    "admin", // Role validation
  );
  console.log("Admin logged in:", user.role);
} catch (error) {
  console.error(error.message); // "Invalid role. This account is a admin"
}
```

---

#### 3. **Logout Function**

```typescript
authService.logout(): void
```

**What it does:**

- Removes authentication token from localStorage
- Clears current user session
- User must login again to access protected pages

**Example Usage:**

```typescript
authService.logout();
console.log(authService.getCurrentUser()); // null
```

---

#### 4. **Get Current User**

```typescript
authService.getCurrentUser(): User | null
```

**What it does:**

- Retrieves currently logged-in user
- Returns null if no user is logged in
- Useful for checking auth status

**Example Usage:**

```typescript
const user = authService.getCurrentUser();
if (user) {
  console.log("User logged in:", user.name);
} else {
  console.log("No user logged in");
}
```

---

#### 5. **Check Authentication Status**

```typescript
authService.isAuthenticated(): boolean
```

**What it does:**

- Returns true if user is logged in
- Returns false if no user is logged in

**Example Usage:**

```typescript
if (authService.isAuthenticated()) {
  console.log("User is authenticated");
} else {
  console.log("User needs to login");
}
```

---

## 📝 Signup Page Implementation

### File: `client/pages/guest/Signup.tsx`

**Features:**

- Form validation with error messages
- Password strength checking (minimum 6 chars)
- Password confirmation matching
- Email uniqueness validation
- Terms & conditions checkbox
- Auto-redirect after successful signup
- Error display banner

**Key Code:**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    // Call signup service
    authService.signup(formData.name, formData.email, formData.password);

    // Redirect to dashboard
    navigate("/guest/dashboard");
  } catch (err) {
    setError(err instanceof Error ? err.message : "Signup failed");
  } finally {
    setLoading(false);
  }
};
```

---

## 🔑 Login Page Implementation

### File: `client/pages/guest/Login.tsx`

**Features:**

- Email and password fields
- Remember me checkbox
- Forgot password link
- Demo credentials display
- Error handling with messages
- Redirect after successful login

**Key Code:**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    // Call login service
    authService.login(email, password);

    // Redirect to dashboard
    navigate("/guest/dashboard");
  } catch (err) {
    setError(err instanceof Error ? err.message : "Login failed");
  } finally {
    setLoading(false);
  }
};
```

---

## 🛡️ Protected Routes (Dashboard)

### File: `client/pages/guest/Dashboard.tsx`

**Features:**

- Auto-redirect if not logged in
- Display user information
- Show user's email
- Logout button
- Protected content only visible to authenticated users

**Key Code:**

```typescript
export default function GuestDashboard() {
  const navigate = useNavigate();
  const currentUser = authService.getCurrentUser();

  // Redirect if not authenticated
  if (!currentUser) {
    navigate("/guest/login");
    return null;
  }

  // Rest of dashboard content only renders if authenticated
  return (
    <div>
      <h1>Welcome back, {currentUser.name}</h1>
      <p>Email: {currentUser.email}</p>
      {/* More content */}
    </div>
  );
}
```

---

## 📱 Admin Login

### File: `client/pages/admin/Login.tsx`

**Features:**

- Role selection (Admin, Manager, Staff)
- Email and password fields
- Role-based authentication
- Demo credentials for testing
- Redirect to admin dashboard

**Key Code:**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    // Call login with role validation
    authService.login(email, password, role);

    // Redirect to admin dashboard
    navigate("/admin/dashboard");
  } catch (err) {
    setError(err instanceof Error ? err.message : "Login failed");
  } finally {
    setLoading(false);
  }
};
```

---

## 💾 localStorage Structure

### When User Signs Up

**Step 1: User created and added to `luxestay_users`**

```json
{
  "luxestay_users": [
    {
      "id": "guest-1699564800000",
      "name": "Sarah Anderson",
      "email": "sarah.anderson@example.com",
      "password": "Welcome@2024",
      "role": "guest"
    }
  ]
}
```

**Step 2: Session created in `luxestay_auth`**

```json
{
  "luxestay_auth": {
    "user": {
      "id": "guest-1699564800000",
      "name": "Sarah Anderson",
      "email": "sarah.anderson@example.com",
      "role": "guest"
    },
    "token": "token-1699564800000"
  }
}
```

### When User Logs Out

- `luxestay_auth` is deleted
- `luxestay_users` remains (user can login again)

### When User Logs In Again

- User found in `luxestay_users` by email
- Password verified
- New session created in `luxestay_auth`

---

## ✅ Testing Validation

### Valid Signup Input

```
✅ Name: Sarah Anderson
✅ Email: sarah.anderson@example.com
✅ Password: Welcome@2024 (6+ characters)
✅ Confirm: Welcome@2024 (matches)
✅ Terms: Checked
Result: Account created ✅
```

### Invalid Signup Inputs

```
❌ Empty name → Error: "Name is required"
❌ Empty email → Error: "Email is required"
❌ Password: "12345" (5 chars) → Error: "Password must be at least 6 characters"
❌ Password: "Welcome@2024", Confirm: "Welcome@2023" → Error: "Passwords do not match"
❌ Terms: Unchecked → Error: "You must agree to the terms and conditions"
❌ Email already used → Error: "Email already registered"
```

### Valid Login Input

```
✅ Email: sarah.anderson@example.com
✅ Password: Welcome@2024
Result: Logged in ✅
```

### Invalid Login Inputs

```
❌ Email: wrong@example.com, Password: Welcome@2024 → Error: "Invalid email or password"
❌ Email: sarah.anderson@example.com, Password: WrongPassword → Error: "Invalid email or password"
```

---

## 🔄 Complete User Journey

```
START
  ↓
┌─────────────────────┐
│ Visit /guest/signup │
└──────────┬──────────┘
           ↓
    ┌──────────────────────────────┐
    │ Fill Signup Form             │
    │ - Name                       │
    │ - Email                      │
    │ - Password                   │
    │ - Confirm Password           │
    │ - Check Terms               │
    └──────────┬───────────────────┘
               ↓
    ┌──────────────────────┐
    │ Click "Create Account"│
    └──────────┬───────────┘
               ↓
    ┌──────────────────────────────┐
    │ Validation                    │
    │ - All fields filled?         │
    │ - Passwords match?           │
    │ - Email unique?              │
    │ - Terms checked?             │
    └──────────┬───────────────────┘
               ↓
    ┌──────────────────────────────┐
    │ Create User Account          │
    │ Store in localStorage        │
    │ Create session               │
    │ Auto-login user              │
    └──────────┬───────────────────┘
               ↓
    ┌──────────────────────────────┐
    │ Redirect to /guest/dashboard │
    └──────────┬───────────────────┘
               ↓
    ┌──────────────────────────────┐
    │ Dashboard                    │
    │ Show user info              │
    │ Show "Logout" button        │
    │ Display bookings            │
    └──────────┬───────────────────┘
               ↓
    ┌──────────────────────────────┐
    │ Click "Logout"              │
    │ Session cleared              │
    │ Redirect to home            │
    └──────────┬───────────────────┘
               ↓
    ┌──────────────────────────────┐
    │ Later: User visits /guest/login
    └──────────┬───────────────────┘
               ↓
    ┌──────────────────────────────┐
    │ Enter Email & Password       │
    │ Click "Sign In"              │
    └──────────┬───────────────────┘
               ↓
    ┌──────────────────────────────┐
    │ Lookup user by email         │
    │ Verify password              │
    │ Create new session           │
    │ Log user in                  │
    └──────────┬───────────────────┘
               ↓
    ┌──────────────────────────────┐
    │ Redirect to /guest/dashboard │
    └──────────┬───────────────────┘
               ↓
    ┌──────────────────────────────┐
    │ Dashboard                    │
    │ User logged in successfully  │
    │ Can view bookings & profile  │
    └──────────┬───────────────────┘
               ↓
              END
```

---

## 🚀 Demo Admin Accounts

These are pre-created accounts for testing admin features:

### Admin Account

```
Email: admin@luxestay.com
Password: admin123
Role: Admin
```

### Manager Account

```
Email: manager@luxestay.com
Password: manager123
Role: Manager
```

### Staff Account

```
Email: staff@luxestay.com
Password: staff123
Role: Staff
```

**To test admin login:**

1. Go to `/admin/login`
2. Select role (e.g., "Admin")
3. Enter email: `admin@luxestay.com`
4. Enter password: `admin123`
5. Click "Sign In as Admin"
6. Redirected to `/admin/dashboard`

---

## Summary

✅ **User Signup Flow:**

- Form validation
- Data storage
- Auto-login
- Redirect to dashboard

✅ **User Login Flow:**

- Credential verification
- Session creation
- Redirect to dashboard

✅ **Protected Routes:**

- Auto-redirect if not authenticated
- Display user-specific information

✅ **Logout:**

- Clear session
- Redirect to home

✅ **Admin Login:**

- Role-based authentication
- Separate dashboard access

**Status: Fully Functional ✅**

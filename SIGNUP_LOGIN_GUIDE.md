# LuxeStay - User Signup & Login Flow Guide

## 📋 Complete User Authentication Flow

This guide demonstrates how users can signup and then login to the LuxeStay application.

---

## Step 1: Guest User Signup

### URL: `/guest/signup`

**Form Fields:**

- Full Name (required)
- Email Address (required, must be unique)
- Password (required, minimum 6 characters)
- Confirm Password (must match password)
- Terms & Conditions (must be checked)

**Example Signup Data:**

```
Full Name: John Smith
Email: john.smith@example.com
Password: SecurePass123
Confirm Password: SecurePass123
```

**What Happens on Signup:**

1. Form validation checks all fields
2. Password length validation (minimum 6 characters)
3. Password confirmation validation
4. Email uniqueness check (prevents duplicate registrations)
5. Terms & conditions verification
6. User account is created in localStorage
7. User is automatically logged in
8. User is redirected to `/guest/dashboard`

**Error Handling:**

- "Name is required" - if name field is empty
- "Email is required" - if email field is empty
- "Password must be at least 6 characters" - if password is too short
- "Passwords do not match" - if passwords don't match
- "You must agree to the terms and conditions" - if terms not checked
- "Email already registered" - if email is already used

---

## Step 2: User Account Created

**Behind the Scenes:**

- User data is stored in browser's localStorage under key `luxestay_users`
- User object includes:
  ```json
  {
    "id": "guest-1699564800000",
    "name": "John Smith",
    "email": "john.smith@example.com",
    "password": "SecurePass123",
    "role": "guest"
  }
  ```
- Authentication token is created in localStorage under `luxestay_auth`

---

## Step 3: Auto-Login After Signup

**What User Sees:**

- Success! Automatically logged in
- Redirected to Guest Dashboard (`/guest/dashboard`)
- Dashboard shows:
  - User's name
  - User's email
  - My Bookings section
  - Profile information
  - Quick stats
  - Logout button

---

## Step 4: Logout

**On Dashboard, click "Logout" button:**

- Session is cleared from localStorage
- User is redirected to homepage
- All authentication data is removed

---

## Step 5: User Login

### URL: `/guest/login`

**Form Fields:**

- Email Address
- Password
- Remember Me (checkbox)
- Forgot Password (link)

**Login Process:**

1. User enters previously signed up credentials
2. System searches for matching user in localStorage
3. Password is verified
4. If credentials match, user is logged in
5. User is redirected to Guest Dashboard

**Example Login:**

```
Email: john.smith@example.com
Password: SecurePass123
```

**Error Handling:**

- "Invalid email or password" - if credentials don't match
- "Login failed" - for other errors

---

## Demo Test Scenario

### Scenario: New User Registration and Login

**Timeline:**

```
Time 1: User visits /guest/signup
Time 2: User fills signup form with:
        Name: Alice Johnson
        Email: alice.johnson@example.com
        Password: MyPassword456
        Confirms: MyPassword456
        Checks Terms
Time 3: User clicks "Create Account"
Time 4: System validates all fields ✓
Time 5: User account created in localStorage ✓
Time 6: User auto-logged in ✓
Time 7: Redirected to /guest/dashboard ✓
Time 8: Dashboard shows "Welcome back, Alice Johnson" ✓

Time 9: User clicks "Logout" button
Time 10: Session cleared
Time 11: Redirected to homepage

Time 12: User visits /guest/login
Time 13: User enters:
         Email: alice.johnson@example.com
         Password: MyPassword456
Time 14: User clicks "Sign In"
Time 15: System finds matching user ✓
Time 16: Password verified ✓
Time 17: User logged in ✓
Time 18: Redirected to /guest/dashboard ✓
Time 19: Dashboard shows "Welcome back, Alice Johnson" ✓
```

---

## Signup vs Login Difference

### Signup Flow (`/guest/signup`)

```
New User → Fill Form → Validate → Create Account → Auto-Login → Dashboard
```

### Login Flow (`/guest/login`)

```
Returning User → Enter Email/Password → Verify → Login → Dashboard
```

---

## Admin Login (Different from Guest)

### URL: `/admin/login`

**For Admin/Manager/Staff:**

**Step 1: Select Role**

- Choose from: Admin, Manager, or Staff

**Step 2: Enter Credentials**

- Email
- Password

**Demo Admin Accounts:**

| Role    | Email                | Password   |
| ------- | -------------------- | ---------- |
| Admin   | admin@luxestay.com   | admin123   |
| Manager | manager@luxestay.com | manager123 |
| Staff   | staff@luxestay.com   | staff123   |

**Admin Login Example:**

```
Role: Admin
Email: admin@luxestay.com
Password: admin123
Click: Sign In as Admin
Result: Redirected to /admin/dashboard
```

---

## Technical Implementation

### Authentication Service (`client/utils/auth.ts`)

**Key Functions:**

#### 1. Signup Function

```typescript
authService.signup(name: string, email: string, password: string): User
```

- Creates new guest user
- Stores in localStorage
- Auto-logs in user
- Returns User object

#### 2. Login Function

```typescript
authService.login(email: string, password: string, role?: string): User
```

- Finds user by email
- Verifies password
- Optional role validation for admin
- Returns User object
- Stores session in localStorage

#### 3. Logout Function

```typescript
authService.logout(): void
```

- Clears session from localStorage
- Removes authentication token

#### 4. Get Current User

```typescript
authService.getCurrentUser(): User | null
```

- Retrieves currently logged-in user
- Returns null if not authenticated

---

## Storage Structure

### localStorage Keys

**1. `luxestay_users`**

```json
[
  {
    "id": "guest-1699564800000",
    "name": "John Smith",
    "email": "john.smith@example.com",
    "password": "SecurePass123",
    "role": "guest"
  },
  {
    "id": "admin-1",
    "name": "Admin User",
    "email": "admin@luxestay.com",
    "password": "admin123",
    "role": "admin"
  }
]
```

**2. `luxestay_auth`**

```json
{
  "user": {
    "id": "guest-1699564800000",
    "name": "John Smith",
    "email": "john.smith@example.com",
    "role": "guest"
  },
  "token": "token-1699564800000"
}
```

---

## Testing Checklist

### ✅ Guest Signup Flow

- [ ] Navigate to `/guest/signup`
- [ ] Fill all fields correctly
- [ ] Check terms & conditions
- [ ] Click "Create Account"
- [ ] Verify redirect to dashboard
- [ ] Verify dashboard shows your name

### ✅ Guest Login Flow

- [ ] Click Logout on dashboard
- [ ] Verify redirect to homepage
- [ ] Navigate to `/guest/login`
- [ ] Enter email and password from signup
- [ ] Click "Sign In"
- [ ] Verify redirect to dashboard
- [ ] Verify dashboard shows correct name

### ✅ Validation Testing

- [ ] Try signup with empty name - should error
- [ ] Try signup with empty email - should error
- [ ] Try signup with short password - should error
- [ ] Try signup with non-matching passwords - should error
- [ ] Try signup without checking terms - should error
- [ ] Try signup with existing email - should error
- [ ] Try login with wrong password - should error

### ✅ Admin Testing

- [ ] Navigate to `/admin/login`
- [ ] Select "Admin" role
- [ ] Enter: admin@luxestay.com / admin123
- [ ] Click "Sign In as Admin"
- [ ] Verify redirect to admin dashboard
- [ ] Test Manager and Staff roles similarly

---

## Browser Developer Tools

### To Check localStorage:

1. Open Browser DevTools (F12)
2. Go to Application/Storage tab
3. Click "Local Storage"
4. Find your domain
5. Look for `luxestay_users` and `luxestay_auth` keys

### To Clear All Data:

```javascript
// In browser console
localStorage.removeItem("luxestay_users");
localStorage.removeItem("luxestay_auth");
```

---

## Security Notes

⚠️ **Important:** This is a demo/development setup using localStorage. In production:

- Passwords should be hashed on the backend
- Use secure HTTP-only cookies for sessions
- Implement proper password reset flow
- Use JWT tokens or similar secure methods
- Add rate limiting on login attempts
- Implement CSRF protection

---

## Summary

The LuxeStay authentication system allows:

1. ✅ **New users** to signup with email/password
2. ✅ **Returning users** to login with their credentials
3. ✅ **Role-based access** for Admin/Manager/Staff
4. ✅ **Protected routes** that redirect unauthorized users
5. ✅ **Logout functionality** to end sessions
6. ✅ **Persistent sessions** across page refreshes

**Current Status:** ✅ Fully Functional without Backend

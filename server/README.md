# User Roles in Express and Mongoose

## What are User Roles?

User roles are categories or labels that define what actions a user can perform. For example:

- **Admin**: Can manage everything (users, data, etc.).
- **User**: Can perform basic actions like viewing their profile or posting comments.
- **Moderator**: Can manage specific parts of the app, like approving content.

Roles help keep your app organized and secure.

---

## Implementation Steps

Follow these steps to add user roles to your app.

### 1. Add Roles to the User Schema

Update your Mongoose schema to include a `role` field:

```javascript
const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user", "moderator"], default: "user" },
});
```

- `enum`: Ensures the role can only be one of the defined values (`admin`, `user`, `moderator`).
- `default`: Assigns the default role if none is specified.

---

### 2. Create a Middleware to Check Roles

Create a middleware function to check if a user has the required role:

```javascript
function checkRole(requiredRole) {
  return (req, res, next) => {
    if (req.user && req.user.role === requiredRole) {
      next();
    }
  };
}
```

---

### 3. Protect Routes Based on Roles

Use the middleware to secure specific routes:

```javascript
// Example route for admins
app.get("/admin", checkRole("admin"), (req, res) => {
  res.send("Welcome, Admin!");
});

// Example route for moderators
app.get("/moderator", checkRole("moderator"), (req, res) => {
  res.send("Welcome, Moderator!");
});

// Example route for all users
app.get("/user", (req, res) => {
  res.send("Welcome, User!");
});
```

---

### 4. Bonus: Protect Multiple Roles

If you want to allow multiple roles for a route, update the middleware:

```javascript
function checkRoles(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      throw createError(
        403,
        "Unauthorized request: You do not have the required permissions to access this resource."
      );

    next();
  };
}
```

Use it like this:

```javascript
app.get("/manage-posts", checkRoles(["admin", "moderator"]), (req, res) => {
  res.send("Welcome, you can manage posts!");
});
```

---

## Excercise

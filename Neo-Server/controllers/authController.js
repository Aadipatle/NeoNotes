// controllers/authController.js
const users = require("../data/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../config");

let userList = users; // local reference so we can push new users

function signToken(user) {
  const payload = { id: user.id, name: user.name, email: user.email };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

module.exports = {
  signup: ({ name, email, password, age }) => {
    if (userList.find((u) => u.email === email)) {
      throw new Error("User with this email already exists");
    }

    const newUser = {
      id: userList.length ? Math.max(...userList.map((u) => u.id)) + 1 : 1,
      name,
      email,
      age: age || null,
      password: bcrypt.hashSync(password, 8),
    };

    userList.push(newUser);

    const token = signToken(newUser);
    return { token, user: { id: newUser.id, name: newUser.name, email: newUser.email } };
  },

  login: async ({ email, password }) => {
    const user = userList.find((u) => u.email === email);
    if (!user) throw new Error("Invalid credentials");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid credentials");

    const token = signToken(user);
    return { token, user: { id: user.id, name: user.name, email: user.email } };
  },

  // Expose userList for other controllers that need to read users (note: keep mutable in-memory)
  getUsersRef: () => userList,
};

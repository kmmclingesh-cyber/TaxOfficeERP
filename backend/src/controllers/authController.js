const prisma = require("../lib/prisma");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

/* =========================
   REGISTER
========================= */

const register = async (req, res) => {

  try {

    const { name, email, password, role } = req.body;

    // Check Existing User

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({
        error: "User already exists",
      });
    }

    // Hash Password

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    res.json({
  message: "User registered successfully",
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  },
});

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Registration failed",
    });
  }
};

/* =========================
   LOGIN
========================= */

const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Find User

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({
        error: "Invalid email",
      });
    }

    // Compare Password

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        error: "Invalid password",
      });
    }

    // Generate JWT

    const token = jwt.sign(
      {
        userId: user.id,
        role: user.role,
      },
      "SECRET_KEY",
      {
        expiresIn: "7d",
      }
    );

    res.json({
  message: "Login successful",
  token,
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  },
});

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Login failed",
    });
  }
};

module.exports = {
  register,
  login,
};
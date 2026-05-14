const express = require("express");
const cors = require("cors");

const clientRoutes = require("./routes/clientRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(cors());

app.use(express.json());

/* =========================
   ROUTES
========================= */

app.use("/clients", clientRoutes);

app.use("/auth", authRoutes);

/* =========================
   SERVER
========================= */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
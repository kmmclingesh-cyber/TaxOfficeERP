const express = require("express");
const cors = require("cors");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();

// Middleware

app.use(cors());
app.use(express.json());

/* =========================
   GET CLIENTS
========================= */

app.get("/clients", async (req, res) => {

  const clients = await prisma.client.findMany({
    orderBy: {
      id: "desc",
    },
  });

  res.json(clients);
});

/* =========================
   ADD CLIENT
========================= */

app.post("/clients", async (req, res) => {

  const { name, pan, gst, status } = req.body;

  const newClient = await prisma.client.create({
    data: {
      name,
      pan,
      gst,
      status,
    },
  });

  res.json(newClient);
});

/* =========================
   UPDATE CLIENT
========================= */

app.put("/clients/:id", async (req, res) => {

  const id = Number(req.params.id);

  const { name, pan, gst, status } = req.body;

  const updatedClient = await prisma.client.update({
    where: { id },
    data: {
      name,
      pan,
      gst,
      status,
    },
  });

  res.json(updatedClient);
});

/* =========================
   DELETE CLIENT
========================= */

app.delete("/clients/:id", async (req, res) => {

  const id = Number(req.params.id);

  await prisma.client.delete({
    where: { id },
  });

  res.json({
    message: "Client Deleted Successfully",
  });
});

/* =========================
   SERVER
========================= */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
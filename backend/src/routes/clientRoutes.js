const express = require("express");

const router = express.Router();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* =========================
   GET ALL CLIENTS
========================= */

router.get("/", async (req, res) => {

  try {

    const clients = await prisma.client.findMany({
      orderBy: {
        id: "desc",
      },
    });

    res.json(clients);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Failed to fetch clients",
    });

  }

});

/* =========================
   ADD CLIENT
========================= */

router.post("/", async (req, res) => {

  try {

    const { name, pan, gst, status } = req.body;

    const client = await prisma.client.create({
      data: {
        name,
        pan,
        gst,
        status,
      },
    });

    res.json(client);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Failed to add client",
    });

  }

});

/* =========================
   UPDATE CLIENT
========================= */

router.put("/:id", async (req, res) => {

  try {

    const { id } = req.params;

    const { name, pan, gst, status } = req.body;

    const updatedClient = await prisma.client.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        pan,
        gst,
        status,
      },
    });

    res.json(updatedClient);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Failed to update client",
    });

  }

});

/* =========================
   DELETE CLIENT
========================= */

router.delete("/:id", async (req, res) => {

  try {

    const { id } = req.params;

    await prisma.client.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      message: "Client Deleted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Failed to delete client",
    });

  }

});

module.exports = router;
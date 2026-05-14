const prisma = require("../lib/prisma");

/* =========================
   GET CLIENTS
========================= */

const getClients = async (req, res) => {

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
};

/* =========================
   ADD CLIENT
========================= */

const addClient = async (req, res) => {

  try {

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

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Failed to add client",
    });
  }
};

/* =========================
   UPDATE CLIENT
========================= */

const updateClient = async (req, res) => {

  try {

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

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Failed to update client",
    });
  }
};

/* =========================
   DELETE CLIENT
========================= */

const deleteClient = async (req, res) => {

  try {

    const id = Number(req.params.id);

    await prisma.client.delete({
      where: { id },
    });

    res.json({
      message: "Client deleted successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Failed to delete client",
    });
  }
};

module.exports = {
  getClients,
  addClient,
  updateClient,
  deleteClient,
};
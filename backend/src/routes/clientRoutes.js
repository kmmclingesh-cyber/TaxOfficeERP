const express = require("express");

const {
  getClients,
  addClient,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");

const router = express.Router();

/* =========================
   ROUTES
========================= */

router.get("/", getClients);

router.post("/", addClient);

router.put("/:id", updateClient);

router.delete("/:id", deleteClient);

module.exports = router;
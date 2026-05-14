const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {

  res.json([
    {
      id: 1,
      name: "ABC Traders",
      pan: "ABCDE1234F",
      gst: "33ABCDE1234F1Z5",
      status: "Active",
    },

    {
      id: 2,
      name: "XYZ Exports",
      pan: "XYZAB5678K",
      gst: "29XYZAB5678K1Z2",
      status: "Pending",
    },
  ]);

});

router.post("/", async (req, res) => {

  res.json({
    message: "Client Added Successfully",
  });

});

router.delete("/:id", async (req, res) => {

  res.json({
    message: "Client Deleted Successfully",
  });

});

module.exports = router;
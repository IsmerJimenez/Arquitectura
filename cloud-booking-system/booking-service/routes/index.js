const express = require("express");
const router = express.Router();
router.get("/", (req, res) => res.send("Route for booking-service"));
module.exports = router;

const express = require("express");
const router = express.Router();
router.get("/", (req, res) => res.send("Route for gateway-api"));
module.exports = router;

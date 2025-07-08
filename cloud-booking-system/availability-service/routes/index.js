const express = require("express");
const router = express.Router();
router.get("/", (req, res) => res.send("Route for availability-service"));
module.exports = router;

const express = require("express");
const router = express.Router();
router.get("/", (req, res) => res.send("Route for auth-service"));
module.exports = router;

const express = require("express");
const router = express.Router();
const leaderboard = require("../services/leaderboard");

/* GET rankings */
router.get("/", async function (req, res, next) {
  try {
    res.json(await leaderboard.getRankings(req.query.page));
  } catch (err) {
    console.error(`Error while getting rankings `, err.message);
    next(err);
  }
});

/* ADD rankings */
router.post("/", async function (req, res, next) {
  try {
    res.json(await leaderboard.addRanking(req.body));
  } catch (err) {
    console.error(`Error while adding ranking`, err.message);
    next(err);
  }
});

module.exports = router;

const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getRankings(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, score
    FROM leaderboard
    ORDER BY score DESC
    LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function addRanking(ranking) {
  const result = await db.query(
    `INSERT INTO leaderboard 
    (name, score)
    VALUES 
    ('${ranking.name}', ${ranking.score})`
  );

  let message = "Error in adding ranking";

  if (result.affectedRows) {
    message = "Ranking added successfully";
  }

  return { message };
}

module.exports = {
  getRankings,
  addRanking,
};

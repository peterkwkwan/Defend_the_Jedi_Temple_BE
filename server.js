const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const leaderboardRouter = require("./routes/leaderboard");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/leaderboard", leaderboardRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

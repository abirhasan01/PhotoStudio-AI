require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const connectDB = require("./config/db");
const userRouter = require("./routes/user.route");
const imageRouter = require("./routes/image.route");

connectDB();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Working");
});
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

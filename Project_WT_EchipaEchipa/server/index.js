const express = require("express");
const sequelize = require("./database");
const user = require("./routes/user");
const feedback = require("./routes/feedback");
const cors = require("cors");

sequelize.sync({ force: true }).then(() => console.log("db ready"));

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", user);
app.use("/feedback", feedback);

app.listen(8080, () => {
  console.log("app is running");
});

const express = require("express");
const router = express.Router();
const User = require("../data_type/User");

router.post("/", async (req, res) => {
  await User.create(req.body);
  res.send("user is inserted");
});

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const reqId = req.params.id;
  const user = await User.findOne({ where: { id: reqId } });

  if (!user) {
    res.status(404).send("The user does not exist");
    return;
  }

  res.send(user);
});

router.get("/:email/:password", async (req, res) => {
  const reqEmail = req.params.email;
  const reqPassword = req.params.password;
  const user = await User.findOne({
    where: { email: reqEmail, password: reqPassword },
  });

  if (!user) {
    res.status(404).send("The user does not exist");
    return;
  }

  res.send(user);
});

router.put("/:id", async (req, res) => {
  const reqId = req.params.id;
  const user = await User.findOne({ where: { id: reqId } });

  if (!user) {
    res.status(404).send("The user does not exist");
    return;
  }

  user.username = req.body.username;
  await user.save();
  res.send("updated");
});

router.delete("/:id", async (req, res) => {
  const reqId = req.params.id;
  await User.destroy({ where: { id: reqId } });
  res.send("removed");
});

module.exports = router;

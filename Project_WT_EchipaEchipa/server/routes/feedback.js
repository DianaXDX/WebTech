const express = require("express");
const router = express.Router();
const Feedback = require("../data_type/Feedback");

router.post("/", async (req, res) => {
  await Feedback.create(req.body);
  res.send("feedback is inserted");
});

router.get("/", async (req, res) => {
  const feedbacks = await Feedback.findAll();
  res.send(feedbacks);
});

router.get("/:id", async (req, res) => {
  const reqId = req.params.id;
  const feedback = await Feedback.findOne({ where: { id: reqId } });

  if (!feedback) {
    res.status(404).send("The feedback does not exist");
    return;
  }

  res.send(feedback);
});

router.get("/user/:id", async (req, res) => {
  const reqId = req.params.id;
  const feedback = await Feedback.findAll({ where: { user: reqId } });

  if (!feedback) {
    res.status(404).send("The feedback does not exist");
    return;
  }

  res.send(feedback);
});

router.put("/:id", async (req, res) => {
  const reqId = req.params.id;
  const feedback = await Feedback.findOne({ where: { id: reqId } });

  if (!feedback) {
    res.status(404).send("The feedback does not exist");
    return;
  }

  feedback.startPoint = req.body.startPoint;
  feedback.destPoint = req.body.destPoint;
  feedback.transport = req.body.transport;
  feedback.departureH = req.body.departureH;
  feedback.duration = req.body.duration;
  feedback.crowd = req.body.crowd;
  feedback.obs = req.body.obs;
  feedback.satisfaction = req.body.satisfaction;
  await feedback.save();
  res.send("updated");
});

router.delete("/:id", async (req, res) => {
  const reqId = req.params.id;
  await Feedback.destroy({ where: { id: reqId } });
  res.send("removed");
});

module.exports = router;

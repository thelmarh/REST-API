const express = require("express");
const User = require("./models/user.model");

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);

    if (!user) {
      return res.status(400).json({ error: "User creation failed" });
    } else {
      return res
        .status(200)
        .json({ message: "User creation successful", user });
    }
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({ message: "success", users });
  } catch (error) {
    return res.status(500).json({ error: "something went wrong" });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);

    return res.status(200).json({ message: "success", users });
  } catch (error) {
    return res.status(500).json({ error: "something went wrong" });
  }
});

module.exports = app;

const express = require("express");
const app = express();
const port = 8000;
const connectDB = require("./db/dbConnection");
connectDB();
const User = require("./db/User");

//middleware for parsing
app.use(express.json());

//registration
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await User.create({ username, password });
    res.status(201).json({ message: "Registration SuccessFull" });
  } catch (error) {
    res.status(500).json({ error: "registrationfailed" });
  }
});

//Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid User Name" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    res.status(201).json({ message: "Login SuccessFull" });
  } catch (error) {
    res.status(500).json({ error: "login failed" });
  }
});

app.listen(port, () => {
  console.log("Server is Started");
});

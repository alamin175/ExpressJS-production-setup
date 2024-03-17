const express = require("express");
const cors = require("cors");
const userData = require("./data.json");
const userRoute = require("./routes/user.route");

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Express js");
});

app.use("/api/user", userRoute);

// app.get("/user/:id", (req, res) => {
//   const id = req.params.id;
//   const user = userData.find((data) => data.id == Number(id));
//   //   console.log(user);
//   res.json(user);
// });

app.listen(port, () => {
  console.log("Port is listening", port);
});

const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user.route");
const errorHandler = require("./middleware/errorHandler");

// const counter = require("./middleware/counter");

const port = process.env.PORT || 5000;
const app = express();

// Apply the rate limiting middleware to all requests.
// app.use(limiter);

app.use(express.json());
app.use(cors());

// app.use(counter);

app.get("/", (req, res) => {
  res.send("Hello Express js");
});

app.use("/api/user", userRoute);

app.all("*", (req, res) => {
  res.send(" NO Route find.");
});

app.listen(port, () => {
  console.log("Port is listening", port);
});

app.use(errorHandler);

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});

const data = require("../data.json");

module.exports.getAllUsers = async (req, res) => {
  res.send(data);
};

module.exports.randomUser = async (req, res) => {
  const randomIndex = Math.floor(Math.random() * data.length);
  const user = data[randomIndex];
  res.send(user);
};

module.exports.user = async (req, res, next) => {
  const id = req.params.id;
  const user = data.find((data) => data.id === Number(id));
  res.send(user);
};

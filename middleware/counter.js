let count = 0;
const counter = (req, res, next) => {
  count++;
  console.log(count);
  next();
};

module.exports = counter;

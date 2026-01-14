const requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

module.exports = requestTime;

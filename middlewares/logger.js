const logger = (req, res, next) => {
  console.log("Post request");
  next();
};

module.exports = logger;

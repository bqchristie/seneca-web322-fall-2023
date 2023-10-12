const logger = (req, res, next) => {
  console.log(`${req.url}: ${req.method}`);
  next();
};

const timer = (req, res, next) => {
  const start = new Date().getTime();
  next();
  const end = new Date().getTime();

  const duration = end - start;
  console.log(`${req.url}: ${req.method} took ${duration} ms`);
};

module.exports = {
  logger,
  timer,
};

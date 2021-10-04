const express = require('express');
const routes = require('./routes');

const errorHandler = (err, _req, res, next) => {
  let message = `${err.message}`;
  let status = 500;
  if (res.headersSent) return next(err);
  switch (err.name) {
    case "ValidationError": {
      status = 422;
      if (err.errors && Object.keys(err.errors).length) {
        const k = Object.keys(err.errors)[0];
        const o = err.errors[k];
        message = o.message;
      }
      break;
    }
    default: {
      status = err.status || 500;
      message = err.message;
      break;
    }
  }
  console.log(`Error: ${err.code}: ${err.message} at ${err.stack}`);
  res.status(status);
  return res.json({ error: message, status });
};

const notFound = (_req, res) => {
  res.status(404).send({ error: "Route Not Found" });
};

const Router = express.Router();
Object.entries(routes).forEach(([version,routerObj]) => {
  const [[route, router]] = Object.entries(routerObj);
  return Router.use('/' + version + '/' + route, router);
})
Router.use(notFound);
Router.use(errorHandler); // Handle any uncaught or delegated errors. See https://expressjs.com/en/guide/error-handling.html

module.exports = Router;

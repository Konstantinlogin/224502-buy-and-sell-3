'use strict';

const express = require(`express`);
const {
  HttpCode
} = require(`../constants`);

const DEFAULT_PORT = 3000;

const app = express();
app.use(express.json());

const routes = {
  offers: require(`./routes/offers`)
};

app.use(`/offers`, routes.offers);
app.use((req, res) => res
  .status(HttpCode.NOT_FOUND)
  .send(`Not found`));

module.exports = {
  name: `--server`,
  run(args) {
    const port = Number.parseInt(args, 10) || DEFAULT_PORT;
    app.listen(port);
  }
};

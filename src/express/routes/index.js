'use strict';

const {
  Router
} = require(`express`);
const index = new Router();

index.get(`/`, (req, res) => res.send(`/`));

module.exports = index;

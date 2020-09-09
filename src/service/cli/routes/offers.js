'use strict';

const {
  Router
} = require(`express`);
const fs = require(`fs`).promises;
const {
  HttpCode
} = require(`../../constants`);

const offers = new Router();
const FILENAME = `mocks.json`;

offers.get(`/`, async (req, res) => {
  try {
    const fileContent = await fs.readFile(FILENAME);
    const mocks = JSON.parse(fileContent);
    res.json(mocks);
  } catch (err) {
    res.status(HttpCode.INTERNAL_SERVER_ERROR).send(err);
  }
});

module.exports = offers;

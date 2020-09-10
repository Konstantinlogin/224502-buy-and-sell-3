'use strict';

const fs = require(`fs`).promises;
const {
  HttpCode
} = require(`../../constants`);
const {
  createRouter,
  getJsonError
} = require(`../helpers`);

const offers = createRouter();
const FILENAME = `mocks.json`;

offers.get(`/`, async (req, res) => {
  try {
    const fileContent = await fs.readFile(FILENAME);
    const mocks = JSON.parse(fileContent);
    res.json(mocks);
  } catch (err) {
    res
      .status(HttpCode.INTERNAL_SERVER_ERROR)
      .json(getJsonError(HttpCode.INTERNAL_SERVER_ERROR, err));
  }
});

module.exports = offers;

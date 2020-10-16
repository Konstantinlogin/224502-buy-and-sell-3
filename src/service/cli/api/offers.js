'use strict';

const {
  HttpCode
} = require(`../../constants`);
const {
  createRouter,
  getJsonError
} = require(`../helpers`);

const offers = createRouter();
const getMockData = require(`../lib/getMockData`);

offers.get(`/`, async (req, res) => {
  getMockData().then(function (result) {
    res.json(result);
  }).catch(function (error) {
    res
      .status(HttpCode.INTERNAL_SERVER_ERROR)
      .json(getJsonError(HttpCode.INTERNAL_SERVER_ERROR, error));
  });
});

module.exports = offers;

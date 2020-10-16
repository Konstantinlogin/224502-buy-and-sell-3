'use strict';

const express = require(`express`);
const {
  HttpCode
} = require(`../constants`);

const getMockData = require(`./lib/getMockData`);


const DEFAULT_PORT = 3000;

const app = express();
app.use(express.json());

const routes = {
  offers: require(`./api/offers`),
};

const CategoriesService = require(`./data-service/categories`);
const OffersService = require(`./data-service/offers`);

const categories = require(`./api/categories`);
const offers = require(`./api/offers`);

// const {
//   getJsonError
// } = require(`./helpers`);

(async () => {
  const mockData = await getMockData();
  categories(app, new CategoriesService(mockData));
  offers(app, new OffersService(mockData));
})();

module.exports = {
  name: `--server`,
  run(args) {
    const port = Number.parseInt(args, 10) || DEFAULT_PORT;
    app.listen(port);
  }
};

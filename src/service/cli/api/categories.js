const {
  createRouter
} = require(`../helpers`);
const {
  HttpCode
} = require(`../../constants`);

const route = createRouter();

module.exports = (app, service) => {

  app.use(`/categories`, route);

  route.get(`/`, (req, res) => {
    const categories = service.findAll();
    res.status(HttpCode.OK)
      .json(categories);
  });
};

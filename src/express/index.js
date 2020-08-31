'use strict';

const express = require(`express`);

const routes = {
  index: require(`./routes/index`),
  register: require(`./routes/register`),
  login: require(`./routes/login`),
  my: require(`./routes/my`),
  offers: require(`./routes/offers`),
  search: require(`./routes/search`)
};

const app = express();
app.use(`/`, routes.index);
app.use(`/register`, routes.register);
app.use(`/login`, routes.login);
app.use(`/my`, routes.my);
app.use(`/offers`, routes.offers);
app.use(`/search`, routes.search);

const port = 8080;
app.listen(port);

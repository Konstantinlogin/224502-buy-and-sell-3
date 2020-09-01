'use strict';

const express = require(`express`);
const path = require(`path`);

const routes = {
  index: require(`./routes/index`),
  register: require(`./routes/register`),
  login: require(`./routes/login`),
  my: require(`./routes/my`),
  offers: require(`./routes/offers`),
  search: require(`./routes/search`)
};

const app = express();
app.set(`views`, path.resolve(__dirname, `./templates`));
app.set(`view engine`, `pug`);

app.use(express.static(path.resolve(__dirname, `./public`)));
app.use(`/`, routes.index);
app.use(`/register`, routes.register);
app.use(`/login`, routes.login);
app.use(`/my`, routes.my);
app.use(`/offers`, routes.offers);
app.use(`/search`, routes.search);

const port = 8081;
app.listen(port);

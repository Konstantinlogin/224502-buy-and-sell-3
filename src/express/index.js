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
app.use((req, res, next) => {
  res.status(404).render(`errors/400`, {
    bodyClass: `body-not-found`,
    htmlClass: `html-not-found`,
  });
});
app.use((req, res, next) => {
  res.status(500).render(`errors/500`, {
    bodyClass: `html-server`,
    htmlClass: `body-server`,
  });
});

const port = 8081;
app.listen(port);

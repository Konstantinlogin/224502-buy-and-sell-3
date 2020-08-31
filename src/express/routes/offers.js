'use strict';

const {
  Router
} = require(`express`);
const offers = new Router();

offers.get(`/category/:id`, (req, res) => res.send(`/offers/category/${req.params.id}`));
offers.get(`/add`, (req, res) => res.send(`/offers/add`));
offers.get(`/edit/:id`, (req, res) => res.send(`/offers/edit/${req.params.id}`));
offers.get(`/:id`, (req, res) => res.send(`/offers/${req.params.id}`));

module.exports = offers;

'use strict';

const {
  Router
} = require(`express`);
const offers = new Router();

offers.get(`/category/:id`, (req, res) => {
  res.render(`offers/category`);
});
offers.get(`/add`, (req, res) => {
  res.render(`offers/new-ticket`);
});
offers.get(`/edit/:id`, (req, res) => {
  res.render(`offers/ticket-edit`);
});
offers.get(`/:id`, (req, res) => {
  res.render(`offers/ticket`, {
    guest: false,
    noComment: false,
    noImage: false
  });
});

module.exports = offers;

'use strict';

const {
  Router
} = require(`express`);
const my = new Router();

my.get(`/`, (req, res) => {
  res.render(`my/my-tickets`);
});
my.get(`/comments`, (req, res) => {
  res.render(`my/comments`, {
    empty: true
  });
});

module.exports = my;

'use strict';

const {
  Router
} = require(`express`);
const my = new Router();

my.get(`/`, (req, res) => res.send(`/my`));
my.get(`/comments`, (req, res) => res.send(`/my/comments`));

module.exports = my;

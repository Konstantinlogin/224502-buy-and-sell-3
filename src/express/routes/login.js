'use strict';

const {
  Router
} = require(`express`);
const login = new Router();

login.get(`/`, (req, res) => {
  res.render(`auth/login`);
});

module.exports = login;

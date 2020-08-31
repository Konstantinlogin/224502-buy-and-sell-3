'use strict';

const {
  Router
} = require(`express`);
const login = new Router();

login.get(`/`, (req, res) => res.send(`/login`));

module.exports = login;

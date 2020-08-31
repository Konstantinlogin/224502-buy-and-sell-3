'use strict';

const {
  Router
} = require(`express`);
const register = new Router();

register.get(`/`, (req, res) => res.send(`/register`));

module.exports = register;

'use strict';

const {
  Router
} = require(`express`);

module.exports.createRouter = () => {
  return new Router();
};

module.exports.getJsonError = (statusCode, errorObject) => {
  const defaultMessage = `Unhandeled error`;
  return {
    "code": statusCode,
    "message": errorObject.message || defaultMessage
  };
};

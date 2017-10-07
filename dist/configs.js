'use strict';
//go to config --> development.json

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ENV = process.env.NODE_ENV || 'development';
var configs = require('../config/' + ENV);

var server = exports.server = {
  port: process.env.PORT || configs.server.port
};
//# sourceMappingURL=configs.js.map
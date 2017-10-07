'use strict';
//go to config --> development.json
const ENV = process.env.NODE_ENV || 'development';
const configs = require(`../config/${ENV}`);

export const server = {
  port: process.env.PORT || configs.server.port
}




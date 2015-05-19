'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    http = require('http'),
    querystring = require('querystring'),
    Config = require('../config/config');


exports.ProductGET = {
  handler: function (request, reply) {
    var options = {
      host: Config.host.producteditor,
      path: request.path,
      method: 'GET'
    };

    var req = http.request(options, function(res) {
      return reply(res);
    });

    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });
    
    req.end();
  }
};


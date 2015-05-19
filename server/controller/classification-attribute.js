'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    http = require('http'),
    querystring = require('querystring'),
    Config = require('../config/config');

exports.getClassificationAttributeHost = {
  handler: function (request, reply) {
      return reply(Config.host.classificationAttribute);
  }
};

exports.classificationPOST = {
  handler: function (request, reply) {
    var post_data = querystring.stringify(request.payload);
    var options = {
      host: Config.host.classificationAttribute,
      path: request.path,
      method: 'POST',
      headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Content-Length': post_data.length
          }
    };

    var req = http.request(options, function(res) {
      return reply(res);
    });

    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });
    
    // write data to request body
    req.write(post_data);
    req.end();
  }
};


exports.classificationGET = {
  handler: function (request, reply) {
    var options = {
      host: Config.host.classificationAttribute,
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


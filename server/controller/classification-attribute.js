'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    http = require('http'),
    querystring = require('querystring'),
    Config = require('../config/config');

//  var options = {
//       host: 'classificationattribute-44842.onmodulus.net',
//       path: '/classification/551a3619b37d9294079a39bd'
//     };

// exports.getGoogle = {
//   handler: function (request, reply) {
//     console.log("Hi!----------------------------");

//     http.get(options, function(res) {
//       console.log("Got response: " + res.statusCode);
//       return reply(res);
//     }).on('error', function(e) {
//       console.log("Got error: " + e.message);
//     });
//   }
// };

// var options = {
//       host: 'classificationattribute-44842.onmodulus.net',
//       path: 'api/classificationSearch'
//     };



exports.classification = {
  handler: function (request, reply) {
    var post_data = querystring.stringify(request.payload);
    console.log(request.path);
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





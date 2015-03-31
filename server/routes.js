// Load modules

var ClassificationAttribute      = require('./controller/classification-attribute'),
  	Static    = require('./static');

// API Server Endpoints
exports.endpoints = [

  { method: 'GET',  path: '/{somethingss*}', config: Static.get },
  { method: 'POST', path: '/api/classificationSearch', config: ClassificationAttribute.classification},
  { method: 'POST', path: '/api/classificationGroupSearch', config: ClassificationAttribute.classification}
];
// Load modules

var ClassificationAttribute      = require('./controller/classification-attribute'),
  	Static    = require('./static');

// API Server Endpoints
exports.endpoints = [

  { method: 'GET',  path: '/{somethingss*}', config: Static.get },
  { method: 'GET',  path: '/getClassificationAttributeHost', config: ClassificationAttribute.getClassificationAttributeHost },
  { method: 'POST', path: '/api/classificationSearch', config: ClassificationAttribute.classification},
  { method: 'POST', path: '/api/classificationGroupSearch', config: ClassificationAttribute.classification},
  { method: 'POST', path: '/api/attributeSearch', config: ClassificationAttribute.classification},
  { method: 'POST', path: '/api/attributeSectionSearch', config: ClassificationAttribute.classification}
];
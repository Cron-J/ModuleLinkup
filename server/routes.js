// Load modules

var ClassificationAttribute = require('./controller/classification-attribute'),
	Product = require('./controller/product'),
  	Static    = require('./static');

// API Server Endpoints
exports.endpoints = [

  { method: 'GET',  path: '/{somethingss*}', config: Static.get },
  { method: 'GET',  path: '/getClassificationAttributeHost', config: ClassificationAttribute.getClassificationAttributeHost },
  { method: 'POST', path: '/api/classificationSearch', config: ClassificationAttribute.classificationPOST},
  { method: 'POST', path: '/api/classificationGroupSearch', config: ClassificationAttribute.classificationPOST},
  { method: 'GET', path: '/getProductSchema', config: Product.ProductGET},
  { method: 'POST', path: '/api/attributeSearch', config: ClassificationAttribute.classificationPOST},
  { method: 'POST', path: '/api/attributeSectionSearch', config: ClassificationAttribute.classificationPOST},
  { method: 'POST', path: '/api/attributeList', config: ClassificationAttribute.classificationPOST},
  { method: 'GET', path: '/api/attribute/{id}', config: ClassificationAttribute.classificationGET}
];
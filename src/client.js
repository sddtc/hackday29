var rest = require('rest'),
    pathPrefix = require('rest/interceptor/pathPrefix'),
    errorCode = require('rest/interceptor/errorCode'),
    mime = require('rest/interceptor/mime'),
    defaultRequest = require('rest/interceptor/defaultRequest');

var api_remote = 'http://s3-ap-southeast-2.amazonaws.com/ncis-annual-summary-bucket/';
var client =
      rest.wrap(mime, {mime:'application/json'})
      .wrap(errorCode, { code: 500 })
      .wrap(pathPrefix, { prefix: api_remote })
module.exports = client;

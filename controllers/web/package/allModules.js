'use strict';

/**
 * Module dependencies.
 */

var packageService = require('../../../services/package');

module.exports = function* allModules() {
  var modules = yield* packageService.getAllModule();
  var result={};
  modules.forEach(function(module){
    result[module.name]=result[module.name]||[]
    result[module.name].push(module.version)
  })
  yield this.body={result:result}
};

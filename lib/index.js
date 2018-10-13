'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  let cfg = app.config['plugin_name'];
  console.log(cfg);
  //
  console.log(_path2.default.join(process.cwd(), './dist/index.js'));
  //
  var middleware = async (ctx, next) => {
    await next();
  };
  return middleware;
};
//# sourceMappingURL=index.js.map
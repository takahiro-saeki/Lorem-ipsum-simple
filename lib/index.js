'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = require('./js/data.js');

var _data2 = _interopRequireDefault(_data);

var _init = require('./js/init.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generate = function generate(len) {
  var init = (0, _init.generateSimple)((0, _init.separate)(_data2.default), len);
  var ren = (0, _init.adjust)(init);
  return ren;
};

exports.default = generate;
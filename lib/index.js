'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _string = require('lodash/string');

var _collection = require('lodash/collection');

var _array = require('lodash/array');

var _data = require('./js/data.js');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var separate = function separate(mock) {
  var lower = mock.toLowerCase();
  var rep = (0, _string.replace)(lower, /(\.|,)/g, '');
  var test = rep.split(' ');
  var blank = [];
  var check = test.map(function (arr, i) {
    if (arr !== "") {
      blank.push(arr);
    }
  });
  return blank;
};

var generateSimple = function generateSimple(arr) {
  var rep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

  if (rep > 200) {
    rep = 200;
  }
  var box = (0, _collection.shuffle)(arr);
  var newArr = [];
  for (var i = 0; i < rep; i++) {
    if (i === 0) {
      newArr.push((0, _string.upperFirst)(box[i]));
    }
    newArr.push(box[i]);
  }
  return newArr;
};

var adjust = function adjust(arr) {
  var check = (0, _array.concat)(arr.join(' '));
  var final = check + '.';
  return final;
};

var generate = function generate(len) {
  var init = generateSimple(separate(_data2.default), len);
  var ren = adjust(init);
  return ren;
};

exports.default = generate;
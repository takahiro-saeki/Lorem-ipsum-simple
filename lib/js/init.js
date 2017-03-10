'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adjust = exports.generateSimple = exports.separate = undefined;

var _string = require('lodash/string');

var _collection = require('lodash/collection');

var _array = require('lodash/array');

var separate = exports.separate = function separate(mock) {
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

var generateSimple = exports.generateSimple = function generateSimple(arr) {
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

var adjust = exports.adjust = function adjust(arr) {
  var check = (0, _array.concat)(arr.join(' '));
  var final = check + '.';
  return final;
};
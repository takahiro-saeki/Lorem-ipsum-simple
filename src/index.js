import data from './js/data';
import {replace} from 'lodash/string';
import {shuffle} from 'lodash/collection';
import {concat} from 'lodash/array';

//test code
/*
const shuArr = ['string', 'string2', 'string3', 'test', 'testarr', 'test3'];
const testShuffle = shuffle(shuArr);
console.log(testShuffle)
*/

function separate(mock) {
  let rep = replace(data, /(\.|,)/g , '')
  let test = rep.split(' ')
  let blank = []
  const check = test.map((arr, i) => {
    if(arr !== "") {
      blank.push(arr)
    }
  })
  return blank
}

function generateSimple(arr, rep = 3) {
  if (rep > 200) {
    rep = 200;
  }
  let box = shuffle(arr);
  let newArr = []
  for (let i = 0; i < rep; i++) {
    newArr.push(box[i])
  }
  return newArr
}

function adjust(arr) {
  let check = concat(arr.join(' '))
  let final = `${check}.`;
  return final
}
let render = adjust(generateSimple(separate(data), 30))

//separate(data)
const elem = document.getElementById('app')
elem.innerHTML = `<div>${render}</div>`;

import data from './js/data';
import {replace, upperFirst} from 'lodash/string';
import {shuffle} from 'lodash/collection';
import {concat} from 'lodash/array';

function separate(mock) {
  let lower = mock.toLowerCase();
  let rep = replace(lower, /(\.|,)/g , '')
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
    if (i === 0) {
      newArr.push(upperFirst(box[i]))
    }
    newArr.push(box[i])
  }
  return newArr
}

function adjust(arr) {
  let check = concat(arr.join(' '))
  let final = `${check}.`;
  return final
}

export default function generate(len) {
  let init = generateSimple(separate(data), len);
  let ren = adjust(init);
  return ren;
}
let render = generate(10)

//separate(data)
const elem = document.getElementById('app')
elem.innerHTML = `<div>${render}</div>`;

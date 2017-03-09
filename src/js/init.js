import {replace, upperFirst} from 'lodash/string';
import {shuffle} from 'lodash/collection';
import {concat} from 'lodash/array';

export const separate = mock => {
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

export const generateSimple = (arr, rep = 3) => {
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

export const adjust = arr => {
  let check = concat(arr.join(' '))
  let final = `${check}.`;
  return final
}

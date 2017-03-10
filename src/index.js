import data from './js/data.js';
import {separate, generateSimple, adjust} from './js/init.js';

const generate = len => {
  let init = generateSimple(separate(data), len);
  let ren = adjust(init);
  return ren;
}

export default generate;

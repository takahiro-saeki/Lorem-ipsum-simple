import {generateSimple, separate, adjust} from './js/init';
import data from './js/data.js';

const generate = len => {
  let init = generateSimple(separate(data), len);
  let ren = adjust(init);
  return ren;
}

export default generate;

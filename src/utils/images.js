import { breakpoints } from "./breakpoints";

export function getSizesObject(className) {
  let classList = className.split(' ').filter(name => !name.includes('offset'));
  let pairs = classList.map(el => el.split('col-')[1].split('-')).filter(el => el.length > 1);

  let sizes = pairs.map((pair, index, arr) => {
    let [bp, colSpan] = pair;
    let vw;

    if (index === 0) {
      vw = 100;
    }

    else {
      let prevColSpan = arr[index - 1][1];
      vw = Math.floor(100 / (12 / prevColSpan));
    }

    return { bp, vw, colSpan, value: breakpoints[bp] };
  });

  return { sizes, last: Math.floor(100 / (12 / pairs.at(-1)[1])) };
}

export function getSizesString(className = 'col-sm-12', min = false) {
  let { sizes, last } = getSizesObject(className);
  let strings = sizes.map(size => `(${min ? 'min' : 'max'}-width: ${size.value}) ${size.vw}vw`);
  let mediaString = strings.join(', ');
  mediaString += `, ${last}vw`;
  return mediaString;
}
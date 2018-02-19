// eslint-disable-next-line
const _isDOMSelector = (selector, selectorClass) => {
  if (!(typeof selector === 'undefined' || selector === null)) {
    return true;
  } else {
    // eslint-disable-next-line
    console.error('selector: ' + selectorClass + ' does not exist');
    return false;
  }
};

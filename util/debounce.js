/**
 * Limits how often a callback function can trigger
 * @param  {Function} func callback function
 * @param  {Number} wait milliseconds to delay
 * @param  {boolean} immediate
 */
export default function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

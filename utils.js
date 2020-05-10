//OMDb API limits 1000 request per day,
//this function prevents searchbox calls API
//on every letter pressed. 
//It waits 1 seconds to call API
const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

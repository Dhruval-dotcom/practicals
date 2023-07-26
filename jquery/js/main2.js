const app = (function () {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
})();
app();

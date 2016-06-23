// Make a counter using closure such that the actual counter variable is hidden
function makeCounter() {
  var counter = 0;
  function countFunction() {
    return counter++;
  }
  return countFunction;
}

var count = makeCounter();
console.log(count());
console.log(count());
console.log(count());
var count1 = makeCounter();
console.log(count1());
console.log(count1());
console.log(count1());

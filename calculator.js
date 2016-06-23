//make a calculator using closure

function makeCalculator() {
  var sum = 0;
  return {
    addSum: function(num) {
      sum += num;
      // return sum;
    },
    subtract: function(num) {
      sum -= num;
      // return sum;
    },
    times: function(num) {
      sum *= num;
      // return sum;
    },
    getNumber: function() {
      return sum;
    }
  };
}


var calc = makeCalculator();
console.log(calc.getNumber()); // outputs 0
calc.addSum(4);
console.log(calc.getNumber()); // outputs 4
calc.subtract(2);
console.log(calc.getNumber()); // outputs 2
calc.times(3);
console.log(calc.getNumber()); // outputs 6

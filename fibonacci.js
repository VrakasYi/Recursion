//#!/usr/bin/ node

function fibs(num, sum1, sum2){
    if (sum1 === undefined) {
      if (num === 0) return [0];
      if (num === 1) return [0, 1];
      // sum = 0
      return [0, 1].concat(fibs(num-1, 1, 0));
    }
    if (num === 2) return sum1 + sum2;
    return [sum1 + sum2].concat(fibs(num-1, sum1 + sum2, sum1));
  }

  console.log(fibs(5));
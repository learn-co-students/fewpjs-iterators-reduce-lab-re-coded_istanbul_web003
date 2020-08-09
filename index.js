let batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = 31;

function reducer(acc, curr) {
    return acc + curr;
  }
   
  console.log(reduce(batteryBatches, totalBatteries, 0));





// let reducer = function (accumulator, item) {
//     return accumulator + item
//   }
//   let total = batteryBatches.reduce(reducer, totalBatteries)
  

//   let reducer = batteryBatches.reduce(function (accumulator, current) {
//     return accumulator + current;
// });
// console.log(reducer);


// // const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(batteryBatches.reduce(reducer));


// batteryBatches.reduce((accumulator, currentValue, currentIndex, array) => {
//     return accumulator + currentValue
// }, 0)
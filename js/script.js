// // // Foreach
// // 1-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach(function (value) {
//   console.log(value);
// });

// // 2-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach(function (value) {
//   console.log(value + 5);
// });
// // 3-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach(function (value) {
//   if (value % 2 == 1) {
//     console.log(value);
//   }
// });
// // 4-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let count = 0;
// arr.forEach(function () {
//   count++;
// });
// console.log(count);
// // 5-SAVOL JAVOBI
// let sArr = [1, 2, 3, 4, 5];
// let lArr = [8, 35, 52, 24, 12];
// sArr.forEach(function (value) {
//   lArr.push(value);
// });
// console.log(lArr);
// // // map
// // 1-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = arr.map(function (value) {
//   return value * 2;
// });
// console.log(res);

// // 2-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = arr.map(function (value) {
//   return value ** 2;
// });
// console.log(res);
// // 3-SAVOL JAVOBI
// let arr = ["hello", "world"];
// let res = arr.map(function (value) {
//   return value.toUpperCase();
// });
// console.log(res);

// // 4-SAVOL JAVOBI
// let arr = [23, -5, 3, -34, 0];
// function negativeArray(arg) {
//   return arg.map(function (value) {
//     return typeof value == "number" ? (value > 0 ? -value : value) : value;
//   });
// }
// console.log(negativeArray(arr));

// // 5-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sumArray3(arg) {
//   return arg.map(function (value) {
//     return value + 3;
//   });
// }
// console.log(sumArray3(arr));

// // // filter
// // 1-SAVOL JAVOBI
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function evenarrayFilter(arg) {
//   return arg.filter(function (value) {
//     return value % 2 == 0;
//   });
// }
// console.log(evenarrayFilter(arr));

// // 2-SAVOL JAVOBI
// let arr = [1, -2, 3, 4, -5, 6, 7, -8, 9, -10];
// function positiveArray(arg) {
//   return arg.filter(function (value) {
//     return value > 0;
//   });
// }
// console.log(positiveArray(arr));

// // 3-SAVOL JAVOBI
// let arr = ["apple", "banana", "kiwi", "strawberry", "orange"];
// function filterLongArray(arg) {
//   return arg.filter(function (value) {
//     return value.length > 5;
//   });
// }
// console.log(filterLongArray(arr));

// // 4-SAVOL JAVOBI
// let arr = [15, 20, 18, 25, 30, 17, 22];
// function ageFilter(age) {
//   return age.filter(function (value) {
// return value > 18;
//   });
// }
// console.log(ageFilter(arr));

// // 5-SAVOL JAVOBI
// let arr = [3, 12, 7, 25, 9, 15, 1];
// function filterLittleNumber(arg) {
//   return arg.filter(function (value) {
//     return value < 10;
//   });
// }
// console.log(filterLittleNumber(arr));

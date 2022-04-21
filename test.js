// // let i;
// // for (i = 0; i < 3; i++) {
// //   const log = () => {
// //     console.log(i);
// //   };
// //   setTimeout(log, 100);
// // }
// console.log(x, text);

// // console.log(text);
// var text = "outside";
// const test = () => {
//   console.log(text);
//   text = "inside";
//   console.log(text);
// };
// test();

// for (let i = 0; i < 2; i++) {
//   if (i == 1) var x = 5;
// }

let x = 1;
const parentFunc = () => {
  let myVal = 2;
  console.log(x);
  console.log(myVal);

  const childFunc = () => {
    console.log((x += 5));
    console.log((myVal += 1));
  };
  return childFunc;
};

const res = parentFunc();
console.dir(res);

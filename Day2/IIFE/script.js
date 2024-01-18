// (
//     function () {
//         var aName = "Barry";
//     }
// )();

// // IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가.
// console.log(aName);

// // IIFE를 사용하게되면 함수가 호출되는게 아닌 return값이 바로 호출됨
// var result = (function () {
//     var name = "Barry";
//     return name;
// })();

// // 함수 호출
// var result = function () {
//     var name = "Barry";
//     return name;
// };

// console.log(result);

// const score = () => {
//     let count = 0;
//     return {
//         current: () => {return count},
//         increment: () => {count++},
//         reset: () => {count = 0}
//     }
// }

// console.log(typeof score);
// console.log(score);
// console.log(score().current());
// score().increment();
// console.log(score().current());

// const score = (() => {
//     let count = 0;
//     return {
//         current: () => {return count},
//         increment: () => {count++},
//         reset: () => {count = 0}
//     }
// })();

// console.log(typeof score);
// console.log(score);

// console.log(score.current());
// score.increment();
// console.log(score.current());
// score.reset();
// console.log(score.current());


// const increment = () => {
//     let counter = 0;
//     console.log(counter);
//     const number = (num) => 
//         console.log(`it is ${num} number`);
//     return () => {counter++; number(counter);}
// }

// increment();

const increment = (() => {
    let counter = 0;
    console.log(counter);
    const number = (num) => 
        console.log(`it is ${num} number`);
    return () => {counter++; number(counter);}
})();

console.log(increment);
increment();
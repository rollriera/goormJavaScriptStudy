const num1 = 20;
const num2 = 10;

let val;
val = num1 + num2; // 30
val = num1 * num2; // 200
val = num1 - num2; // 10
val = num1 / num2; // 2 몫
val = num1 % num2; // 0 나머지

// Math Object
val = Math.E; //Euler number
val = Math.PI; // 파이값
val = Math.round(2.4); // 2 뒷자리 절삭
val = Math.ceil(2.4); // 3 반올림
val = Math.floor(2.8); // 2 반내림
val = Math.abs(-2); // 2 절대값
val = Math.min(2,3,4,5,6,7,8,-1); // 최소값
val = Math.max(2,3,4,5,6,7,8,-1); //최대값
val = Math.random(); // 0 ~ 1 사이의 숫자를 무작위로 돌려줌
val = Math.floor(Math.random() * 20 + 1); // 1 ~ 20 사이의 숫자를 무작위로 돌려줌

console.log(val);
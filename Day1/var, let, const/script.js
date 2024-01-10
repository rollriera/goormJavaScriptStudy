
// var
// var는 중복 선언과 재할당이 가능하며 마지막에 할당된 값이 변수에 저장된다.
// 이런 특징으로 자율성은 생기지만 소스 코드가 복잡해질 경우 기존 선언해둔 변수를
// 잊고 다시 선언 하거나 재할당을 해서 어떤 부분에서 값이 변경되는지 파악하기
// 힘들어질 수 있다는 단점이 있다.

// var A = 1;
// console.log(A);

// var g = 'hello';
// console.log(g);

// var g = 'hi';
// console.log(g);

// g = 'how are you?';
// console.log(g);

// let
// let은 중복 선언은 불가능하며, 재할당은 가능
// java에서의 변수 선언과 비슷하다.

// let greeting = 'hello';
// console.log(greeting);

// greeting = 'hi';
// console.log(greeting);

// const
// const는 중복 선언과 재할당이 불가능하지만
// 객체의 값을 변경하는 것은 가능하다.

// const a = 'Hello';
// console.log(a);

// a = 'hi';
// console.log(a);

// const b = [1, 2, 3];
// console.log(b);

// b[0] = 3;
// console.log(b);

// 유효 참조 범위
// var => 함수 레벨 스코프
// 함수 내에서 선언된 변수는 함수 내에서만 유효함
// (함수 내에서는 블록 내외부에 관계없이 유효)
// 하지만 함수 외부에서는 참조 불가.
// function func() {
//     if(true){
//         var a = 'a';
//         console.log(a);
//     }
//     console.log(a);
// }

// func();

// 유효 참조 범위
// let,const => 블록 레벨 스코프
// 함수, if문, for문, while문, try/catch문 등의 모든 코드 블록 내부에서
// 선언된 변수는 코드 블록 내에서만 유효함, 코드 블록 외부에서는 참조할 수 없음.

// function func() {
//     if(true){
//         let a = 'a';
//         const b = 'b';
//         console.log(a);
//     }
//     console.log(a);
//     console.log(b);
// }

// func();

// Hoisting
// 호이스팅은 코드가 실행되기 전에 변수 및 함수 선언(이름)이 로컬범위(유효 범위)의
// 맨 위로 들어올려지거나 끌어올려지는 경우를 설명한다.
// var는 실제 할당 값이 할당되기 전까지 undefined값이 할당된다.
// console.log(greeting);

// // var greeting = 'hello';

// 함수도 호이스팅이 가능하다.
func();

function func() {
    console.log('hoisting test');
}

// let, const은 var와 달리 호스팅은 가능하지만 undefinded가 할당되지 않고 error가 출력된다.

console.log(greeting);

let greeting = 'hello';

console.log('안녕하세요!');
console.log(123);
console.log(false);
var greeting = '안녕하세요.';
console.log(greeting);
console.log({a:"a", b:"b"});
console.table({a:"a", b:"b"}); //테이블 형태로 출력

console.error('Error!'); // 에러 형태로 출력
console.warn('Warning!') // 경고 형태로 출력

console.time('Hello'); // 코드의 실행 시간을 time이라는 메서드를 이용해 측정
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.timeEnd('Hello'); // time메서드와 짝을 이루며 time메서드를 종료하여 측정 시간을 출력

console.clear(); // 콘솔의 내용들을 전부 삭제
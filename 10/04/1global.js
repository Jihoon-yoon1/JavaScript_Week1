let a = 10; //전역 스코프
function sum(){
    console.log(`함수 내부: ${a}`);
}
sum();
console.log(`함수 외부: ${a}`);

//지역 스코프 예제
function sum2(){
    let a = 10;
    console.log(`함수 내부: ${a}`);
}
sum2();
console.log(`함수 외부: ${a}`);
//지역 스코프는 내부의 a는 나타내지만, 외부 a는 나타내지 못한다.
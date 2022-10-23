console.log(num);
var num = 10;
// 위의 코드의 결과와 아래 주석 코드의 결과가 같다.
// var num;             //선언부를 스코프 최상위로 끌어올림
// console.log(num);    //undefined 출력
// num = 10;

//hosting_func.js
printHello();
function printHello(){
    console.log("Hello");
}
//Hello

// 위의 코드의 결과와 아래 주석 코드의 결과가 같다.
// function printHello(){     //함수 선언문을 최상위로 끌어올림
//     console.log("Hello");
// }
// printHello();

//hosting_express.js
printHello();
var printHello = function printHello(){
    console.log("Hello");
}
//위 코드 오류 뜬다.
//위의 코드는 함수 표현식에서 선언부는 변수를 선언한 부분이다.
//printHello는 함수가 아니라고 뜹니다.
// var printHello2;
// printHello2();
// printHello2 = function printHello2(){
//     console.log("Hello");
// }


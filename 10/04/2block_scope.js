let a = 10;
{
    let b = 20;
    console.log(`코드 블록 내부: ${a}`);
    console.log(`코드 블록 내부: ${b}`);
}
console.log(`코드 블록 외부: ${a}`);
console.log(`코드 블록 외부: ${b}`); //코드 블록 외부 b는 안나옴.


//block_scope2.js
var c = 10;
{
    var d = 20;
    console.log(`코드 블록 내부: ${c}`);
    console.log(`코드 블록 내부: ${d}`);
}
console.log(`코드 블록 외부: ${c}`);
console.log(`코드 블록 외부: ${d}`);
//var 키워드는 함수 스코프 방식으로 코드 블록 외부에서 오류가 나지 않는다.
//즉, 위의 코드는 모두 다 전역 스코프로 선언한 것과 마찬가지다.

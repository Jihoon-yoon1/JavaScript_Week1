//gugudan_console.js
console.log("3 * 1 = 3");
console.log("3 * 2 = 6");
console.log("3 * 3 = 9");
console.log("3 * 4 = 12");
console.log("3 * 5 = 15");
console.log("3 * 6 = 18");
console.log("3 * 7 = 21");
console.log("3 * 8 = 24");
console.log("3 * 9 = 27");

//gugudan_for.js
for(let i = 1; i <= 9; i++){
    console.log(`3 * ${i} = ${3 * i}`);
}

//gugudan_func.js
function gugudan(){ //함수 시작
    for(let i = 1; i <= 9; i++){
        console.log(`3 * ${i} = ${3 * i}`);
    }
} //함수 끝
gugudan(); //함수 출력

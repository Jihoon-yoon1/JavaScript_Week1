function gugudan(dan){
    for(let i = 1; i <=9; i++){
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
}
gugudan(3); //3단 출력
gugudan(5); //5단 출력
gugudan(8); //8단 출력

//parameter_default.js
function sum(a = 10, b = 10){
    console.log(a, b);
}
sum(); //10, 10

//add_func.js
function sum2(num1, num2){
    let result = num1 + num2;
    console.log("inner: " + result);
}
sum2(10, 20); //inner: 30

//add_func_return.js
function sum3(num3, num4){
    let result = num3 + num4;
    return result;
}
const result = sum(10, 20);
console.log("out: " + result); //out: 30

//add_func_return.js
function sum4(num5, num6){
    return num5 + num6;
}
const result2 = sum(10, 20);
console.log("out: " + result2); //out: 30

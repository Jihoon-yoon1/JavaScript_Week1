let result = 10 + "10";
console.log(result); // 1010

//typeConversion2.js
let num = 10;
let strNum = "10";
if(num == strNum){ // 문자열을 숫자형으로 형 변환
    console.log(`equals`); //12
}

//typeConversion3.js
let num2 = 10;
let strNum2 = "10";
if(String(num2) == strNum2){
  console.log(`equals`);
}

//Ex
let q1 = 10 + 10 * 2;
let q2 = 10 === 10 || 10 !== "10";
// 10 === 10 은 true, || 10 !== "10" 은 true (true || true) 값은 true
let q3 = !(10 < 20) && 10 < 20;
// (10 < 20) true지만 !로 false, 즉 false && true 이므로 false
console.log(q1);
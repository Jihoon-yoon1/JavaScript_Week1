// (단항 산술 연산자)
let increment = 10;
increment++;
let decrement = 10;
decrement--;
console.log(increment); //11
console.log(decrement); //9

// pre_indecrement.js
let num = 10;
let subNum = ++num; // 앞에 사용했으므로 전치 연산 방식
console.log(subNum); // 11

// after_indecrement.js
let num2 = 10;
let subNum2 = subNum2++; // 뒤에 사용했으므로 후치 연산 방식
console.log(subNum2); // 10

//logical_negation.js (단항 부정 연산자)
let num3 = -10;
num3 = -num3;
console.log(num3); //10

let x = 10;
x += 5; //15 (x = 10 + 5)
let y = 10;
y -= 5 //5 (y = 10 - 5)
let z = 10;
z *= 5; //50 (z = 10 * 5)
let u = 10;
u /= 5; //2 (u = 10 / 5)
let v = 10;
v %= 3; //1 (v = 10 % 3)
let t = 10;
v **= 2; //100 (t = 10 ** 2)
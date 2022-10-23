//for_in_arr.js
let arr = ["orange", "banana", "apple"]
for(let index in arr){
    console.log(index + " : " + arr[index]);
}
//0 : orange
//1 : banana
//2 : apple

//for_break.js
for(let i = 0; i < 10; i++){
    console.log(i);
    if(i === 5)break;
}
//0 1 2 3 4 5  멈춤

//for_break_ex.js
let obj = {name : "철수", age : "20"};
for(let key in obj){
    if(key === "age")break;
    console.log(key + " : " + obj[key]);
}
//name : 철수

//for_contiune.js
for(let i = 0; i < 10; i++){
    if(i % 2 === 1) continue;
    console.log(i);
}
//2
//4
//6
//8
//10

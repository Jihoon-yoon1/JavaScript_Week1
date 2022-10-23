let num = 1;
while(num <= 9999){
    console.log(num);
    num++;
}

//do_while.js
do{
    console.log("무조건");
    console.log("한 번은 실행");
}while(false);

//for.js
for(let i = 0; i < 5; i++){
    console.log(i);
}

//for_for.js
for(let i = 0; i < 2; i++){
    console.log(`i : ${i}`);
    for(let k = 0; k < 2; k++){
        console.log(`k : ${k}`);
    }
}

//for_arr.js
let arr = ["banana","apple", "orange"];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
//banana
//apple
//orange

//for_in_obj.js
let obj = {name : "철수", age : "20" };
for(let key in obj){
    console.log(key + " : " + obj[key]);
}
//name : 철수
//age : 20
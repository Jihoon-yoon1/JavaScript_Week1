//naming_func.js
const gugudan = function gugudan(){
    for(let i = 1; i <=9; i++){
        console.log(`3 * ${i} = ${3 * i}`);
    }
};
gugudan();

//anonymous_func.js
const gugudan2 = function(){
    for(let i = 1; i <=9; i++){
        console.log(`3 * ${i} = ${3 * i}`);
    }
};
gugudan2();

//naming_func_call.js
const gugudan3 = function naming(){
    for(let i = 1; i <=9; i++){
        console.log(`3 * ${i} = ${3 * i}`);
    }
};
naming();
//오류 남 naming is not defined

//arrow_func.js
const gugudan4 = ()=>{
    for(let i = 1; i <= 9; i++){
        console.log(`3 * ${i} = ${3 * i}`);
    }
};
gugudan4();
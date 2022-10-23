//코드에서 max 변수의 출력값이 배열 중 가장 큰 숫자가 될 수 있도록
//getArrayNumber() 함수를 완성하라. 배열 요소는 반드시 숫자형
//function getArrayMaxNumber(arr){ 함수 코드 완성하시오 }
//const max = getArrayMaxNumber([10, 50, 30]);
//console.log(max);
function getArrayMaxNumber(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        if(result < arr[i]) result = arr[i];
    }
    return result;
}
const max = getArrayMaxNumber([10, 50, 30]);
console.log(max);

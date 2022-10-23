//selfcheck1.js
//원의 넓이를 구하는 공식(반지름) * (반지름) * (원주율)
//원주율은 3.14(가정) , 원의 반지름을 이용해 원의 넓이를 반환하는 함수를 써라.
function getCircleArea(radius){
    return radius * radius * 3.14;
}
const area = getCircleArea(10);
console.log(`원의 넓이: ${area}`);

//selfcheck2.js
//매개변수로 배열을 전달받아 배열의 요소 중에서 가장 큰 수를 찾아
//반환하는 함수를 만들어라. 이때, 배열 안의 데이터는 모두 0보다 큰 정수라고 가정.
function getOrderDesc(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        const currentNumber = arr[i];
        if(result < currentNumber){
            result = currentNumber
        }
    }
    return result;
}
const result = getOrderDesc([10, 20, 100, 30, 40]);
console.log(result);

//selfcheck3.js
//체질량 지수(BMI)를 계산하는 공식은 몸무게를 키(m)의 제곱으로 나눈 값
//사용자에게 키(cm)와 몸무케(kg)에 해당하는 값을 전달받아 체질량 지수 계산하라.
//체질량 지수가 26점 이상이면 비만, 24~25점은 과체중,
//18.5점 미만은 저체중을 반환하는 함수를 만들어라.
function getBMI(height, weight){
    const h = height / 100; // m 단위 변환
    const bmi = weight / (h * h);
    if(bmi > 25) return "비만"
    else if(bmi > 24 && bmi <= 25) return "과체중"
    else if(bmi > 18.5 && bmi <=25) return "정상"
    else return "저체중";
}
const bmi = getBMI(180, 70);
console.log("bmi: " + bmi);
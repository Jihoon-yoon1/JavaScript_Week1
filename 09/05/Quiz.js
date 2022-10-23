//Quiz 1
//1부터 100까지의 합을 반복문을 사용해서 구하라.
let sum = 0;
for(i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);

//selfcheck
//01.js
//숫자 1부터 999까지 짝수가 몇개인지 출력
let count = 0;
for(let i = 1; i <= 999; i++){
    if(i % 2 === 1) count++;
}
console.log(`짝수의 개수는 ${count}개입니다.`);

//02.js
//구구단 1단부터 9단까지 출력
for(let dan = 1; dan <= 9; dan ++){
    for(let num = 1; num <= 9; num++){
        console.log(`${dan} * ${num} = ${dan * num}`);
    }
}

//03.js
//100부터 999까지 정수 중에서 암스트롱 수에 해당하는 숫자 모두 출력
for(let i = 1; i < 10; i++){
    for(let k = 1; k < 10; k++){
        for(let j = 1; j < 10; j++){
            let sum2 = (i * i * i) + (k * k * k) + (j * j * j);
            let currentNumber = (i * 100) + (k * 10) + (j);
            if(sum2 == currentNumber){
                console.log(currentNumber);
            }
        }
    }
}
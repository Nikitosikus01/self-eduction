/* 
    Задание 1:

    Вывести в консоль с помощью цикла FOR все четные числа от 10 до 50
*/


// let firstNum = 10;
// let laastNum = 50;

// if(firstNum%2 == 0){
//     console.log('чётные числа из промежутка с ' +firstNum+ ' по ' +lastNum)
//     for(let even = firstNum; even<=50; even += 2){
//         console.log(even);

//     }
// }


/* 
    Задание 2:

    Необходимо создать объект в котором вы опишите самого себя в формате : "свойство: значение"

    Список свойств:

    - Имя(string)
    - Фамилия(string)
    - Возраст(number)
    - Есть ли домашние животные(boolean)
*/

const human = {
    name: 'nik',
    surName: 'WJwD', 
    age: 14,
    animal: false

}


/* 
    Задание 3:

    Отрывок из текста А.С Пушкин, Капитанская дочка был разбит на небольшие кусочки и помещен в массив. 
    Необходимо собрать этот текст из массива и придать ему первоначальный вид.

    Текст до разбивки на части:

    "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"

    Массив:

    const array = [
        'В ту же ночь',
        'приехал,',
        'я в Симбирск,',
        'где должен был',
        'пробыть сутки',
        'для закупки', 
        'нужных вещей',
        'что и было поручено Савельичу.',
        'Я остановился',
        'в трактире.',
        'Савельич',
        'с утра',
        'отправился по лавкам'
    ];
     
   итоговый текст должен быть собран из массива array и результат записать в переменную result
*/

const array = [
    'В ту же ночь',
    'приехал,',
    'я в Симбирск,',
    'где должен был',
    'пробыть сутки',
    'для закупки', 
    'нужных вещей',
    'что и было поручено Савельичу.',
    'Я остановился',
    'в трактире.',
    'Савельич',
    'с утра',
    'отправился по лавкам'
];

let result = array.join(' ');
console.log(result);




/* 
    Задание 4:

    Напишите функцию, в теле которой будет находится следующий код:

    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);

    firstName и lastName - это параметры функции

    При вызове функции передайте ей, в качестве аргумента, свое имя и фамилию.
*/

function funName (firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);

}
funName('Nik', 'Miro');

/* 
    Задание 5:

    Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
    
*/


let firstNum = 21;
let lastNum = 67;

if (firstNum % 2 != 0) {
  console.log("нечётные числа из промежутка с " + firstNum + " по " + lastNum);
  let even = firstNum;
  while (even <= lastNum) {
    console.log(even);
    even += 2;
  }
}



/* 
    Задание 5.1:

    Вывести в консоль с помощью цикла FOR все четные числа от 10 до 50
*/

// let firstNum = 10;
// let lastNum = 50;

// if(firstNum % 2 == 0){
//     console.log('чётные из промежутка с ' +firstNum+ ' по ' +lastNum);
//     for(let even = firstNum; even <= 50; even +=2 ){
//         console.log(even);
//     }
// }else if(firstNum % 2 == 1){
//     console.log('нечётные из промежутка с ' +firstNum+ ' по ' +lastNum);
//     for(let even = firstNum; even <= 50; even +=2 ){
//         console.log(even);
//     }
// }

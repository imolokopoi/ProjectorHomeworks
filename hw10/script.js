"use strict"
//задача 1
(startDate = '01 Jan 1992', endDate = '01 Jan 1993', dimension = 'days') {
    const start = new Date(startDate);
    const end = new Date(endDate);

    //if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    //    return 'Invalid date format';
    //}

    const timeDifference = end - start;

    const timeDifference = Math.abs(end - start); // Використовуємо Math.abs() для отримання абсолютної різниці у часі

    const dimensionFunctions = {
        'days': () => Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        'seconds': () => Math.floor(timeDifference / 1000)
        'hours': () => Math.floor(timeDifference / (1000 * 60 * 60)),
        'minutes': () => Math.floor(timeDifference / (1000 * 60)),
    };

    if (dimensionFunctions[dimension]) {
        const result = dimensionFunctions[dimension]();
        return `${result} ${dimension}`;
    } else {
        return 'Invalid dimension';
    }
}
   

const result1 = durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds');
console.log(result1); // Виведе '86400 seconds'

const result2 = durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days');
console.log(result2); // Виведе '362 days'


//2. Масив унікальних значень
//Напишіть функцію яка відфільтрує масив унікальних значень
//Рішення має працювати незалежно від конкретних значень в масиві імен
const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
    const uniqueValues = [];
    for (let i = 0; i < array.length; i++) {
        if (!uniqueValues.includes(array[i])) {
            uniqueValues.push(array[i]);
        }
    }
    return uniqueValues;
}


//console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
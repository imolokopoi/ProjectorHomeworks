"use strict"
//Для елементу з текстом 'Навігація по DOM дереву'
let elementWithText = document.querySelector('h2#headerTwo');

//Для першого елементу <section>
let firstSection = document.querySelector('section');

//Для елементу списку з текстом 'Пункт 5'
// Знаходимо всі елементи списку
let listItems = document.querySelectorAll('li');

// Вибираємо п'ятий елемент списку (індексуємо з 0)
let fifthListItem = listItems[4]; // Зауважте, що індексація починається з 0, тому п'ятий елемент має індекс 4

console.log(fifthListItem.textContent); // Перевіряємо текст п'ятого елемента

//Для елементу з класом 'hatredLevelBlock'
let elementWithClass = document.querySelector('.hatredLevelBlock');

"use strict"
//Напишіть функцію 
//яка буде використовуватись для сортування масиву фільмів

const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];
function byProperty(property, direction) {
  return function (a, b) {
    const comparison = a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0;
    return direction === '>' ? comparison : -comparison;
  };
}
   
      
      
      console.log(movies.sort(byProperty('releaseYear', '>')));
      console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
      console.log(movies.sort(byProperty('movieName', '>')));
  
  console.log(movies.sort(byProperty('releaseYear', '>')));
  console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
  console.log(movies.sort(byProperty('movieName', '>')));

//Задача номер 2
  function someFunction(arg1, arg2) {
    // Довільна функція, яка робить щось з аргументами
    return arg1 + arg2;
  }
  
  function slower(func, seconds) {
    return function (...args) {
      console.log(`Chill out, you will get your result in ${seconds} seconds`);
      setTimeout(() => {
        const result = func(...args);
        console.log('Result:', result);
      }, seconds * 1000);
    };
  }
  
  let slowedSomeFunction = slower(someFunction, 5);
  
  slowedSomeFunction(2, 3);
  
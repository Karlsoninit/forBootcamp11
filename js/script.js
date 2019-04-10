// 'use strict'	

// let total = 0;
// const fn = (...arg) => {
// 	for (const key of arg) {
// 		total += key;
// 	}
// 	return total;
// };

// console.log(fn(1,2,3,4,5));


// function add(...rest) {
// 	let sum = 0;
// 	for (const key of rest) {
// 		sum += key;
// 	}
// 	return document.writeln(sum);
// }

// console.log(add(1,2,3,4,4,3,2,1))


//=============== anonimus =======

function repeat(a, action) {
	for (let i = 0; i < a; i++) {
		action(i)
	}
}

// repeat(3, console.log);


let label = [];

repeat(5, i => {
	label.push(`uniti ${i + 1}`)
})

console.log(label);

//================== 

function filter(array, test) {
	const result = [];
	for (const key of array) {
		const newFn = test(key);
		if (newFn) {
			result.push(key)
		}
	}
	return result;

}

const fruits = [{
		name: 'apples',
		quantity: 200,
		isFresh: true
	},
	{
		name: 'grapes',
		quantity: 150,
		isFresh: false
	},
	{
		name: 'bananas',
		quantity: 100,
		isFresh: true
	},
];


const freshFruit = filter(fruits, fruit => fruit.isFresh);
console.log(freshFruit);

const freshQuantity = filter(fruits, fruit => fruit.quantity > 120);
console.log(freshQuantity);


//============ замыкание ========
const createCounter = () => {
	let counter = 0;

	const increment = () => {
		console.log(counter);
	}
	counter++;
	return increment;
}

const showFn = createCounter();

showFn();
showFn();
showFn();
showFn();
showFn();


//==================== object =================

// const name = {
// 	name: 'Maksim',
// 	lastName: 'Norets',
// 	age: 30,
// 	showEverithing() {
// 		console.log(`${this.name} --- ${this.lastName} --- ${this.age}`)
// 	},
// 	rename(el) {
// 		return this.age + el;
// 	}
// }



// name.showEverithing();


// console.log(name.rename(4));


// function showEl(value) {
// 	return value + 20;
// };

// console.log(showEl(name.rename(Math.floor(Math.random()*10))))
// function ret(el) {
// 	let showQ;
// 	if(showEl(name.rename(Math.floor(Math.random()*10))) <= el) {
// 		showQ = Number(prompt('Enter numbers'));
// 		console.log(showQ)
// 		if(showQ >= 30) {
// 			alert('Hello bro!!')
// 		} else {
// 			alert('Go away!')
// 		}
// 	} 
// }

// ret(55);


//===================


const fruitsByColor = {
	red: ['apple', 'strawberry'],
	yellow: ['banana', 'pineapple'],
	purple: ['grape', 'plum'],
  };


function getCollor(color) {
	return fruitsByColor[color] || Object.keys(fruitsByColor);
}

console.log(getCollor('purple'));




function getDrink(key) {
	return 'the drink i chose was ' + {
		'cola': 'CocaCola',
		'pepsi': 'Pepsi',
		'viski': 'Jack Daniels'
	}[key];
}


console.log(getDrink('cola'));



const hotel = {
	name: 'Resort Hotel',
	stars: 5,
	capacity: 100,
  };



// for (const key in hotel) {
// 	console.log(hotel[key])
// }


  const entries = Object.entries(hotel);
//   console.log(key);

  for(let entry of entries) {
	  const key = entry[0];
	  const value = entry[1];

	  console.log(`${key} -- ${value}`);

  }

  const goods = {
	apples: 6,
	grapes: 3,
	bread: 4,
	cheese: 7,
  };

  
  
  function sum(obj) {
	let total = 0;
	let values = Object.values(obj);
	for(let key of values) {
		total += key;
	}
	return total;
  }

  console.log(sum(goods));

  //================= spred ==============

  const a = { x: 1, y: 2 };
  const b = { x: 0, z: 3 };

  const c = {...a, ...b};
  console.log(c);
  console.log(a);
  console.log(b);


  /*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasks = {
	ann: 29,
	david: 35,
	helen: 1,
	lorence: 99
  };

  let name;
  let max = 0;
  for(let key in tasks) {
	  if(max < tasks[key]) {
		  max = tasks[key];
		  name = key;
		}
	}
	console.log(`${max} -> ${name}`)

//=======================


/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/



function countProps(obj){
	return  Object.keys(obj).length
	
}

// Вызовы функции для проверки
console.log(
	countProps({})
  ); // 0
  
  console.log(
	countProps({a: 1, b: 3, c: 'hello'})
  ); // 3


//===================

	/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

function isObjectEmpty(obj) {
	return  Object.keys(obj).length === 0;

}

// Вызовы функции для проверки
console.log(
	isObjectEmpty({})
  ); // true
  
  console.log(
	isObjectEmpty({a: 1})
  ); // false
  
  console.log(
	isObjectEmpty({a: 1, b: 2})
  ); // false

  //=======================

  /*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

// Вызовы функции для проверки
console.log(
	countTotalSalary({})
  ); // 0
  
  console.log(
	countTotalSalary({
	  mango: 100,
	  poly: 150,
	  alfred: 80
	})
  ); // 330
  

  
  function countTotalSalary(salaries) {
	 let total = 0;
	 for(let key in salaries) {
		 total += salaries[key];
	 }
	 return total
  }


  //=====================

  /*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [
	{ name: 'Poly', age: 7, mood: 'happy' },
	{ name: 'Mango', age: 4, mood: 'blissful'},
	{ name: 'Ajax', age: 3, mood: 'tired' }
  ];

  

  function getAllPropValues(arr, prop) {
	  let newMass = [];
	  for(let key of arr) {
		  if(key[prop] === 0 || key[prop]) {
			  newMass.push(key[prop])
		  }
	  }
	  return newMass;
  }
  
  // Вызовы функции для проверки
  console.log(
	getAllPropValues(users, 'name')
  ); // ['Poly', 'Mango', 'Ajax']
  
  console.log(
	getAllPropValues(users, 'mood')
  ); // ['happy', 'blissful', 'tired']
  
  console.log(
	getAllPropValues(users, 'active')
  ); // []


  //==================== 
  /*
* Есть два массива names и prices с именами и ценами товаров.
* Напишите функцию combine(names, prices), которая получает 
* эти два массива и возвращает массив объектов со свойствами name и price. 
*/

// const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// function combine(name, price) {
// 	let	name2;
// 	let price2;
// 	for(let key of name) {
// 		name2 = key;
// 	}

// 	for(let key of price) {
// 		price2 = key;
// 	}
// }

// const products = combine(names, prices);
// console.log(products); // массив объектов со свойствами name и price


/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/


function findLongestWord(str) {
	let LongestWord;
	let count = 0;
	let newstr = str.split(' ');

	for(let key of newstr) {
		if(count < key.length) {
			count = key.length;
			LongestWord  = key;
		}
	}
	return LongestWord;
}


// Вызовы функции для проверки
console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
  ); // 'jumped'
  
  console.log(
    findLongestWord("Google do a roll")
  ); // 'Google'
  
  console.log(
    findLongestWord("May the force be with you")
  ); // 'force'
	
  
  /*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

const uniqueNumbers  = [2, 1, 4, 9];

function addUniqueNumbers(...rest) {
	for(let findNumbers of rest) {
		if(!uniqueNumbers.includes(findNumbers)) {
			uniqueNumbers.push(findNumbers)
		}

	}
	return uniqueNumbers;
}


// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19, 5, 8]




/*
  Напиши функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

// const filterFromArray = function(arr, ...rest) {
// 	let newArr =[];
// 	for(let key of arr) {
// 		if(!rest.includes(key)) {
// 			newArr.push(key);
// 		}
// 	}
// 	return newArr;
// }; 

// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]


// function first(x) {
// 	console.log(1)
// 	x();
// }

// function second(a,b) {
// 	console.log(a+b)
// }

// first(function(){
// 	second(2,3)
// });



// let count = (function(){
// 	let counter = 0;
// 	return function(num){
// 		counter = num !== undefined? num: counter;
// 		return counter ++;
// 	}
// }())


// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

// console.log(count(0));
// console.log(count());
// console.log(count());
// console.log(count());


// let name2 = 'Maksim';
// let age = 3;
// let lastName = 'Norets';
// let isActive = true;



// const about = {
// 	name2,
// 	age,
// 	lastName,
// 	isActive,
// 	show(){
// 		return about.age + 10;
// 	},
// 	showHeight: function(){
// 		return about.height -11;
// 	}
// }


// about.name = 'Pasha';
// about.height = 191;


// console.log(about.show());
// console.log(about.showHeight());

// // delete about.name

// // const showUser = (a, num) => about[a] >= num? console.log('ok'): console.log('ne Ok')

// console.log(about.height);

// function show(a,b) {
// 	if(!about[a]>= b) {
// 		return true;
// 	} else {
// 		return false
// 	}

// } 





// console.log(show('height', 400));

// const newObj = about.hasOwnProperty('name');	
// console.log(newObj);

// console.log('-----------------------------')


// const key = 'person';
// const getKey = () => 'age';

// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2
// };

// console.log(object);




// const cars = {
// 	color: 'red',
// 	wheels: 4,
// 	doors: 5,
// 	music: true
// }

// for(let key in cars) {
// 	console.log(cars[key]);
// }

	// const keys = Object.keys(cars);
	// console.log(keys);

	// const values = Object.values(cars);
	// console.log(values)

	// const entries2 = Object.entries(cars);
	// console.log(entries2)

	// for(let key of entries2) {
	// 	// console.log(key);
	// 	let newKey = key[0];
	// 	let newValues = key[1];

	// 	console.log(`${newKey}--${newValues}`)
	// }

	// const bmw = {
	// 	wheels: 2,
	// 	doors: 4,
	// 	ego: true

	// }

	// let day = 'ego';

	// console.log(bmw[day])




	// const {wheels = 0, doors = 4, ego = false} = bmw;

	// console.log(wheels);


// const c2 = {...cars, ...bmw}

// console.log(c2)
// 	// Object.assign(bmw, cars);

// 	// console.log(showObj);
// 	// console.log(cars);
// 	// console.log(bmw);



//============================ this ======================



function thisFn() {
	console.log(this)
}

thisFn();


const cars = {
	color: 'red',
	wheels: 4,
	doors: 5,
	music: true,
	getName(){
		console.log(this.wheels);
	}
}

cars.getName()


function showName() {
	console.log(this.model);
}


// showName();

const car = {
	model: 'Tesla'
}

car.show = showName;
car.show();


console.log(car)


const showThis =()=> console.log('this is THIS', this);

showThis();



const ShowThis = {
	name : 'Bond',
	getName(){
		// const fn =()=> this;
		// console.log( fn() );
		console.log(this);
	}
}

// ShowThis.show = showThis;
// ShowThis.show();
// ShowThis.getName();


const fn = function( callback ) {
	callback();
}


fn(ShowThis.getName.bind(ShowThis));





const greet = function () {
	return `Wellcome to ${this.name}`
}

const NameHotel = {name: 'Villa de'}

// NameHotel.wellcome = greet;

// console.log(NameHotel.wellcome());

// delete NameHotel.wellcome;

console.log(greet.call(NameHotel));

console.log('wellcome' in NameHotel)





const hello = function(hello) {
	return `${hello} my friend ! Are you ${this.name} ?`
}

const admin = {
	name: 'Ben',
	getSome() {
		console.log(this)
	}
}

// console.log(hello.call(admin, 'bonjure'))

// const newHello = hello.bind(admin, 'Alloha');

// console.log(newHello());

const getFn = function(callback) {


	callback();
}

getFn(admin.getSome.bind(admin));

console.log('--------------------')


function ABOUT (name, age, height) {
	this.name = name;
	this.age = age;
	this.height = height;
	this.showName = function() {
		console.log(`hello ${this.name}`)
	};
	this.plusAge = function() {
		this.age += 1;
		console.log(`after that you have only ${this.age}`)
	}
}


const about = new ABOUT('Maksim', 10, 190);
about.showName();
about.plusAge();
console.log(about);

const doubleAbout = new ABOUT('Pasha', 29, 200);
console.log(doubleAbout);


//================= shop ====================

const monro = {
	name : 'Monro',
	sales : 5,
	sell(product) {
		this.sales +=1;
		return  (`sale ${product}`)
	}
}

console.log(monro.sell('telephone'));

console.log(monro);


//=============== construct shop ===========

const SHOP = function(name = 'manager', sales = 0) {
	this.name = name;
	this.sales = sales;
	this.sell = function(product) {
		this.sales += 1;
		return `sold ${product}`
	};
}


const firstMonro = new SHOP('Monro');
console.log(firstMonro.sell('tv'));
console.log(firstMonro.sell('iron'));
console.log(firstMonro.sell('mobile'));

console.log(firstMonro);


const secondManager = new SHOP('Dusia');
console.log(secondManager);




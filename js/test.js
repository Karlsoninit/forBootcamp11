'use strict'

// /*  
//   Есть массив уникальных чисел uniqueNumbers.

//   Написать функцию, addUniqueNumbers(...), 
//   которая получает произвольное кол-во чисел как аргументы, 
//   и добавляет в массив uniqueNumbers только уникальные,
//   а те которые в массиве уже есть игнорирует.
// */

// const uniqueNumbers = [2, 1, 4, 9];

// function addUniqueNumbers(...arg) {
//     for (let key of arg) {
//         if (!uniqueNumbers.includes(key)) {
//             uniqueNumbers.push(key);
//         }
//     }
//     return uniqueNumbers;
// }


// // Вызовы функции для проверки

// addUniqueNumbers(1, 2, 3);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3]







// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//     uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//     uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]


// console.log(!true)




// console.log('---------------------------')

// /*
//   Напиши функцию filterFromArray(arr), которая 
//   объявляет 1 параметр, исходный массив arr.

//   При вызове функции, первым аргументом всегда будет массив чисел,
//   за которым следуют один или несколько аргументов, тоже чисел. 

//   Функция возвращает новый массив, который содержит только 
//   те элементы исходного массива, которые не совпадают 
//   ни с одним из числовых аргументов.
// */

// const filterFromArray = function (arr, ...arg) {
//     let newMass = [];
//     for (const key of arr) {
//         // console.log(key)
//         if (!arg.includes(key)) {
//             newMass.push(key);
//         }
//     }
//     return newMass;
// };

// // Вызовы функции для проверки

// console.log(
//     filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//     filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]



console.log('----------------------')



// function b() {
//     console.log('Выполняется [b]');
//   }

//   function a() {
//     console.log('Начала выполняться [a]');
//     b();
//     console.log('Продолжила выполняться [a] после выхода из [b]');
//   }


//   console.log('Начал выполнение [global]');


//   a();
//   console.log('Продолжил выполняться [global] после выхода из [a]');



// function first(callback) {

//     setTimeout(function(){
//         console.log(1)

//     },4000)
//     callback();
// }

// function second(a,b) {

//     console.log(a + b)
// }

// // first(second);

// first(() => {
//     return second(2,2)
// });




// function first(callback) {
//     console.log(1)
//     // callback();
//     callback();
// }

// function second() {
//     console.log(2)
// }



// first(second)



// const printMessage = function (callback) {

//     const message = callback();
//     console.log( message );
//   };

//   const getMessage = function () {
//     return "Welcome to the jungle!";
//   }


//   printMessage(getMessage); 



// const map = (arr, callback) => {
//     const resultArr = [];

//     for(const element of arr) {
//       const result = callback(element);
//       resultArr.push(result);
//     }

//     return resultArr;
//   };


//   const numbers = [1, 2, 3, 4, 5];


//   const double = val => val * 2;

//   const triple = val => val * 3;


//   const doubledNumbers = map(numbers, double);
//   console.log(doubledNumbers);

//   const tripledNumbers = map(numbers, triple);
//   console.log(tripledNumbers); 





// const map = function (arr, callback) {
//     const newMass = [];

//     for (const key of arr) {
//         const result = callback(key)
//         newMass.push(result);
//     }

//     return newMass;
// } 


// const minus = a => a - 5;

// const numbers = [1,3,6,8,3,9];



// const plus = function(el) {
//     return el + 5
// }



// const newMap = map(numbers, minus);
// console.log(newMap);

// const newPlus = map(numbers, plus);
// console.log(newPlus);





// function fn() {
//     let counter = 0;

//     function increment() {
//         console.log(counter);
//         counter ++;
//         return counter;

//     }
//     return increment;
// }

// // console.log(fn());

// const newFn = fn();

// newFn();
// newFn();
// newFn();
// newFn();
// newFn();

// const res = newFn();
// console.log(res);


// console.log('------------------')




// let count = (function(){
//     let counter = 0;
//     return function(num){
//         counter = num !== undefined? num: counter;
//         return counter ++;
//     }
// }())


// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

// console.log(count());
// console.log(count(9));
// console.log(count());
// console.log(count());




//================= this ==============


// const name = {
//     name : 'Maksim',
//     getName() {
//         console.log(this);
//     }
// }

// name.getName();






// const itsMe = {
//     name: 'Maksim',
//     fn() {
//         return `hello ${this.name}`
//     }
// }



// itsMe.showMe = fn;

// console.log(itsMe.showMe());




// const newFn = () => console.log(this);
// newFn();


//================ callback ===========

const itsMe = {
    name: 'Maksim',
    fn() {
        console.log(this);
    }
}

// itsMe.fn();

const fnDouble = function(callback) {

    callback()
}

// fnDouble(itsMe.fn);

fnDouble(itsMe.fn.bind(itsMe));




console.log('-----------------------------------')

function fnMe(age) {
    return `hello ${this.name} ${age} ${this.height} `
}


const Me = {
    name: 'Maksim',
    height : 191
}



// Me.showMe = fnMe;

// console.log(Me.showMe());


// delete Me.showMe


// console.log(fnMe.call(Me, 11))

// console.log(Me)

console.log('-----------------------------------------------------------------------------------')

function DOUBLE(name = 'default', age = 10, height = 140) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.plus = function(el) {
        return this.age = this.age + el;
    };
    this.minus = function() {
        this.height -= 10;
        console.log(`${this.height} ${this.name}`);
    }
}



const double = new DOUBLE('Maksim', 3, 191);
double.mass = 100;
double.plus(10);
double.minus();
console.log(double);

const triple = new DOUBLE('Pasha', 4, 210);
triple.minus();
triple.plus(30);
console.log(triple);


const test = new DOUBLE('Bond',1,210);
console.log(test);


function SHOP(name, sell = 0, change = 10){
    const defaultDouble = 6;
    this.name = name;
    this.sell = sell;
    this.change = change;
    this.plus = function(product) {
        this.sell+= 1;
        this.change -=1;
        console.log(` -----> ${ product } <-----`) 
    }
    this.alarm = function() {
        if(this.change < defaultDouble) {
            alert('alarm')
        }
    }
}


const margo = new SHOP('Margo');
margo.plus('iron');
margo.plus('tv');
margo.plus('fen')
margo.plus('fen')
margo.plus('fen')



// margo.alarm();
console.log(margo)


const add = {
    name: 'Maksim'
};

console.log(Object.keys(add).length > 0)


function User({name, age, friends}) {
    this.name = name;
    this.age = age;
    this.friends = friends;
    this.getInfo = function() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`)
    }
} 

/*  
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  будут переданы при вызове конструктора User.
  
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/

const mango = new User({ name: "Mango", age: 2, friends: 20 });
mango.getInfo(); // User Mango is 2 years old and has 20 friends

const poly = new User({ name: "Poly", age: 3, friends: 17 });
poly.getInfo(); // User Poly is 3 years old and has 17 friends



//=====================


function Storage(items) {
    this.items = items;
    this.getItems = function() {
        return this.item = this.items;
    },
    this.addItem = function(el){
       return this.items.push(el)
    },
    this.removeItem = function(el) {
        if(this.items.includes(el)){
            this.items.splice(el, 1)
        }
    }
}


const storage = new Storage([
    "Нанитоиды",
    "Пролонгер",
    "Железные жупи",
    "Антигравитатор"
  ]);
  
  const items = storage.getItems();
  console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem("Дроид");
  console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem("Пролонгер");
  console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
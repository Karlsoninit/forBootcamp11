'use strict'






// const numbers = [1,2,3,4,5];

// const mass = []

// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// console.log(mass);




// const newArr = numbers.forEach(el => mass.push(el *2));
// console.log(newArr);

// console.log(mass);


// const map = numbers.map(function(a){
//     return a * 2 ;
// })

// console.log(map);
// console.log(numbers)


// const users = [
//     { name: "Mango", daysInactive: 10, isActive: true },
//     { name: "Poly", daysInactive: 5, isActive: false },
//     { name: "Ajax", daysInactive: 12, isActive: true }
//   ];


//   const showUsers = users.map(el => ({...el, isActive: el.daysInactive < 7}))

//   console.log(showUsers);



// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// const filter = numbers.filter(el => el === 9 );
// console.log(filter)
// console.log(numbers)


// const users = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: false },
//     { name: "Ajax", isActive: true },
//     { name: "Chelsey", isActive: false }
//   ];



//   const findUsers = users.filter(el => el.isActive ).map(el =>  el.name);

//   console.log(findUsers)

//======================= find ====================


// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// const filter = numbers.find(el => el === 5 );
// console.log(filter)










// const users = [
//     { id: "000", name: "Mango", isActive: true },
//     { id: "001", name: "Poly", isActive: false },
//     { id: "002", name: "Ajax", isActive: true },
//     { id: "007", name: "Bond", isActive: false }
//   ];




//   const find = users.find(el => el.id === '007');
//   let name;
//   for(let key in find) {
//       console.log(find[key]);
//         if(key === 'name') {
//             name = find[key]
//         }
//   }


//   console.log(name);
//   console.log(typeof find);



// function find(arr, copyId) {
//     let newArr = arr.find(el => el.id === copyId)
//     return newArr;
// }



// console.log(find(users, '001'));




console.log([1,2,3,4,5].every(el => el > 4))







// function add(el) {
//     for(let i = 0; i < el.length; i++) {
//        el[i] =  el[i] * 2;
//     //    console.log(el[i] * 2)
//     }
// }

// const numbers = [1,2,3,4,5];

// add(numbers);

// console.log(numbers);

//=================================================================

// function add(el) {
//     const result = []
//     for(let i = 0; i < el.length; i++) {
//        result.push( el[i] * 2)
//     //    console.log(el[i] * 2)
//     }
//     return result;
// }

// const numbers = [1,2,3,4,5];



// const showResult = add(numbers);

// console.log(showResult);
// console.log(numbers);

//============== forEach ================

// const numbers3 = [1,2,3,4,5,6,7];

// numbers3.forEach(function(num,ind) {

//     console.log(num, ind)
// });


//==================== map ===================

// const numbers3 = [1,2,3,4,5,6,7];

// const map = numbers3.map(function(num){
//     return num * 2;
// })

// console.log(map);
// console.log(numbers3)

// const users = [
//     { name: "Mango", daysInactive: 10, isActive: true },
//     { name: "Poly", daysInactive: 5, isActive: false },
//     { name: "Ajax", daysInactive: 12, isActive: true }
//   ];

//   const showUser = users.map(user => ({...user, isActive: user.daysInactive > 7}))


//   console.log(showUser);


  //=============================== filter =====================


//   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//   const filter = numbers.filter(function(num){
//       return num <= 7;
//   })

//   console.log(filter)


//   const users = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: false },
//     { name: "Ajax", isActive: true },
//     { name: "Chelsey", isActive: false }
//   ];


//   const showUsers = users.filter(function(user){
//     return user.isActive
//   })

//   console.log(showUsers);



  //=================== find ============

//   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//   const find = numbers.find(function(el){
//     return el === 5
//   })

//   console.log(find)

//   const users = [
//     { id: "000", name: "Mango", isActive: true },
//     { id: "001", name: "Poly", isActive: false },
//     { id: "002", name: "Ajax", isActive: true },
//     { id: "003", name: "Chelsey", isActive: false }
//   ];

//   const findUser = users.find(function(user){
//       return user.id === "002"
//   })

//  function findId(arr, el) {
//     return  arr.find(function(x) {
//          return x.id === el;
//      })
//  }

// //   console.log(findUser)
//   console.log(findId(users,'002'))

//=============== some every =============


// function add(el) {
//     return    el >= 8
// }

// console.log([1,2,3,4,5,6].some(add))


  //======================= reduce ========================

//   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//   const reduce = numbers.reduce(function(acc, el) {
//       return acc + el
//   },0)

//   console.log(reduce);


//   const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];

//   const tweetsReduce = tweets.reduce(function(acc, el){
//       return acc + el.likes
//   },0)



//   console.log(tweetsReduce);



  //======================


  /*
  Напиши функцию , где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  Используй метод reduce.
*/


// function getTotal(products, order) {
//     let result = [];
//     for(let key in order) {
//         result.push(products[key] * order[key])
//     }
//     return result.reduce((acc, el) => acc + el,0);
// }

// const products = {
//     bread: 10,
//     milk: 15,
//     apples: 20,
//     cheese: 30,
//     chicken: 40
//   };
  
//   const orderA = {
//     bread: 2,
//     apples: 4,
//     chicken: 1
//   };
  
//   const orderB = {
//     bread: 1,
//     milk: 2,
//     cheese: 2,
//     apples: 1
//   };
  
//   const orderC = {
//     bread: 2,
//     cheese: 2
//   };
  
//   // Вызовы функции для проверки
//   console.log(getTotal(products, orderA)); // 140
//   console.log(getTotal(products, orderB)); // 120
//   console.log(getTotal(products, orderC)); // 80
  


  /*
* Напиши функцию getTotal(order), которая получает обьект заказа с продуктами и их ценой.
* Функция возвращает число - общую стоимость заказа.
* 
* Используй метод reduce.
*/


// function getTotal(order){
//    let result = Object.values(order).reduce((acc, el) => acc + el, 0);
//    return result;
// }

// console.log(getTotal({ apples: 25, chicken: 60, milk: 15 })); // 100

// console.log(getTotal({ bread: 10, apples: 25, milk: 15, cheese: 40 })); // 90

// console.log(getTotal({ bread: 10, chicken: 60, cheese: 40 })); // 110


/*
  Напишите функию findGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

// function getGuestById(guests, id) {
//     return guests.find(el => el.id === id)
// }

// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
//   ];

 
  
//   // Вызовы функции для проверки
//   console.log(
//     getGuestById(guests, 3)
//   ); // {id: 3, name: 'Ajax', age: 30}
  
//   console.log(
//     getGuestById(guests, 1)
//   ); // {id: 1, name: 'Mango', age: 20}
  
//   console.log(
//     getGuestById(guests, 5)
//   ); // undefined


















  
// const scientist = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
// },
// {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
// },
// {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
// },
// {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
// },
// {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
// },
// {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
// },
// {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
// },
// {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
// },
// {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
// },
// {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
// },
// {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
// },
// {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
// }
// ];
// const wasBorn = scientist.filter(el => el.year >= 1800);
// console.log(wasBorn);

// const live = scientist.reduce((acc,el) => ( el.passed - el.year) + acc,0);
// console.log(live)

// const alf = scientist.sort((a,b) => {
//     return a.first > b.first? 1:-1
// })

// console.log(alf)

// 1) отримати масив вчених що народилися в 19 ст
// 2) знайти суму років скільки прожили всі вченні
// 3) Відсортувати вчених по алфавіту
// 4) Відсортувати вчених по даті народження
// 5) Відсортувати вчених по кількості прожитих років
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// 7) Знайти вченого який народився найпізніше.
// 8) Знайти рік народження Albert Einstein
// 9) Знайти вчених прізвище яких починається на літеру С
// 10) Видалити з масива всіх вчених імя яких починається на A







// const numbers = [1, 2, 3, 4, 5];

// let result = 0;
// for(let key of numbers) {
//     result = result +  key;
// }

// console.log(result);

// const showResult = numbers.reduce((acc, el) => acc + el, 0);


// console.log(showResult)


// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];


//   const reduce = tweets.reduce(function(acc, el) {
//       return console.log(el)
//   });
  
//   console.log(reduce);


// const tags = tweets.reduce(
//     (acc, tweet) => tweet.tags ? acc.concat(tweet.tags) : acc, []
//   );

//   console.log(tags);



//   console.log([1,5,8,3,2].sort())




// function findGreaterThan(num, arr){
//     let filter = arr.reduce(function(acc, el) {
//         return el > num;
//     },0)
//     return filter;
// }



// console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
// console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
// console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]





// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];

//   function getPropValues(arr, name) {
//       const findName = arr.map(el => el[name])
//       return findName
//   }


  
//   // Вызовы функции для проверки
//   console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
//   console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
//   console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]





  
// const guests = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true }
//   ];


//   function setGuestState(guests, period) {
//       const newF = guests.map(el => ({...el, isActive: el.inactiveDays < period}))
//       return newF;
//   }


  
//   // Вызовы функции для проверки
//   console.log(
//     setGuestState(guests, 10)
//   ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
  
//   console.log(
//     setGuestState(guests, 20)
//   ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
  
//   console.log(
//     setGuestState(guests, 50)
//   ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true


  
/*
  Напиши функию getActiveGuests(guests), принимающую массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей, значение поля isActive которых true.
         
  PS: обязательно используй перебирающие методы массивов, никаких for!
//   */
//  function getActiveGuests(arr) {
//      let show = arr.filter(el =>  el.isActive)
//      return show
//  }

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
  


//   // Вызовы функции для проверки
//   console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax



/*      
  Напиши функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста для сортировки. 
  
  Функция возвращает массив объектов значение свойства age которых больше чем параметр age.
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

 function getGuestsOlderThan(guests, age) {
     const show = guests.filter(el => el.age > age)
     return show;
 }


const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
  ];
  
  // Вызовы функции для проверки
  console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
  
  console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
  
  console.log(getGuestsOlderThan(guests, 55)); // []
  

//   var arr = [1, 2, 3, 4, 5];
//   let arr2 = [1,2,3]
// var data = [...arr, ...arr2];
// console.log(data); // [1, 2, 3, 4, 5]

// const newArr = {
//     a:1,
//     b:2
// }

// const newArr2 = {
//     a: 5,
// }

// const after = {...newArr, ...newArr2};

// console.log(after)



const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    cheese: 30,
    chicken: 40
  };
  
  const orderA = {
    bread: 2,
    apples: 4,
    chicken: 1
  };
  
  const orderB = {
    bread: 1,
    milk: 2,
    cheese: 2,
    apples: 1
  };
  
  const orderC = {
    bread: 2,
    cheese: 2
  };

function getTotal(prod, el) {
    let result = [];
    for(let key in el) {
        result.push(el[key] * prod[key]);
    }
    return result.reduce((acc, el) => acc + el,0)
}

  
  // Вызовы функции для проверки
  console.log(getTotal(products, orderA)); // 140
  console.log(getTotal(products, orderB)); // 120
  console.log(getTotal(products, orderC)); // 80
  
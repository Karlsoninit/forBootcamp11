'use strict'



// const obj = {}

// console.log(obj);


// const parents = {
//     parentsProp : 'This is parent',
//     a : 10
// }

// const child = {
//     childProp: 'This is child'
// }


// child.__proto__ = parents;



// const child = Object.create(parents);

// child.childProp = 'This is child';
// child.a  = 10;



// for(let key in child) {
//     console.log(key)
// }


// console.log(child);


// const methods = {
//     showName() {
//         console.log(this.name)
//     },
//     changeName(name) {
//         this.name = name;
//     }
// }



// const obj = Object.create(methods);

// obj.name = 'Maksim';



// console.log(obj);

// function plusName(name) {
//     const obj = Object.create(methods);
//     obj.name = name;
//     return obj;
// }


// const maksim = plusName('maksim');

// console.log(maksim)











/*
 * Используя массив (users) объектов пользователей, напишите функции которые с помощью 
 * функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.
 */

/**
 * Получить массив имен (поле name) всех пользователей
//  */
//       const users = [
//         {
//           id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//           name: 'Moore Hensley',
//           email: 'moorehensley@indexia.com',
//           eyeColor: 'blue',
//           phone: '+1 (848) 556-2344',
//           friends: ['Sharron Pace'],
//           isActive: false,
//           balance: 2811,
//           skills: ['ipsum', 'lorem'],
//           gender: 'male',
//           age: 37,
//         },
//         {
//           id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//           name: 'Sharlene Bush',
//           email: 'sharlenebush@tubesys.com',
//           eyeColor: 'blue',
//           phone: '+1 (855) 582-2464',
//           friends: ['Briana Decker', 'Sharron Pace'],
//           isActive: true,
//           balance: 3821,
//           skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//           gender: 'female',
//           age: 34,
//         },
//         {
//           id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//           name: 'Ross Vazquez',
//           email: 'rossvazquez@xinware.com',
//           eyeColor: 'green',
//           phone: '+1 (814) 593-3825',
//           friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//           isActive: false,
//           balance: 3793,
//           skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit',],
//           gender: 'male',
//           age: 24,
//         },
//         {
//           id: '249b6175-5c30-44c6-b154-f120923736f5',
//           name: 'Elma Head',
//           email: 'elmahead@omatom.com',
//           eyeColor: 'green',
//           phone: '+1 (909) 547-2687',
//           friends: ['Goldie Gentry', 'Aisha Tran'],
//           isActive: true,
//           balance: 2278,
//           skills: ['adipisicing', 'irure', 'velit'],
//           gender: 'female',
//           age: 21,
//         },
//         {
//           id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//           name: 'Carey Barr',
//           email: 'careybarr@nurali.com',
//           eyeColor: 'blue',
//           phone: '+1 (956) 512-2693',
//           friends: ['Jordan Sampson', 'Eddie Strong'],
//           isActive: true,
//           balance: 3951,
//           skills: ['ex', 'culpa', 'nostrud'],
//           gender: 'male',
//           age: 27,
//         },
//         {
//           guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
//           name: 'Blackburn Dotson',
//           email: 'blackburndotson@furnigeer.com',
//           eyeColor: 'brown',
//           phone: '+1 (876) 411-2433',
//           friends: ['Jacklyn Lucas', 'Linda Chapman'],
//           isActive: false,
//           balance: 1498,
//           skills: ['non', 'amet', 'ipsum'],
//           gender: 'male',
//           age: 38,
//         },
//         {
//           id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//           name: 'Sheree Anthony',
//           email: 'shereeanthony@kog.com',
//           eyeColor: 'brown',
//           phone: '+1 (979) 504-2554',
//           friends: ['Goldie Gentry', 'Briana Decker'],
//           isActive: true,
//           balance: 2764,
//           skills: ['lorem', 'veniam', 'culpa'],
//           gender: 'female',
//           age: 39,
//         },
//       ];
// const getAllNames = arr => arr.map(i => i.name);

// console.log(getAllNames(users)); 
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

                            
// /**
//  * Получить массив объектов пользователей по цвету глаз (поле eyeColor)
//  */
// const getUsersByEyeColor = (arr, color) => arr.filter(i => i.eyeColor === color);

// console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

                                            
// /**
//  * Получить массив имен пользователей по полу (поле gender)
//  */
// const getUsersByGender = (arr, gender) => arr.filter(i => i.gender === gender).map(i => i.name);

// console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// /**
//  * Получить массив только неактивных пользователей (поле isActive)
//  */
// const getInactiveUsers = arr => arr.filter((i) => i.isActive === false);

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
                      
                                 
// /**
//  * Получить пользоваля (не массив) по email (поле email, он уникальный)
//  */
// const getUserByEmail = (arr, email) => arr.find(i => i.email === email);

// console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// /**
//  * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
//  */
// const getUsersWithAge = (arr, min, max) => arr.filter(i => i.age >= min && i.age <= max);

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
                                            
// console.log(getUsersWithAge(users, 30, 40)); 
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
                                 
                                 
// /**
//  * Получить общую сумму баланса (поле balance) всех пользователей
//  */
// const getTotalBalance = arr => arr.reduce((acc,el) => acc + el.balance,0);

// console.log(getTotalBalance(users)); // 20916
                                
                                
// /**
//  * Массив имен всех пользователей у которых есть друг с указанным именем
//  */
// const getUsersByFriend = (arr, name) => arr.filter(i => i.friends.find(i => i === name));

// console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
                                            









// const newShow = users.reduce((acc,el) => console.log(users.skills))


// console.log(newShow);


















// const getAllUniqueSkills = users.reduce((acc, user) => user.skills ? acc.concat(user.skills): acc, []);


// const getAllSkills = getAllUniqueSkills.reduce((acc, current) =>{
//     console.log(current)
//   if (!acc.includes(current)) {
//     acc.push(current);
//   }
//   return acc;
// }, []);
// console.log(getAllSkills.sort());






//=============== Dom ============


// document.querySelector('#out').innerHTML = "<p>Hello my friens<p>";







































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



// const he =  {
//     name: 'Maksim',
//     age: 29
// }


// const she = Object.create(he);

// she.name = 'Marusia';




// const she = {
//     name: 'Marusia',
//     age: 22,
//     has: true,
// }


// she.__proto__ = he;

// console.log(he.hasOwnProperty(name));


// const methods = {
//     showName(){
//         console.log(this.name)
//     },
//     changeName(){
//         this.name = name;
//     }
// }

// function createObj(name) {
//     const obj = Object.create(methods);
//     obj.name = name;
//     return obj;

// }



// const maksim = createObj('Ben');

// console.log(maksim);

// function User(name) {
//     this.name = name;
//     // this.showName = function() {
//     //     console.log(this.name);
//     // }
// }

// User.prototype.showName = function() {
//     console.log(this.name);
// }

// User.prototype.ChangeName = function(name) {
//     this.name = name;
// }


// console.log(User.prototype);

// const newName = new User('maksim');

// // console.log(newName);

// newName.showName();
// newName.ChangeName('Ben')
// newName.showName();

// console.log(newName)







//==================================================







// const Hero = function(name, level) {
//     this.name = name;
//     this.level = level;
// }

// Hero.prototype.greed = function() {
//     console.log(`Hello i am ${this.name}`)
// }



// const Warrior = function(name, level, weapon) {
//     Hero.call(this, name, level)
//     this.weapon = weapon;
// }

// Warrior.prototype.atack = function() {
//     console.log(`i kill you ${this.name} i do kill ${this.weapon}`)
// }

// // Warrior.prototype = Object.create(Hero.prototype);

// Warrior.prototype = Object.create(Hero.prototype)
// Warrior.prototype.constructor = Warrior;


// const newHero = new Hero('Halk', 12);
// const newWarrior = new Warrior('Supermen', 80, 'bulava' )



// // console.log(newHero);
// console.log(newWarrior);


//=================================== constructor =================


// const User = function(name, level){
//     this.name = name;
//     this.level = level;
// }

// User.prototype.showName = function() {
//     console.log(this.naem);
// }

// User.prototype.ChangeLavel = function(level) {
//     console.log(this.level += level);
// }

// const newUser = new User('Bond', 7);

// newUser.ChangeLavel(10);


// const Warrior = function(name, level, weapon) {
//     User.call(this, name, level)
//     this.weapon = weapon;
// }


// Warrior.prototype.attack = function() {
//     console.log(`${this.name} -- ${this.weapon}`)
// }

// const warrior = new Warrior('Hero', 1, 'hren')
// Warrior.prototype = Object.create(User.prototype)

// console.log(warrior.attack())

// class User {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }

//     get name() {
//         return this._name
//     }

//     set name(value) {
//         this._name = value
//     }

//     changeAge(age) {
//         this.age += age;
//     }

//     getName() {
//         return this.name
//     }
// }


// const user = new User('Bond', 23);
// user.changeAge(10)
// user.name = 'Maksim'

// console.log(user.name)

// console.log(user); 








//==========

/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// class StringBuilder {
//     constructor(string) {

//     }
// }

// const builder = new StringBuilder('.');

// builder.append('^'); 
// console.log(builder.value); // '.^'

// builder.prepend('^'); 
// console.log(builder.value); // '^.^'

// builder.pad('='); 
// console.log(builder.value); // '=^.^='





// const he = {
//     name: 'Bond',
//     number: 7,
//     getName() {
//         console.log(this.name);
//     }
// }





// const it = {
//     name: 'Drago',
//     level: 999,
// }


// he.getName();

// // const she = {
// //     name: 'Julia',
//     age: 32,
// }


// he.__proto__ = she;


// let she = Object.create(he)

// she = Object.create(it);


// she.name = 'Julia';
// she.age = 50;
// she.boobsPower = 4;


// console.log(he)
// console.log(she);

// for(let key in she) {
//     if(she.hasOwnProperty(key))
//     console.log(key)
// }



// function DRAGON(name = 'only name', level = 0) {
//     this.name = name;
//     this.level = level;
// }
// DRAGON.prototype.getLevel = function(el) {
//     return this.level += el;
// }


// function small(n, level) {
//     DRAGON.call(this, n, level);
  
//     // this.weapon = weapon;
//   }


// small.prototype = Object.create(DRAGON.prototype); 




// const dubleSmall = new small('m', 1);
// console.log(dubleSmall);



 
// function DubleDrugon(na, level, weapon) {
    
    
//     this.weapon = weapon;
//     DRAGON.call(this, na, level);
// }





// DubleDrugon.prototype.newName = function (value) {
//     return this.name = value;
// }


// const duble = new DubleDrugon('Maks', 9999, 'falos');


// duble.newName('Ben')

// console.log(duble);






// const dragon = new DRAGON('Bond', 80);


// // dragon.newName('Yes')
// dragon.getLevel(10);







// console.log(dragon)

// const dragon2 = new DRAGON('Julia', 3);
// dragon2.getLevel(100)
// console.log(dragon2)

//========================== !!!!!!!!!!!!!!!!!!! ================

// const a = [{
//     DRAGON:0, 
// },
// {
//     SMALL:{
//         a: DRAGON
//     }
// }]

// console.log(a)






// class MyClass {
//     constructor(name ,xp = 100, level = 100) {
//         this._name = name;
//         this.xp = xp;
//         this.level  = level;
//     }

//     getName() {
//         console.log(this._name)
//     }

//     minus(el) {
//         return this.xp -= el 
//     }

//     dubleSuper() {
//         console.log(`${this.level}`)
//     }

//     get name() {
//         return this._name;
//     }
    
//     set name(value) {
//         return this._name = value;
//     }

//     static plus(...args) {
//         return args.reduce((acc, next) => acc * next, 1);
//     }
// }


// const myclass = new MyClass('Bond', 100, 80);

// console.log(myclass.name = 'Maksim')

// console.log(myclass)



// console.log(MyClass.plus(1,2,3));


// class NewClass extends MyClass {
//     constructor(name, xp, level,weapon){
//         super(name, xp, level)
//         this.weapon = weapon;
//     }    
    
//     minus(el){
//         return this.xp += el;
//     }    
    
    
//     move() {
//         console.log(`hello ${this.name}`)
//     }    
//     newSuper(){
//         super.dubleSuper();
//         this.move();
//     }    
    
    
    

// }    





// const newclass = new NewClass('Maksim',80,84,'Iron')

// // newclass.minus(110);
// // newclass.newSuper(50);
// // newclass.minus(100)

// newclass.move();
// newclass.dubleSuper();
// newclass.newSuper();

// console.log(newclass);








// myclass.getName();
// myclass.minus(10)
// console.log(myclass);

// const dubleClass = new MyClass('Julia', 20, 60);

// dubleClass.minus(20);

// dubleClass.top = 100

// delete dubleClass.name



// console.log(dubleClass);








// class StringBuilder {
//     constructor(str) {
//       this._value = str;
//     }
//     get value() {
//       return this._value;
//     }
//     append(str) {
//       return this._value += str;
//     }
//     prepend(str) {
//       return this._value = str += this._value;
//     }
//     // pad(str) {
//     //   return str + this._value + str;
//     // }
//   }
//   const builder = new StringBuilder('.');
//   console.log(builder.value);
//   builder.append('^');
//   console.log(builder.value); // '.^'
//   //
//   builder.prepend('^');
//   console.log(builder.value); // '^.^'
  //
  // builder.pad('=');
  // console.log(builde
  





  //====================== hw ============

  

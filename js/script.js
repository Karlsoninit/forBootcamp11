'use strict'


// const add = function(a,b,c) {
//     return a + b + c;
// }

// const result = add(1,2,3);
// console.log(result);


// const users = function(name = '"defoult"', age = '"i hope you have 18"') {
//     console.log(`hello, my name is ${name} i old ${age}`);
// }


// users('Maksim', 25);


// const sumFn = function() {
//     const max = arguments.length;
//     console.log(arguments)
//     let start = 0;

//     for(let i = 0; i < max; i++) {
//         start += arguments[i];
//     }
//     return start;
// }

// console.log(sumFn(1,2,3,4,5))

// const newFnArg = function()  {
//     const arr = Array.from(arguments);
//     console.log(arr)
//     let total = 0;

//     for(let key of arr) {
//         total += key;
//     }
//     return total;
// }

// console.log(newFnArg(1,2,3,4,5))


// const argFn = function(...rest) {
//     console.log(rest);
// }


// console.log(argFn(1,2,3,4,5))


// function showCentury(year) {
//     let result = Math.ceil(year / 100);
//     return `${year} рік - ${result} століття`;
// }
// console.log(showCentury(1988))




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



//   let first = 10;
//   let second = 4;

//   function addTest(a,b) {
//     return a + b;
//   }

//   console.log(addTest(first, second))


//   const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login) {
//   return login.length >= 4 && login.length <= 16;
// };

// const isLoginUnique = function (allLogins, login) {
//  return !logins.includes(login);
// };

// const addLogin = function (allLogins, login) {
//   if (isLoginValid(login)) {
//     if (isLoginUnique(allLogins, login)) {

//       logins.push(login);
//       console.log ('Логин успешно добавлен!');
//     } else{
//       console.log ('Такой логин уже используется!');
//     }
//   } else {
//     console.log ('Ошибка! Логин должен быть от 4 до 16 символов');
//   }
// };


// // // Вызовы функции для проверки
// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'






// // function getDivisors(num) {
// // 	var arr = [];
// // 	for (var i = 1; i <= num; i++) {
// // 		if (num % i == 0) {
// // 			arr.push(i);
// // 		}
// // 	}

// // 	return arr;
// // }

// // alert(getDivisors(4));


// var arr = [];
// for (var i = 0; i < 10; i++) {
// 	arr[i] = 'x';
// }
// console.log(arr);



// const add2 = function(even) {
//     return even % 2 === 0
// };


// const addResult = function(one) {
//     if(add2()){
//         console.log('Ok')
//     }
// }
// addResult(add2(3));





// function isEven(num) {
// 	if (num % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var result = [];
// for (var i = 0; i < arr.length; i++) {
// 	if(isEven(arr[i])) {
// 		result.push(arr[i]);
// 	}
// }

// console.log(result);





// const add2 = function(num) {
//     if (num % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// };

// let n = 7;

// const addResult = function(one) {
//     if(add2(n)){
//         console.log('Ok')
//     }
//     console.log('no')
// }
// addResult(add2(3));






// let res=0;
// let num;
// const arr = [];
// do{
//   num = prompt(`Enter num`);
//   if(!isNaN(num) && num.length > 0){
//   arr.push(num)
//   console.log(arr)
// }
//   } while(num!==null);
//   if(arr.length>0){
//     for(let sum of arr){
// res = res+Number(sum);
//     }
//   }


// alert(`Сумма: ${res}`)



















// const add = function(a,b,c) {
//   return  a + b + c;
// }


// console.log(add(10, 25));
// console.log(add(12,33,45))
// console.log(add(4,5,6))





// console.log(name(12,6)); //return name
// age(); // return age




// const name = function(a,b) {
//    return a + b;
// }

// function age() {
//     console.log('age')
// }

// console.log(name(12,6))





// function name(a,b) {
//     return  a + b
// }

// let new2 = name(1,50);
// let new3 = name(2,2)

// console.log(new3)
// console.log(new2);

// function result(a, b) {
//     console.log(a);
//     return a + b
// }

// const newResult = result(new2,10);

// console.log(newResult);


// for (let i = 0; i < mass; i++) {
//     total += arguments[i];
//     console.log(total);
// }







// let total = 0;

// function arg() {
//     let mass = Array.from(arguments);


//     for(let key of mass) {
//         total += key;
//     }
//     return total;
// }

// console.log(arg(1, 2, 3,3,4,6,8,965,33,2));


// console.log(total);

// let copytotal = 0

// function restMass(...arg) {

//     for(let key of arg) {
//         copytotal += key;
//     }

//     return copytotal;
// }

// restMass(1,6,33,77,9,0,334,3);
// console.log(restMass(1,6,33,77,9,0,334,3));


// let n = 30;

// function newFn(b) {
//     let n = 11;
//     console.log(b + n)
// }

// newFn(10)

// console.log(n)


// function fn(b) {
//     return b % 2 === 0;
// }
// function fn2(b) {
//     if(fn(b)){
//         alert('Ok')
//     } else {
//         alert('no')
//     }
// }

// fn2(3);

// {

//     const fn = b => {
//        return  b % 2 === 0
//     }

//     const fn2 = b => fn(b)? alert('ok'): alert('no');

//     fn2(4)
// }



// let number = '123456';
// let strin = number.split('');

// for (let i = 0; i < strin.length; i++) {

//     if (i % 2 !== 0) {

//         let b = strin[i - 1];
//         strin[i - 1] = strin[i];
//         console.log(strin)
//         strin[i] = b;

//     }
// }
// console.log(strin);



let str ='abcde abcde abcde';
let newArr = [];

let arr = str.split(' ');

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].toUpperCase() + arr.substr(1))
	newArr.push(first(arr[i]));
}

function first(str) {
    // console.log(str);
    // console.log(str[0].toUpperCase())
    // console.log(str.slice(1));
    
    return str[0].toUpperCase() + str.substr(1);

}

console.log(newArr);

function getDivisors(num) {
	let arr = [];
	for (var i = 1; i <= num; i++) {
		if (num % i == 0) {
			arr.push(i);
		}
	}
	
	return arr;
}

alert(getDivisors(12))


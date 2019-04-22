'use strict'

	// 'use strict'


	// let box = document.querySelector('.btn-box'),
	// 	btns = document.querySelectorAll('button');

	// console.log(btns)

	// box.addEventListener('click', function (event) {
	// 	if (event.target && event.target.matches('button.first')) {
	// 		event.target.style.display = 'none'
	// 	}
	// })


	// let image = document.querySelector('.images'),
	// 	photos = document.querySelectorAll('li');



	// function del(event) {
	// 	console.log(event.target.parentElement)
	// 	event.target.nodeName == 'IMG' ? event.target.style.display = 'none' : null
	// }

	// image.addEventListener('click', del)



	// let time = document.querySelector('.timeBox'),
	// 	nam = document.querySelector('.nam');

//  function timeStart(e) {
// 	 for(let i = e; i > 0; i--) {
// 	 setInterval(function(){
// 			// console.log(i)

// 		},2000)
// 		}
// 	}



// 	 timeStart(40)

//  let newstart = 50
//  let i = 50;
//  while(i > 0) {
// 	//  setInterval(function(){

// 	// 	 i--
// 	//  },1000)
// 	console.log(i)
// 	nam.textContent = i	 
//  }


// let i = 0;

// function foo() {
// 	// i++
// 	nam.textContent++
// }

// let result = setInterval(foo, 400)



// function stop() {
// 	clearInterval(result)
// 	nam.textContent = '0'
	// if(nam.textContent === '0') {
	// 	setInterval(function() {
	// 		nam.textContent++
	// 	},1000)
	// }
// }

// nam.addEventListener('click', stop)



//promise ------------------


// let drink = 1;

// function shoot(arrow, headshot, fail) {
// 	console.log('вы сделали выстрел') 

// 	setTimeout(function () {
// 		Math.random() > .5 ? headshot({}) : fail('вы промахнулись')
// 	}, 3000)
// }


// function bayBeer () {
// 	console.log('вы выиграли пиво')
// }


// function win() {
// 	console.log('поздравляем')
// 	drink === 0 ? bayBeer() : giveMoney()
// }

// function giveMoney() {
// 	console.log('вы должны денег')
// }


// shoot({}, function(mark){
// 	console.log('вы попали в цель')
// 	win(mark, bayBeer, giveMoney);
// },
// function(miss){
// 	console.error(miss)

// });


//------------------- new 



// let drink = 1;

// function shoot(arrow) {
// 	console.log('вы сделали выстрел') 
// 	let promise = new Promise(function(reso, reject){

// 		setTimeout(function () {
// 			Math.random() > .5 ? reso({}) : reject('вы промахнулись')
// 		}, 3000)

// 	}) 

// 	return promise;

// }


// function bayBeer () {
// 	console.log('вы выиграли пиво')
// }


// function win() {
// 	console.log('поздравляем')
// 	drink === 0 ? bayBeer() : giveMoney()
// }

// function giveMoney() {
// 	console.log('вы должны денег')
// }

// function loose() {
// 	console.log('вы проиграли')
// }


// shoot({})
// 		.then(mark => console.log('вы попали в цель') )
// 		.then(win)
// 		.catch( miss => console.error(miss))




// 		let dates = new Date(1523621052858);
// 		// console.log(date);


// 		let date = new Date();

// 		console.log(date.getDate());

// 		let result = 'date :';
// 		result += date.getDate() + '/';
// 		result += date.getMinutes();

// 		console.log(result);

// 		let second = new Date();

// 		second.setFullYear(2011, 5, 11);
// 		console.log(second);




// 		const options = {
// 			weekday: 'long',
// 			year    : 'numeric',
// 			month   : 'short',
// 			day     : 'numeric',
// 			hour    :'2-digit',
// 			minute  :'2-digit',
// 			second : '2-digit',
// 		  };


// 		  let Uk = date.toTimeString(dates, options);
// 		  console.log('dsdsds',Uk)


		  
// function getFormattedTime(time) {


// 	return '';
//   }
  
//   console.log(
// 	getFormattedTime(1523621052858)
//   ); // 04:12.8
  
//   console.log(
// 	getFormattedTime(1523621161159)
//   ); // 06:01.1
  
//   console.log(
// 	getFormattedTime(1523621244239)
//   ); // 07:24.2
   


 
 

 
// function formatDate(date) {
//   var monthNames = [
//     "January", "February", "March",
//     "April", "May", "June", "July",
//     "August", "September", "October",
//     "November", "December"
//   ];

//   var day = date.getDate();
//   var monthIndex = date.getMonth();
//   var year = date.getFullYear();

//   return day + ' ' + monthNames[monthIndex] + ' ' + year;
// }

// console.log(formatDate(new Date()));






















//----------------------- dau 08 ------------------------------



console.log('first')


setTimeout(function(){
	console.log("second");
}, 2000)


// console.log('third')



// function show() {
// 	console.log('second')
// }

// setTimeout(show, 2000)





let image = document.querySelector('img');
console.log(image)


setInterval(function() {
	// console.log('ok')
	image.setAttribute("src", "http://lorempixel.com/400/200/")

},1000)
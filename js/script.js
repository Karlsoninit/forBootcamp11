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


// function shooter(arrow,headshot, fail) {
//     console.log('вы сделали выстрел')
//     setTimeout(function(){
//         Math.random() > .5 ? headshot('ффщ') : fail('вы промахнулись')
//     },2000)

// }


// function beer() {
//     console.log('beer')
// }

// function win () {
//     console.log('win')
// }

// shooter({}, function() {
//     console.log('вы попали')
//     win()
// }, function(miss) {
//     console.error(miss)
// })





function shooter(arrow) {
    console.log('вы сделали выстрел')
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > .5 ? resolve('ффщ') : reject('вы промахнулись')
        },2000)

    }) 

    return promise;

}


function beer() {
    console.log('beer')
}

function win () {
    console.log('win')
}

// shooter({}, function() {
//     console.log('вы попали')
//     win()
// }, function(miss) {
//     console.error(miss)
// })


shooter({}).then(() => console.log('вы попали'))
            .then(win)
            .catch(miss => console.log(miss))











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



// console.log('first')


// setTimeout(function(){
// 	console.log("second");
// }, 2000)


// // console.log('third')



// // function show() {
// // 	console.log('second')
// // }

// // setTimeout(show, 2000)





// // let image = document.querySelector('img');
// // console.log(image)


// // setInterval(function() {
// // 	// console.log('ok')
// // 	image.setAttribute("src", "http://lorempixel.com/400/200/")

// // },1000)




// const galleryItems = [
// 	{ preview: 'http://lorempixel.com/400/200/', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
// 	{ preview: 'http://lorempixel.com/400/200/', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
// 	{ preview: 'http://lorempixel.com/400/200/', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
// 	{ preview: 'http://lorempixel.com/400/200/', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
// 	{ preview: 'http://lorempixel.com/400/200/', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
// 	{ preview: 'http://lorempixel.com/400/200/', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
//   ];

//   let div = document.querySelector('.container');

//   let i = 0;
// //   while(i < 9){
// //     i++
// //     console.log(i)
// //     div.innerHTML = newGAllery
// //   }

// 	function random(Gallery){
// 	  let newGAllery = galleryItems.reduce((acc, el) => acc + `<img src="${el.preview}">`, '')
// 	  for(let i = 0; i < galleryItems.length; i++) {
// 		// console.log(i)
// 		div.innerHTML = newGAllery
// 	  }

//   }


//   random();

//   let intervalHandle = setInterval(random , 2000)


//   div.onclick = function(){
// 	console.log('stop')
// 	clearInterval(intervalHandle)
//   }


//   console.log(div.tagName)


//   let img = document.createElement('img');
//   let body = document.body;

//   body.append(img)


// //   img.setAttribute('src' , 'https://sh-s7-live-s.legocdn.com/is/image/LEGOMKTG/email-subscription-thank-you--gl--201606');

// //   console.log(img.getAttribute('src'));

// //   img.className = 'newClass';
// //   console.log(img)


// //   let email = document.querySelector('.text')
// //   let text = document.querySelector('.text');
// //   console.log(text)


// //   function jumpText() {
// //   	alert('click me agein')
// //   }

// //   email.addEventListener('mouseenter', jumpText);

// //   let btn = document.querySelector('.btn');
// //   console.log(btn)


// //   function hearBtn(event) {
// //   	console.log(event);
// //   	let target = event.target;
// //   	console.log(target.type)
// //   }


// //   btn.addEventListener('click', hearBtn);


// //   email.onfocus = function() {
// //     if(email.value == 'your email') {
// //       email.value = '';
// //     }
// //   }

// //   email.onblur = function() {
// //     if(email.value == '') {
// //       email.value = 'your email'
// //     }
// //   }





// let timer = document.querySelector('.timer');
// console.log(timer);


// let img = document.querySelector('img')






// let show;


// function loop() {
// 	img.setAttribute('src', 'http://lorempixel.com/400/200/')
// }



// function stop() {
// 	clearInterval(show)
// }

// function show2() {
// 	show = setInterval(loop, 400)
// }






// img.addEventListener('dblclick', show2);
// img.addEventListener('click', stop);




// let date = new Date()
// console.log(date.setHours(6,6,6,6));


// const options = {
// 	weekday: 'long',
// 	year    : 'numeric',
// 	month   : 'short',
// 	day     : 'numeric',
// 	hour    :'2-digit',
// 	minute  :'2-digit',
// 	second : '2-digit',
// 	era: 'long'

// };


//   let Uk = date.toLocaleString('Uk-uk', options);

//   console.log(Uk)



//----------- promise ---------------



// let prize = Math.floor(Math.random() * 2);
// // console.log(prize);



// function shooter(arrow) {
// 	console.log('вы сделали выстрел');

// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(function () {
// 			Math.random() > .5 ? resolve('вы попали') : reject('вы промахнулись');
// 		}, 300)
// 	})
// 	return promise;
// }


// function win() {
// 	console.log('вы выиграли')
// }

// function prizes() {
// 	if (prize === 1) {
// 		console.log('Beer !!!')
// 	} else {
// 		console.log('Vodka')
// 	}
// }



// shooter({},
// 	function () {
// 		console.log('head')
// 		win();
// 		prizes();
// 	},
// 	function (miss) {
// 		console.log(miss)
// 	})

// shooter({})
// 	.then(head => console.log(head))
// 	.then(win)
// 	.then(prizes)
// 	.catch(miss => console.log(miss))
// 	.finally(() => console.log('finished!'));


//-------------------- task 01------------


/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

// const colors = [
// 	"#FFFFFF",
// 	"#2196F3",
// 	"#4CAF50",
// 	"#FF9800",
// 	"#009688",
// 	"#795548"
// ];


// let body = document.querySelector('body')
// console.log(body);

// let start = document.querySelector('[data-action="start"]')
// let stop = document.querySelector('[data-action="stop"]')

// function showCollor() {
// 	let colorsRandom = colors[Math.floor(Math.random() * colors.length)];
// 	body.style.background = colorsRandom;
// }


// function stop2() {
// 	 clearInterval(newStop)
// }
// let newStop;
// function rand() {
// 	newStop = setInterval(showCollor, 1000)
// }

// function startCount(event) {
// 	console.log(event.target)
// 	if (event.target.getAttribute('data-action') === 'start') {
// 		rand();
// 	} else if (event.target.getAttribute('data-action') === 'stop') {
// 		console.log('stop')
// 		stop2()
// 	}
// }

// body.addEventListener('click', startCount);



















// document.addEventListener('keyup', event => {
// 	const keyName = event.key;
// 	if(keyName === 'f') {
// 		alert('Yes baby')
// 	}
// 	console.log(keyName);
// })



// let form = document.querySelector('.form');
// let text = document.querySelector('.text');
// console.log(text)

// function hear(event) {
// console.log(event.target)
// 	text.textContent = form.value;
// }

// form.addEventListener('input', hear);


// let textAbout = document.querySelector('.about');


// const about = {
// 	name: 'Maksim',
// 	showName() {
// 		console.log(this.name)
// 		textAbout.textContent = this.name;
// 	}
// }

// textAbout.addEventListener('click', about.showName)



// function showClick (event) {
// 	console.log(event.clientX,event.clientY )
// }

// document.addEventListener('click', showClick);

// let giveBtn = document.querySelector('.btn');

//  giveBtn.onclick = () => alert('ok')

//  let one = document.querySelector('.one'),
//  two = document.querySelector('.two'),
//  three = document.querySelector('.three');


//  one.onclick = () => alert('one')
//  two.onclick = () => alert('two')
//  three.onclick = (event) => {
// 	 event.stopPropagation();
// 	 alert('three')
//  }
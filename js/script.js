// 'use strict'




//------------------------ bind--------------------

// const persone = {
// 	name: 'Maksim',
// 	age: 30,

// 	sayHello() {
// 		console.log(`my name is ${this.name} i old ${this.age}`)
// 	}
// }

// persone.sayHello()

// show.bind(persone)()


// const fun = show.bind(persone)
// fun()

// function show() {
// 	console.log(`hello! my name is ${this.name} i ma old ${this.age}`)
// }


//------------------------- функция для создания себе подобных ---------------


// function getPersone (name, age, hobie) {
// 	const persone = {
// 		name,
// 		age,
// 		hobie,

// 		sayHello() {
// 			console.log(`hello my name is ${this.name}, i am old ${this.age} i like ${this.hobie}`)
// 		}
// 	}
// 	return persone
// }

// const pers = getPersone('maksim', 30, 'run');
// pers.sayHello()


//-------------- new + ----

// function Person (name, nickName, hobbies) {
// 	this.name = name;
// 	this.hobbies = hobbies;
// 	this.nickName = nickName;
// 	// this.sayHello = () => {
// 	// 	console.log(`my name is ${this.name} ${this.nickName} ${this.hobbies}`)
// 	// }

// 	Person.count += 1
// }

// Person.count = 0;

// // Person.prototype.age = 121;

// Person.prototype.show = function() {
// 	console.log(`my name is ${this.name} ${this.nickName} ${this.hobbies}`)
// }

// const person = new Person('Bond', 'agent', 'Killer');
// const personTwo = new Person('Ben', 'men', 'Lover');


// person.show()

// personTwo.show()

// console.log(Person.count)

// person.sayHello()

// personTwo.age = 30;

// console.log(person.age);
// console.log(personTwo.age)

// console.log(person)


//---------------------- class -----------



// class About {
// 	constructor(name, nickName) {
// 		this.name = name;
// 		this.nickName = nickName;
// 	}

// 	get fullName () {
// 		console.log(this.name)
// 	}

// 	set fullName (value) {
// 		return this.name = value;
// 	}

// 	sayHello () {
// 		console.log(`${this.name} ${this.nickName}`)
// 	}
// }


// const about = new About('maksim', 'karlson')

// console.log(about)
// about.sayHello()

// about.fullName = 'itsNewName'

// about.fullName



//------------ наследование extends -----------


class Animal {
	constructor(name) {
		this.name = name;
		this.sound = ''
	}

	voice() {
		console.log(this.sound)
	}
}


class Dog extends Animal {
	constructor(name) {
		super(name)
		this.sound = 'GAV'
	}
}

class Cat extends Animal {
	constructor(name) {
		super(name)
		this.sound = 'MiMi'
	}
}

const dog = new Dog('Bilbo')
const cat = new Cat('Nurf')
console.log(dog.name)
dog.voice()

console.log(cat.name)
cat.voice()


// const mass = ['JavaScript', 'rubi', 'react', 'PHP']

// setInterval(function add(){

// 	const rand = Math.floor(Math.random()*mass.length)
// 	let show = mass[rand]
// 	// console.log(show)
// 	show === 'PHP'? alert('win') : console.error('ERROR')

// },1000)



//---------------------------------------




const galleryItems = [{
		preview: 'img/preview-1.jpg',
		fullview: 'img/fullview-1.jpg',
		alt: "alt text 1"
	},
	{
		preview: 'img/preview-2.jpg',
		fullview: 'img/fullview-2.jpg',
		alt: "alt text 2"
	},
	{
		preview: 'img/preview-3.jpg',
		fullview: 'img/fullview-3.jpg',
		alt: "alt text 3"
	},
	{
		preview: 'img/preview-4.jpg',
		fullview: 'img/fullview-4.jpg',
		alt: "alt text 4"
	},

];



const gallery = document.querySelector('.js-image-gallery'),
	fullview = document.querySelector('.fullview'),
	preview = document.querySelector('.preview');


fullview.innerHTML = `<img src='${galleryItems[0].fullview}'>`

//   fullview.style.width = '800px'


const li = document.createElement('li');


let show = galleryItems.reduce((acc, el) => acc +
	`<li>
 <img class="preview-img"
  src=${el.preview}
   data-fullview=${el.fullview}
	alt=${el.alt}></li>`, '')
preview.innerHTML = show;

preview.style.listStyle = 'none'


function showImg(e) {
	console.log(e.target.dataset.fullview)
	if (e.target.nodeName !== 'IMG') return;

	fullview.innerHTML = `<img src='${ event.target.dataset.fullview}'>`

}



preview.addEventListener('click', showImg)
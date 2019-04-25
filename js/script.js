'use strict'



// let text = document.querySelector('.text'),
// 	age = document.querySelector('.age')




// console.log('one')

// let test;

// fetch("https://api.myjson.com/bins/k9i31")
// 	.then(response => response.json())// ответ от сервера
// 	.then(data => {
// 		text.textContent = data.name;
// 		age.textContent = data.age
// 		test = data.age;
// 		console.log(data)
// 	})
// 	.catch(err => console.log('error', + err))
// 	console.log('two')


// 	setTimeout(function() {
// 		console.log(test)
// 	}, 400)



// 	fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
// 	.then( response  => response.json())
// 	.then( data =>{ 
// 		console.log(data)
// 		data.filter((item) => {
// 			console.log(item)
// 		})
// 	})






//--------------------------------- get --------------


// const newPost = {
// 	author: 'Mango',
// 	body: 'CRUD is awesome',
// 	name: 'Maksim'
//   };


//   let url = 'https://jsonplaceholder.typicode.com/posts';

//   const setings = {
// 	  method : 'POST',
// 	  headers :  {
// 		"Content-type": "application/json",
// 	  }, 
// 	  body: JSON.stringify(newPost)
//   }


//   fetch(url, setings)
// 		  .then(response => {
// 			//   if(response.ok) return response.json();

// 			//   throw new Error('error');
// 			return response.json()
// 		  })
// 		  .then(post => console.log(post))



// //------------------ post --------------




// const getPostId = id => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
// 		  .then( response => response.json())

// 			//   if(response.ok) return response.json()

// 		// 	  throw new Error('error!!!!!!!!!!!!!!!!!11')
// 		//   })
// 		//   .then( data => console.log(data))

// 		// const newId = getPostId(99)


// 		// newId.then( post => console.log(post))


// 		getPostId(9).then( response => console.log(response))
// 		getPostId(99).then( response => console.log(response))
// 		getPostId(91).then( response => console.log(response))



//------------------- update ------------------


// const updatePost = {
// 	body: 'new post'
// }

// const newSetings = {
// 	method: 'PUT',
// 	body: JSON.stringify(updatePost),
// 	headers: {
// 		"Content-type": "application/json"
// 	}
// }


// fetch('https://jsonplaceholder.typicode.com/posts/1', newSetings)

// 	.then(response => response.json())
// 	.then(post => console.log(post))


//------------------------ delete ----------

// const delSetings = {
// 	method: 'DELETE'
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1', delSetings)
// 	.then(() => console.log('delete'))



// function update() {

// 	return fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
// 		.then(resolve => resolve.json())
// }

// update().then(post => post)

//-------------- local storage clear remove ------------





// localStorage.setItem('my-app', 'test-app')


// let mySettings = {
// 	theme: 'black',
// 	isActive: true,
// }

// localStorage.setItem('my-app', JSON.stringify(mySettings));

// // const fromLS = localStorage.getItem('my-app');
// const fromLS = JSON.parse(localStorage.getItem('my-app'))
// console.log(fromLS)

// localStorage.removeItem('my-app') //очистить storage по ключу

// localStorage.clear() // очистить полностью 





//---------------------------- input value --------------------




// let text = document.querySelector('.text'),
// 	input = document.querySelector('.input'),
// 	btn = document.querySelector('.btn');


// function writeLocal() {
// 	text.textContent = localStorage.getItem('use-local' || '')
// }

// function getWord() {
// 	localStorage.setItem('use-local', input.value);
// 	writeLocal()
// }

// writeLocal()

// btn.addEventListener('click', getWord);

//-----------------------


// function findWather(town) {
// 	return fetch(`http://api.apixu.com/v1/current.json?key=700fa5b30c7749b79dc212622192304&q=${town}`)
// 		.then(res => res.json())
// 	// .then(el => el)


// }

// findWather('LVIV').then(post => console.log(post))




//------------------- morning ---------------




// const about = {
// 	name: 'maksim',
// 	isActive: true,
// 	happy: false
// }


// const aboutJson = JSON.stringify(about);
// console.log(aboutJson);

// const parseJson = JSON.parse(aboutJson);
// console.log(parseJson)




// const url = 'https://api.myjson.com/bins/k9i31';

// const settings = {
// 	method: 
// }



// fetch(url)
// 	.then(response => {
// 		if (response.ok) return response.json();

// 		throw new Error("Error fetching data")
// 	})
// 	.then(data => console.log(data))






//----------- create post ---------



// const newPost = {
// 	name: 'Maksim',
// 	isActive: true,
// }

// const settings = {
// 	method: "POST",
// 	body: JSON.stringify(newPost),
// 	headers: {
// 		"Content-type": "application/json"
// 	}
// }

// fetch('https://jsonplaceholder.typicode.com/posts', settings)
// 	.then(response => response.json())
// 	.then(date => console.log(date))


//---------------------------- read ---------



// fetch('https://jsonplaceholder.typicode.com/posts/1')
// 	.then(response => response.json())
// 	.then(date => console.log(date))
// 	.catch(err => console.log('error', err))


//--------------- update -----------------

// const updatePost = {
// 	tittle: 'its not about me',
// }


// const updateSettings = {
// 	method: "PUT",
// 	body: JSON.stringify(updatePost),
// 	headers: {
// 		"Content-type": "application/json"
// 	}
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1', updateSettings)
// 	.then( response => response.json())
// 	.then( date => console.log(date))





//----------------------- start day ------------------ 






// const about = {
// 	name : 'Maksim',
// 	isActive : true,
// 	hobby : {
// 		run: true,
// 		jump : false,
// 	}
// }






// const jasonAbout = JSON.stringify(about)
// console.log(jasonAbout)
// const parseAbout = JSON.parse(jasonAbout);
// console.log(parseAbout);






// let newDate;


// 	fetch('https://api.myjson.com/bins/k9i31')
// 		.then( response => {
// 			if(response.ok) return response.json()

// 			throw new Error('Error')
// 		})
// 		.then( data => console.log(data))
// 		.catch( err => console.error('ERROR!!!', err))





// function getPost(what, posts) {
// 	return  fetch(`https://jsonplaceholder.typicode.com/${what}/${posts}`)
// 		.then( response => response.json())
// }

// getPost( "albums", 9)
// 	.then( data => console.log( data.title , data))


// const newObj = {
// 	name : 'Bond',
// 	number : 1007,
// 	car : {
// 		first : 'Jaguar',
// 		second : 'Aston'
// 	},
// 	kill: true
// }

// const nObj = JSON.stringify(newObj);
// console.log(nObj)

// const url = 'https://jsonplaceholder.typicode.com/posts';

// const settings = {
// 	method : "POST",
// 	body : JSON.stringify(newObj),
// 	headers : {
// 		"Content-type": "application/json"
// 	}
// }


// fetch(url, settings)
// 	.then( res => res.json())
// 	.then( data => console.log(data))


// 	const putObj = {
// 		name : 'happy'
// 	}



// 	// const putSettings = {
// 	// 	method : 'PUT',
// 	// 	body: JSON.stringify(putObj),
// 	// 	headers : {
// 	// 		"Content-type": "application/json"
// 	// 	}
// 	// }

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
// 	method : 'PUT',
// 	body: JSON.stringify(putObj),
// 	headers : {
// 		"Content-type": "application/json"
// 	}
// })
// .then( res => res.json())
// .then( data => console.log(data))


// fetch('https://jsonplaceholder.typicode.com/posts/1', {method: 'DELETE'})
// .then( res => res.json())
// .then( data => console.log('delete!!!!!!!!!!!!!!!!!!!!!1'))




//-------------------- Local storage --------------------


// const newLocal = {
// 	name : 'Bond',
// 	job : 'killer',
// 	thems: 'red',
// 	pass : 'new'
// }


// newLocal.name = 'Maks'

// console.log(newLocal)




// let newKey =  localStorage.setItem('about', JSON.stringify(newLocal))



// let result = JSON.parse(localStorage.getItem('about'));




// console.log(result.name, result.job)

// localStorage.clear()



// let text = document.querySelector('.text'),
// 	input = document.querySelector('.input'),
// 	btn = document.querySelector('.btn');

// function writeLocal() {
// 	localStorage.setItem('about', input.value)
// 	getLocal()
// }


// function getLocal() {
// 	text.textContent = localStorage.getItem( 'about' )
// }

// getLocal()



// btn.addEventListener('click', writeLocal)


// fetch("https://restcountries.eu/rest/v2/name/Ukraine")
// 	.then( res => res.json())
// 	.then( data => console.log(data[0].region))





/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/



// const form = document.querySelector('.question-form');
// const chkd = document.querySelectorAll('input');
// const result = document.querySelector('.result');

// console.log(chkd)

// function fn(e) {
// 	e.preventDefault()
// 	Array.from(chkd).find(i => i.checked === true ? result.innerHTML =`${i.parentElement.textContent}` : null)
// }


// form.addEventListener( 'submit' ,fn)






/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/


let list = document.querySelector('.list')
console.log(list)



function fn(e) {
	if(e.target.dataset.action === 'delete'
	) {
		e.target.parentElement.remove()

	}
}


list.addEventListener('click', fn)






window.addEventListener('scroll', () => {
	// if(pageYOffset > 50) {
	// 	console.log('ok')
	// }

	console.log("scrolling")
});
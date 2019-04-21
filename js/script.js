'use strict'

// let text = document.querySelector('.text');
// let btn = document.querySelector('.btn');
// let input = +document.querySelector('.input');
// let inputSecond = +document.querySelector('.inputSecond');

// // console.log( typeof input.value)

// // let quationsOne = Number(prompt('enter numbers'));
// // let quationsTwo = Number(prompt('enter numbers'));

// // console.log(input.value)
// function plus(a, b) {
//     return text.innerHTML = a.value + b.value;
// }

// btn.addEventListener('click', plus);

// console.log(plus(input, inputSecond));



// let showMe = document.querySelector('.categories');

// showMe.insertAdjacentHTML('beforebegin', '<h2>beforebegin заголовок</h2>');


// let btn = document.querySelector('.button');

// if(btn){

//   let i = 0;
//   btn.onclick = function(){
//     i++
//     btn.textContent = i
//     console.log('ok')
//   }

//   console.log(btn)
// }












//---------------------------------------------------



// let elem = document.querySelector('#one')
// let two = document.querySelector('.two')
// let three = document.querySelector('.three')






// const oneClick  = (event) => {
//   event.stopPropagation();
//   alert(`event.target: ${event.target.id}`)
//   console.log(`event.target: ${event.target.id}`);
// }
// const twoClick  = (event) => {
//   event.stopPropagation();
//   alert('two')}
// const threeClick  = (event) => {
//   event.stopPropagation();
//   alert('three')}


// one.addEventListener('click', oneClick);
// two.addEventListener('click', twoClick);
// three.addEventListener('click', threeClick);

// //------------------------



// const nav = document.querySelector(".js-nav");

// nav.addEventListener("click", handleNavClick);

// function handleNavClick(event) {
//   event.preventDefault();

//   const target = event.target;
//   console.log("event target: ", target); // посмотрите что тут

//   // Проверяем тип узла, если не ссылка выходим из функции
//   if (target.nodeName === "A") {
//     console.log('ok')
//   } else(
//     alert('no ')
//   )
// }


//-------------------------------------




// let newFn = document.querySelector('#root');
// let doubleFn = document.createElement('div');
// console.log(newFn);

// function colorRandom(){
//     return Math.floor(Math.random()*255)
// }

// let i = 0;
// let w = 30;
// function added(num) {
//     while(i < num){
//         newFn.prepend(doubleFn);
//         i++
//         doubleFn.innerHTML += `<div${i} style =' width:${w + 'px'}; height:${w + 'px'}; background-color: rgb(${colorRandom()},${colorRandom()},${colorRandom()}) '></div>`
//         w += 10;

//     }
// }

// added(7);

































/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
    Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/


// let root = document.querySelector('#root');
// let box = document.createElement('div');

// function randomColor() {
//   let red = Math.floor(Math.random()*255);
//   return red


// }



// function createBoxes(num) {
//   let i = 0;
//   let w = 30;
//   root.append(box)

//   while(i < num){
//     i++
//     box.innerHTML += `<div style ="width: ${w + 'px'}; height: ${w + 'px'}; background: rgb(${randomColor()},${randomColor()}, ${randomColor()})">${i}</div>`;
//     w += 10
//   }

// }


// document.get

// createBoxes(Number(prompt('emter number')))




// function showClick() {
//   // console.log('ok')
//   alert('ok')
// }


// let btn = document.querySelector('.btn');


// btn.onclick = function() {
//   console.log('ok')
// }



// console.log(btn);



// const About = {
//   name: 'Maksim',
//   showName() {
//     console.log(this.name)

//   function showFn () {
//     console.log('!!!!!!!')
//   }

//   showFn()














//   }
// }


// const double = {
//   name: 'new',
//   showName() {
//     console.log(this.name)
//   }
// }

// // About.showName();

// double.showName();




// btn.addEventListener('click', About.showName.bind(About));










// let one = document.querySelector('.one')
// let two = document.querySelector('.two')
// let three = document.querySelector('.three')



// function showOne () {
//   alert('One')
// }

// function showTwo (event) {
//   alert('!!!!!!!!!!!')
//   event.stopPropagation()
//   alert('Two')

// }

// function showThree (event) {
//   event.stopPropagation()
//   alert('Three')
// }

// one.addEventListener('click', showOne);
// two.addEventListener('click', showTwo);
// three.addEventListener('click', showThree);




// let nav = document.querySelector('.nav');

// function catchBtn(event) {
//   event.preventDefault();
//   const target = event.target;
//    if(target.nodeName !== 'LI'){
//     console.log('!!!!!!!!!!!!')
//    } else {

//      console.log(target)
//    }

// }


// nav.addEventListener('click', catchBtn);

// console.log(nav)



/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/


//----------------- 03 ------------------



/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

// let result = document.querySelector('.value')
// let sub = document.querySelector("button[data-action ='sub']")
// let add = document.querySelector("button[data-action ='add']")



// class Counter  {
//   constructor(onChange) {
//     this.value = 0;
//     this.onChange = onChange;
//     this.decrement = this.decrement.bind(this)
//     this.increment = this.increment.bind(this)


//   }

//   increment() {
//     this.value ++;
//     this.onChange(this.value);
//   }

//   decrement() {
//     this.value --;
//     this.onChange(this.value);
//   }

// }

// function onChange(value) {
//     result.textContent = value;
// }




// const counter = new Counter(onChange);



// sub.addEventListener('click', counter.decrement);


// add.addEventListener('click', counter.increment);





// function applyForVisa(documents, resulve, rejected) {
//   console.log('Обработка заявления...');
//   setTimeout(function(){
//     Math.random() > .5? resulve({}) : rejected('отказано из-за не хватка документов')
//   },2000)
// }

// applyForVisa({}, function(visa){
//   console.log('виза получена')
// },
//   function(reason) {
//     console.error(reason)
//   }
// );



/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/


// const list = document.querySelector('.images');
// console.log(list)

// list.addEventListener('click', find)

// function find(event) {
//   event.preventDefault();
//   console.log(event.target.src);
// } 




/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/



// let sho = document.querySelector('.list');
// console.log(sho);
// sho.addEventListener('click', newFn);

//  function newFn(e) {
//    let target = event.target
//   if(target.dataset.action === "delete")
//   target.parentElement.remove();
//  }
















//--------------------------------- 3 --------------------

// let sub = document.querySelector('button[data-action = "sub"]');
// let add = document.querySelector('button[data-action = "add"]');
// let result = document.querySelector('.value');
// console.log(result)


// class Counter  {
//   constructor(onChange) {
//     this.value = 0;
//     this.onChange = onChange;
//     // this.decrement = this.decrement.bind(this)
//     // this.increment = this.increment.bind(this)

//   }

//   increment() {
//     this.value ++;
//     this.onChange(this.value);
//   }


//   decrement() {
//     this.value --;
//     this.onChange(this.value);
//   }

// }



// function onChange(value) {
//   // console.log(value)
//   result.textContent = value;
// }





// let counter = new Counter(onChange)
// let counter2 = new Counter(onChange)


// // console.log(counter);


// sub.addEventListener('click', counter2.decrement.bind(counter));
// add.addEventListener('click', counter2.increment.bind(counter));




// let images = document.querySelector('.images')
// console.log(images)



// function show(e){
//   console.log(e.target.src,e.target.alt);
//   if(e.target.nodeName === 'IMG') {
//     e.target.parentElement.remove();
//   }
// }


// images.addEventListener('click', show);




/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/





// let list = document.querySelector('.input-list');
// console.log(list);


// function showList(e) {
//     e.preventDefault()
//     // console.log(e.target.classList.add('invalid'))
//     e.target.value.length === Number(e.target.getAttribute('data-length')) ? e.target.classList.add("valid") : e.target.classList.add("invalid")
// }


// list.addEventListener('focusout', showList);


//--------------------------- 6 ------------------

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/


// let list = document.querySelector('.list')
// console.log(list)


// function showList (e) {
//   e.target.getAttribute = ('data-action="delete"') && e.target.nodeName === "LI" ? e.target.parentElement.remove() : null
// }

// list.addEventListener('click', showList);


/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// let message = document.querySelector('.message');
// let input = document.querySelector('.input');
// let value = document.querySelector('.input-value');




// function focus() {
//   message.textContent = "Input is in focus!"
// }

// function inputMEssage () {
//   value.textContent = `Current input value: ${input.value}`
// }

// function write ()  {
//   message.textContent = '';
// }

// input.addEventListener('focusout', focus)
// input.addEventListener('input', inputMEssage)
// input.addEventListener('focus', write)


/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/


// let btn = document.querySelector('.btn');
// let modal = document.querySelector('.modal-hidden');
// let closes = document.querySelector('.js-modal-backdrop');

// console.log(closes)


// function open () {
//   modal.classList.remove('modal-hidden');
// }

// function close (e) {
//   e.target.getAttribute('data-action') || e.target.classList.contains('js-modal-backdrop') ? modal.classList.add('modal-hidden') : null
// }


// btn.addEventListener('click', open) 
// closes.addEventListener('click', close)






/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

// const galleryItems = [
//   { preview: 'http://lorempixel.com/400/200/', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
//   { preview: 'http://lorempixel.com/400/200/', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
//   { preview: 'http://lorempixel.com/400/200/', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
//   { preview: 'http://lorempixel.com/400/200/', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
//   { preview: 'http://lorempixel.com/400/200/', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
//   { preview: 'http://lorempixel.com/400/200/', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
// ];

// let div = document.querySelector('.container');

// let i = 0;
// while(i < 9){
//   i++
//   console.log(i)
//   div.innerHTML = newGAllery
// }

//   function random(Gallery){
//     let newGAllery = galleryItems.reduce((acc, el) => acc + `<img src="${el.preview}">`, '')
//     for(let i = 0; i < galleryItems.length; i++) {
//       // console.log(i)
//       div.innerHTML = newGAllery
//     }

// }


// random();

// let intervalHandle = setInterval(random , 2000)


// div.onclick = function(){
//   console.log('stop')
//   clearInterval(intervalHandle)
// }


// console.log(div.tagName)


// let img = document.createElement('img');
// let body = document.body;

// body.append(img)


// img.setAttribute('src' , 'https://sh-s7-live-s.legocdn.com/is/image/LEGOMKTG/email-subscription-thank-you--gl--201606');

// console.log(img.getAttribute('src'));

// img.className = 'newClass';
// console.log(img)


// let email = document.querySelector('.text')
// let text = document.querySelector('.text');
// console.log(text)


// function jumpText() {
// 	alert('click me agein')
// }

// email.addEventListener('mouseenter', jumpText);

// let btn = document.querySelector('.btn');
// console.log(btn)


// function hearBtn(event) {
// 	console.log(event);
// 	let target = event.target;
// 	console.log(target.type)
// }


// btn.addEventListener('click', hearBtn);


// email.onfocus = function() {
//   if(email.value == 'your email') {
//     email.value = '';
//   }
// }

// email.onblur = function() {
//   if(email.value == '') {
//     email.value = 'your email'
//   }
// }


/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/
// class Gallery {
//   constructor({obj}) {
//     this.gallery = obj.items;
//     this.preivew  = this.querySelector('.preview');
//     this.container = obj.parentNode;
//     this.addEvents = this.addEvents.bind(this)
//   }


//   addEvents() {
//     this.container.add('click', this.test )
//   }

//   test() {

//   }

//   start() {
//     this.test()
//     this.addEvents()
//   }
//   addClick() {


//   }

// }



// const gallery  = new Gallery({
//   items: galleryItems,
//   parentNode: document.querySelector('.image-gallery'),
//   defaultActiveItem: 1
// });

// gallery.start();


/* Далее плагин работает в автономном режиме */
// 3
// Message List
// Loading history...

// Rodya [12:31 PM]
// Untitled 
// 'use strict';
// ​
// // const img = document.querySelectorAll('img');
// // const btnFor = document.querySelector(".forvard");
// // const btnBack = document.querySelector(".back");
// ​
// ​
// ​
// // let i = 0;
// ​
// // btnFor.onclick = function (){
// ​
// ​
// //   img[i].className = '';
// //   i ++;
// //   if(i >= img.length){
// //     i = 0;
// //   }
// //   img[i].className = 'shown';
// ​
// // }
// ​
// // btnBack.onclick = function(){
// //   img[i].className = '';
// //   i --;
// //   if(i < 0){i = img.length -1;}
// //   img[i].className = 'shown';
// // }
// ​
// // ================================================================================================================
// ​
// /*
//  Есть список категорий с классом categories (на вкладке HTML).
 
//  Напишите код, который для каждого элемента li (первая вложенность) 
//  в списке categories выведет в консоль:
//  - Текст непосредственно в нём (название категории)
//  - Количество всех вложенных в него элементов li
 
//  К примеру:
//   Категория: Животные
//   Количество вложенных li: 4
// */
// ​
// // const categories = document.querySelector(".categories");
// // Array.from(categories.children).forEach(el =>console.log(`Categories:${el.firstChild.textContent} Elements: ${ el.childNodes[1].childElementCount}`));
// ​
// ​
// /*
//  Дан список с классом .list
// 	- Найдите первого потомка списка и сделайте его текст красного цвета
// 	- Найдите последнего потомка списка и сделайте его текст синего цвета
// */
// ​
// // const list = document.querySelector(".list");
// ​
// ​
// // list.firstElementChild.style.color = "red";
// // list.lastElementChild.style.color = "blue";
// ​
// ​
// ​
// /*
//  Дан ul склассом .list и массив строк. 
 
//  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
// */
// ​
// // const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// ​
// // const list = document.querySelector(".list");
// ​
// // const text = elements.reduce((acc,el) => acc + `<li>${el}</li>`,'');
// // list.innerHTML = text;
// ​
// ​
// /*
//  Напишите скрипт для создания галлереи изображений. 
 
//  - На вкладке HTML уже есть ul.gallery.
//  - Используйте массив объектов для создания тегов img вложенных в li
//  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
//   изображение было 300px по ширине
//  - Добавьте все элементы галлереи в ul.gallery
// */
// ​
// // const galleryItems = [
// //   {
// //    url:
// //     "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// //    alt: "White and Black Long Fur Cat"
// //   },
// //   {
// //    url:
// //     "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// //    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
// //   },
// //   {
// //    url:
// //     "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// //    alt: "Two Brown Hen and One Red Rooster"
// //   },
// //   {
// //    url:
// //     "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// //    alt: "Group of Horses Running"
// //   },
// //   {
// //    url:
// //     "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// //    alt: "Macaw Birds"
// //   },
// //   {
// //    url:
// //     "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// //    alt: "2 Lion on Grass Field during Daytime"
// //   }
// //  ];
 
// ​
// // const gallery = document.querySelector(".gallery");
// ​
// // const img = galleryItems.reduce((acc,el) => acc + `<li><img class="sizes" src=${el.url} alt=${el.alt}></li>`,'' );
// ​
// // gallery.innerHTML = img;
// // const sizes = document.querySelectorAll('.sizes');
// // sizes.forEach(i => i.style.width = '300px');
// // gallery.style.listStyle = 'none';
// ​
// ​
// ​
// /*
//  Есть список с классом .size-filter из произвольного 
//  количества чекбоксов, каждый из которых содержит 
//  размер одежды в фильтре.
 
//  Напишите функцию collectInputData(inputs), которая
//  принимает 1 параметр inputs - массив тех инпутов
//  у которых состояние checked.
 
//  Возвращает массив значений атрибута value.
// */
// ​
// ​
// ​
// function collectInputData() {
//   const size = document.querySelectorAll('input:checked');
//   return Array.from(size).map(el => el.value);
// }
// ​
// console.log(collectInputData());
// ​
// ​
// /*
//  Создайте функцию createMovieCard(), которая 
//  создает и возвращает DOM-узел карточки кинофильма.
 
//  Разметка с классами есть на вкладке HTML.
//  Стили на вкладке CSS.
 
//  Используйте createElement для создания узлов.
//  Добавьте классы и атрибуты.
// */
// ​
// ​
// ​
// function createMovieCard(){
//   const body = document.body;
//    const movie = document.createElement('div');
//    movie.classList.add("movie");
//    body.append(movie);
//   return movie.innerHTML = `<img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image"><div class="movie__body">
//      <h2 class="movie__title">The Godfather</h2>
//      <p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
//       would-be killers, launching a campaign of bloody revenge.</p>
   
//      <p class="movie__date">Released: 1972-03-14</p>
//      <p class="movie__rating">Rating: 8.6</p>
//     </div>
//    </div>`;
// }
// ​
// createMovieCard();
// ​
// //======================================================================================================
// ​
// function createMovieCard(){
//   const body = document.body;
//    const movie = document.createElement('div');
//    movie.classList.add("movie");
//    body.append(movie);
// ​
//    const img = document.createElement("img");
//    img.classList.add("movie__image");
//    img.setAttribute("src", "http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg");
//    img.setAttribute("alt", "movie image");
//    movie.prepend(img);
// ​
//    const movieBody = document.createElement("div");
//    movieBody.classList.add("movie__body");
//    movie.append(movieBody);
// ​
//    const title = document.createElement('h2');
//    title.classList.add("movie__title");
//    title.textContent = "The Godfather";
//   movieBody.append(title);
// ​
//   const description = document.createElement('p');
//   description.classList.add('movie__description');
//   description.textContent = "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.";
//   movieBody.append(description);
// ​
//   const date = document.createElement('p');
//   date.classList.add('movie__date');
//   date.textContent = "Released: 1972-03-14";
//   movieBody.append(date);
// ​
//   const rating = document.createElement('p');
//   rating.classList.add('movie__rating');
//   rating.textContent = "Rating: 8.6";
//   movieBody.append(rating);
// }
// ​
// createMovieCard();
// ​
// ​
// /*
//  В HTML-документе уже есть тег с id="root" (вкладка HTML)
 
//  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
 
//  Функция создает столько div, сколько указано в num и возвращает их в одном
//  общем контейнере. После чего необходимо повесить результат работы функции
//  в div с id="#root"
 
//  Каждый div:
//   - Имеет случайный rgb цвет фона
//   - Размеры самого первого div - 30px на 30px.
//   - Каждый следующий div после первого, должен быть шире и выше предыдущего
//    на 10px
// */
// ​
// const ask = Number(prompt("enter any number"));
// ​
// function createBoxes(num){
//   const root = document.getElementById('root');
//   const mainDiv = document.createElement('div');
//   mainDiv.style.display = "flex";
//   mainDiv.style.flexWrap = "wrap";
//   mainDiv.style.alignItems = "center";
//   let i = 0;
//   let w = 30;
// ​
//   while(i < num){
//     const div = document.createElement("div");
//     div.style.backgroundColor = randomColor();
//     mainDiv.append(div);
//     i++;
//     w += 10;
//     div.style.width = w + "px";
//     div.style.height = w + "px";
    
//   }
//   root.append(mainDiv);
// }
// ​
// createBoxes(ask);
// ​
// function randomColor(){
//  return `rgb(${Math.floor(Math.random()*(255))}, ${Math.floor(Math.random()*(255))}, ${Math.floor(Math.random()*(255))})`;
// ​
// }
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// ​
// // let ask = Number(prompt('Enter random number'));
// ​
// // const createBoxes = function(num) {
// //  const root = document.querySelector('#root');
// //  let mainDiv = document.createElement("div");
// //  let i = 1;
// //  let w = 30;
 
// //  while(i <= num){
// //  let divs = document.createElement('div');
// //  divs.style.backgroundColor = randomColor();
// //  mainDiv.append(divs);
// //  i++;
// //  divs.style.width = w + 'px';
// //  divs.style.height = w + 'px';
// //  w += 10;
// ​
// //  root.innerHTML += `<div style ='width: ${w + 'px'}; height: ${w + 'px'}; background-color: ${randomColor()};' ></div>`;
// // }
// // //  root.append(mainDiv) ;
// // };
// ​
// ​
// // createBoxes(ask);
// // function randomColor (){
// //  return `rgb(${Math.floor(Math.random()*(255 + 1))}, ${Math.floor(Math.random()*(255 + 1))}, ${Math.floor(Math.random()*(255 + 1))})`;
// // }
// ​
// ​
// ​

// function randomColor(){
//  return `rgb(${Math.floor(Math.random()*(255))}, ${Math.floor(Math.random()*(255))}, ${Math.floor(Math.random()*(255))})`;
// ​
// }


// /* 
//  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
 
//  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
//  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
// Click to expand inline (42 lines)

// Rodya [12:09 PM]
// Untitled 

// /*
//  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
//  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
//  она находится. Обязательно используйте делегирование событий.
// */

//  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
//  инпуты проверяли свое содержимое на правильное количество символов. 
 
//  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
//  - Если введено подходящее количество, то outline инпута становится зеленым, 
// Click to expand inline (25 lines)

// Rodya [2:29 PM]
// Untitled 
// 'use strict';
// ​
// /*
//  Напишите скрипт который реализует следующий функционал.
 
//  Есть кнопка с классом button, текст которой отображает 
//  кол-во раз которое по ней кликнули, обновляется при каждом клике.
// */
// ​
// ​
// ​
// // const btn = document.querySelector('.button');
// ​
// // btn.addEventListener('click', plus);
// ​
// // function plus(){
// //   btn.textContent ++;
// // }
// ​
// ​
// /*
//  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
//  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
// */
// ​
// // const exp = document.querySelector(".expression");
// // const btn = document.querySelector("button");
// ​
// // const first = exp.children[0];
// // const second = exp.children[2];
// // const result = exp.children[4];
// ​
// // btn.addEventListener('click', plus);
// ​
// // function plus (){
// //   result.textContent = Number(first.value) + Number(second.value);
// // }
// ​
// ​
// /*
//  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
 
//  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
//  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
//  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
//  - Привяжите вызовы методов и значение счетчика к раметке
// */
// ​
// ​
// // class Counter {
// //   constructor(onChange){
// //     this.value = 0;
// //     this.onChange = onChange;
// //   }
  
// //   get increment(){
// //     this.value ++;
// //     this.onChange(this.value);
// //   }
  
// //   get decrement(){
// //     this.value --;
// //     this.onChange(this.value);
// //   }
// ​
// // }
// ​
// // const result = document.querySelector('.value');
// ​
// // function onChange(value){
// //   result.textContent = value;
// // }
// ​
// // const counter = new Counter(onChange);
// ​
// // const inc = document.querySelector('button[data-action ="add"]');
// // const dec = document.querySelector('button[data-action ="sub"]');
// ​
// // inc.addEventListener("click", () => counter.increment);
// // dec.addEventListener("click", () => counter.decrement);
// ​
// ​
// /*
//  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
//  после чего нажимает кнопку "Submit" и происходит отправка формы.
 
//  При отправке формы:
//   - не должна перезагружаться страница
//   - необходимо получить выбранную опцию и вывести в параграф с классом .result
// */
// ​
// ​
// // const form = document.querySelector('.question-form');
// // const chkd = document.querySelectorAll('input');
// // const result = document.querySelector('.result');
// ​
// // form.addEventListener('submit', show );
// ​
// // function show(e) {
// //  e.preventDefault();
// //  Array.from(chkd).find(i => i.checked === true ? result.innerHTML = ` Result:${i.parentElement.textContent};` : null);
// // }
// ​
// ​
// /*
//  Дан список изображений. Сделайте так, чтобы по клику на картинку 
//  алертом выводился ее src. Обязательно используйте делегирование событий.
// */
// ​
// // const images = document.querySelector('.images');
// ​
// // images.addEventListener('click', show);
// ​
// // function show(e){
// //   alert(e.target.src);
// // }
// ​
// ​
// /*
//  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
//  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
//  она находится. Обязательно используйте делегирование событий.
// */
// ​
// ​
// // const list = document.querySelector('.list');
// ​
// // list.addEventListener('click', destroi);
// ​
// // function destroi({target}){
// // if(target.dataset.action === "delete"){
// //   target.parentElement.remove();
// // }
// // }
// ​
// ​
// /*
//  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
//  инпуты проверяли свое содержимое на правильное количество символов. 
 
//  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
//  - Если введено подходящее количество, то outline инпута становится зеленым, 
//   если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
// */
// ​
// // const list = document.querySelector('.input-list');
// ​
// // list.addEventListener('focusout', validator);
// ​
// // function validator({target}){
// //  let x = target.value;
// ​
// //  ['invalid', 'valid'].forEach(i => target.classList.remove(i));
// ​
// //  if( x.length === +target.dataset.length){
// //   target.classList.add ('valid');
// //  }else if(x.length === 0 ){
// //   ['invalid', 'valid'].forEach(i => target.classList.remove(i));
// //  } else{
// //   target.classList.add('invalid');
// //  }
// // }
// ​
// ​
// /*
//  Напишите скрипт который:
  
//   - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
//   - При наборе текста в инпуте (событие input), текущее его значение должно 
//    отображаться в p.input-value 
// */
// ​
// // const message = document.querySelector('.message');
// // const input = document.querySelector('.input');
// // const result = document.querySelector('.input-value');
// ​
// // input.addEventListener('focusin',rend);
// // input.addEventListener('input', newInfo);
// ​
// // function newInfo(e){
// //  result.textContent = `Current input value: ${e.target.value}`;
// // }
// ​
// // function rend(){
// //  message.textContent = "Input is in focus!";
// // }
// ​
// ​
// ​
// /*
//  На вкладках HTML и CSS уже готовая верстка модального окна.
//  По умолчанию модальное окно скрыто классом modal-hidden.
 
//  Напишите скрипт который реализует следующее поведение:
 
//  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
//   должно появляться. Для этого необходимо убрать класс modal-hidden. 
//   Для выбора модального модального окна используйте класс js-modal-backdrop
 
//  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
//   или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
// */
// ​
// ​
// ​
// // const btn = document.querySelector(".btn");
// // const modal = document.querySelector(".js-modal-backdrop");
// // const clsd = document.querySelector(".close-btn");
// ​
// // btn.addEventListener("click", show);
// // modal.addEventListener("click", hide);
// ​
// ​
// // function show(){
// //  modal.classList.remove("modal-hidden");
// // }
// ​
// // function hide({target}) {
// //  target.dataset.action === "close-modal" || target === modal ?modal.classList.add('modal-hidden'):null;
 
// // }
// ​
// ​
// ​
// ​
// /*
//  Ознакомьтесь с HTML и CSS.
 
//  Есть меню навигации, необходимо написать скрипт, который
//  при клике на пункт меню добавит ему класс active,
//  таким образом выделив текущую (активную) ссылку,
//  при этом убрав его у всех остальных элементов меню.
 
//  Пунктов меню может быть произвольное количество, используйте
//  прием делегирование событий. Учтите клик по самому ul, его
//  необходимо игнорировать.
 
//  При клике по ссылкам не должна перезагружаться страница!
// */
// ​
//  const menu = document.querySelector(".js-menu");
// ​
// menu.addEventListener("click", clack);
// ​
// function clack(e) {
//  e.preventDefault();
//  foer(e.target);
// }
// ​
// function foer(secondActive) {
//  const active = menu.querySelector("a.active");
// ​
//  if (active) {
//   active.classList.remove("active");
//  }
// ​
// secondActive.classList.add("active");
// }
// Collapse

// Message Input


// Message Rodya













//--------------------------------------


/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/




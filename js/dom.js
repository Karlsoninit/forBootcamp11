




// let p = document.createElement('p');

// p.innerHTML = 'hello my friends';

// p.classList.add('main', 'green');

// document.body.insertBefore(p, document.querySelector('#out'));

// console.log(p)


// let test = document.getElementById('test');

// console.log(test);

// let find = document.getElementsByTagName('li');
// find[1].style.color = 'red';


// console.log(find);

//------------------

// let div = document.querySelectorAll('li');
// console.log("TCL: div", div)

// div.forEach(el => console.log(el));


// let findUl = document.querySelector('.list').querySelectorAll('.list-item');


//------------------
// findUl[1].style.color = 'red';
// console.log(findUl)

//------------------
// let find = document.querySelector('.list .list-item');
// find.style.color = 'green'
// console.log(find);

//------------------
// let newDiv = document.querySelectorAll('div');
// console.log(newDiv);

//------------------
// out.style.background = 'green';

//------------------

// let child = document.querySelector('div')
// // console.log(child);
// let onlyChild = child.childNodes;
// // console.log(onlyChild);

// onlyChild = child.children;
// console.log(onlyChild);


// let hyper = document.querySelector('a');



// console.log(hyper.parentElement.nextElementSibling);


//--------------------

// let show = document.querySelector('.click');

// show.onclick = function() {
//     // show.style.color = 'red';
//     show.innerHTML += 'HELLO';
//     show.style.fontSize = '30px'; 
//     show.className = 'dom';

// }
// console.log(show);


// let left = document.querySelector('.left');

// let right = document.querySelector('.right');

// let gallery = document.querySelector('#gallery');
// console.log(gallery);

// let images = document.querySelectorAll('#gallery .photos img');
// console.log(images);

// let i = 0;



//---------------- without effects ----------

// right.onclick = function(){
//     images[i].style.display = 'none';
//     i++;

//     if(i >= images.length) {
//         i = 0;
//     }
//     images[i].style.display = 'block';
// }

// left.onclick = function(){
//     images[i].style.display = 'none';
//     i--;

//     if(i <  0) {
//         i = images.length -1;
//     }
//     images[i].style.display = 'block';
// }


//--------------------- with effects ------------


    
//     gallery.onclick = function(){
    
//         images[i].className = '';
//         i++;
    
//         if(i >= images.length) {
//             i = 0;
//         }
//         images[i].className = 'showed';
//     }

// left.onclick = function(){


//     images[i].className = '';
//     i--;

//     if(i <  0) {
//         i = images.length -1;
//     }
//     images[i].className = 'showed';
// }



// let showUl = document.querySelectorAll('.list li');
// // for( links of [...document.querySelectorAll('.list li')] ){

// //     console.log( typeof links);
// // }


// console.log(showUl);


//=============== style -------------------

// let newP = document.querySelector('p');

// newP.innerHTML = '<P style="color:red">New words!</p>'

// newP.textContent = 'yahoo '

// console.log(newP);

// newP.onclick = function() {
//     // newP.className = 'newClass';
//     newP.style.color = 'green';
//     newP.innerHTML += 'New';
//     console.log(newP);
// }


// let findValue = document.querySelector('input');

// console.log(findValue.value);



//-------------- atribute -------------

// let link = document.querySelector('a')

// let newLink = link.getAttribute('href')

// link.setAttribute('href', 'https://wikipedia.com');
// link.textContent = 'Wikipedia';


// console.log(link);

//------------ change Class --------------

// let boxOne = document.querySelector('.boxOne');
// let boxTwo = document.querySelector('.boxTwo');

// boxOne.classList.add('red')
// console.log(boxOne);

// // boxTwo.classList.remove('green');

// let hasClass =  boxTwo.classList.contains('green'); //проверка на клас
// console.log(hasClass);


// if(hasClass) {
//     boxTwo.classList.remove('green')
// } else {
//     boxTwo.classList.add('green')
// }


//------------------- события -----------------

// let findH = document.querySelector('h1');
// let findButton = document.querySelector('button');
// let input = document.querySelector('input');
// console.log(findH)

// function clickButton() {
//     console.log('YoHoHo')
//     findH.textContent = input.value
// }

// findButton.addEventListener('click', clickButton )



/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// let find = document.querySelector('.list');
// console.log(find);

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// let touchElements = elements.reduce((string, el) => string + `<li>${el}</li>`, '');


// find.innerHTML = touchElements;

//-------------------------------------



/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// let getGallery = document.querySelector('.gallery');
// console.log(getGallery);



// const galleryItems = [
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
//   ];


  
//   let result = galleryItems.reduce((images, el) => images + `<img src="${el.url}"> <p>${el.alt}</p>`,'');

//   getGallery.innerHTML = result;

//   console.log(result)


//   let newCheck = document.querySelector('.check')

//   function getCheck(value) {
//     const element = document.createElement('div');
    
//     newCheck.appendChild(element)
//   }
//   getCheck(5);


//   console.log(newCheck);






  
 
//    const heading = document.createElement('h1');
//   console.log(heading); // <h1></h1>
  
//   heading.textContent = 'This is a heading';
//   console.log(heading); // <h1>This is a heading</h1>
  
//   // ================================================
//   const image = document.createElement('img');
  
//   image.setAttribute('src', 'https://placeimg.com/640/480/nature');
//   image.setAttribute('alt', 'this is an image');
  
//   console.log(image);






//--------------------------------------------------------------------------------------------------



// let text = document.getElementById('text');

// let doubleText = document.getElementsByClassName('doubleText');


// let list = document.querySelector('.list');


//     function fn(el){

//         let newMass = [...el].map(el => el.textContent);
        
//         return newMass


//     }

//    let copyMass = fn(list.children)


   

//    console.log(copyMass);





// let copyMass = ['1','2']



//    const element = document.createElement('ul');


//    const body = document.body;

//    list.prepend(element);



//     let getli = copyMass.reduce((string, el) => string + `<li>${el}`, '');
//     element.className = 'new';

//     element.innerHTML = getli;

    //------------------------------------- input --------------




    // let textInput = document.querySelector('.text');
    // let Input = document.querySelector('.input');
    // let btn = document.querySelector('.btn');

    // console.log(btn);


    //  function click(){
        
    //     if(Input.value.length > 0) {
    //         textInput.textContent = Input.value;
    //         textInput.style.fontSize = '100px';
    //         textInput.className = 'green';
    //     }
    // }

    // btn.addEventListener('click', click);



    //----------------------------------------------------

    // let forward = document.querySelector('.forward');

    // let back = document.querySelector('.back');

    // let images = document.querySelectorAll('.images img');

    // // let double  = document.querySelector('.images')
    // // console.log(double.children)

    // // console.log(images)

    // let i = 0;

    // forward.onclick = function() {
    //     images[i].className = '';
    //     i = i +1
    //     if(i >= images.length){
    //         i = 0
    //     }

    //     images[i].className = 'showed'
    // }

    // back.onclick = function() {
    //     images[i].className = '';
    //     i -=1
    //     if(i < 0){
    //         i = images.length -1
    //     }

    //     images[i].className = 'showed'
    // }





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


// let newvId = document.querySelector("#root");
// // console.log(newvId.innerHTML = `<div>${9}</div>`)


// let name = 'Maksim'
// function createBoxes(num) {

//     // let newFn = rest.reduce((string, el) => string + `<div>${el}</div>`,"")
// let a = '';
//     for(let i = 1; i <= num; i++) {
//         a += `<div>${name}</div>`
//         // console.log(i)
//         // console.log(num[i])
//     //    
//     }
//     newvId.innerHTML = a
// }

// console.log(createBoxes(10))




//----------------------

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/


// let newSize = document.querySelectorAll('.size-filter');
// console.log(newSize.hasAttribut);



// function collectInputData(...inputs) {
//     let result = inputs.map(el => console.log(el))
// }

// collectInputData(newSize);


// let findImage = document.querySelector('.image');

// console.log(findImage.src = 'https://lc-imageresizer-live-s.legocdn.com/resize/?width=1600&imageUrl=https%3A%2F%2Fwww.lego.com%2Fr%2Fwww%2Fr%2Fportals%2F-%2Fmedia%2Flegocom%2Fhome%2Fsplit%2Fsplit_adult-a.png%3Fl.r%3D652151011');


// let create = document.createElement('img');

// create.setAttribute('src' , 'https://lc-imageresizer-live-s.legocdn.com/resize/?width=1600&imageUrl=https%3A%2F%2Fwww.lego.com%2Fr%2Fwww%2Fr%2Fportals%2F-%2Fmedia%2Flegocom%2Fhome%2Fsplit%2Fsplit_adult-a.png%3Fl.r%3D652151011')
// create.setAttribute('alt', 'helloooooo')
// create.classList = 'btn';
// create.remove();
// console.log(create)

// let bod = document.body;

// bod.prepend(create);


// let text = document.querySelector('.text')
// text.remove()
// console.log(text);



// let newOl = document.querySelector('#list');
// let parent = document.querySelector('.parent')

// console.log(newOl)

// newOl.insertAdjacentHTML('beforeend', `<h1>Hello</h1>`);



// const clone = newOl.cloneNode(true);

// parent.append(clone)



// var buttons = document.querySelectorAll('#messages-container .remove-button');



// console.log()








// for (var i = 0; i < buttons.length; i++) {
//   var button = buttons[i];

//   button.onclick = function() {
//     //   button.style.display = 'none'
//     var el = this.parentNode;
//     el.parentNode.removeChild(el);
//   };
// }









/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/







// let newTask = document.querySelectorAll('.categories > li')

// newTask.forEach(el =>{ 
//     console.log(el.firstChild)
//     console.log(el.firstElementChild.childElementCount)
// })


// console.log(newTask)




/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/






//---------------------------------------------------------------------


// let createNew = document.createElement('div');
// let createImg = document.createElement('img');


// createImg.setAttribute('src', 'https://sh-s7-live-s.legocdn.com/is/image/LEGOMKTG/email-subscription-thank-you--gl--201606');
// createImg.setAttribute('alt', 'Its img');
// console.log('src',createImg.src);


// createNew.innerHTML = 'Hello';
// createNew.style.fontSize = '50px';
// console.log(createNew)
// createNew.className = 'text';
// let a = 121;
// createNew.innerHTML = `<a href='https://sh-s7-live-s.legocdn.com/is/image/LEGOMKTG/email-subscription-thank-you--gl--201606'">${a}</a>`;



// let body = document.body;
// console.log(createNew);


// body.prepend(createNew);
// body.append(createImg);

// function fn(num){

// }

// fn(7)



// console.log(newBox);
// function givUp(num){
//     let newBox = document.querySelector('#root');
//     let mainDiv = document.createElement("div");
//     let i = 1;
//     let w = 30;
    
//     while(i < num){
//         let doubleBox = document.createElement('div');
//         let color = Math.floor(Math.random()*255)
//         let color2 = Math.floor(Math.random()*255)
//         let color3 = Math.floor(Math.random()*255)
        
//         mainDiv.append(doubleBox);
//         // doubleBox.style.width = w + 'px';
//         // doubleBox.style.height = w + 'px';
//         // doubleBox.style.backgroundColor = `rgb(${color},${color},${color})`;
//         i++;
//         w += 10;
//         newBox.innerHTML += `<div style ='width: ${w + 'px'}; height: ${w + 'px'};background-color : rgb(${color},${color2},${color3});' ></div>`;
//         // newBox.innerHTML = `<div>${w}</div>`
//     }
//     root.append(mainDiv)
// }

// givUp(10)










//---------------------



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


//-----------------------------

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
//   ];

  

//   let newFn = document.querySelector('.gallery');
//   console.log(newFn);


//   function added(res){ 
//      result = res.reduce((acc, el) => acc + `
//         <div>
//             <img style = 'width: 300px' src="${el.url}" alt="">
//                 <p>${el.alt}</p>
//         </div>` ,''
//      )
//         return newFn.innerHTML += result;

        
//   }

//   added(galleryItems)



//------------------------------------


/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// let show = document.querySelectorAll('.size-filter  input[checked]');
// console.log(show);

// function checked(el) {
//     let result = Array.from(el)
//     return result.map(el => el.value)
// }

// console.log(checked(show))
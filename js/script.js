'use strict'


// console.log(Handlebars)


// const about = [
// 	{
// 		name : 'Bond',
// 		number : '007',
// 		work : 'Agent',
// 		img :
// 			'https://signaturebricks.com/media/catalog/product/cache/1/image/946x946/9df78eab33525d08d6e5fb8d27136e95/s/0/s00003-img1.jpg',
// 			isActive:true
// 	},
// 	{
// 		name : 'Bo',
// 		number : '005',
// 		work : 'Agent',
// 		img :
// 			'https://signaturebricks.com/media/catalog/product/cache/1/image/946x946/9df78eab33525d08d6e5fb8d27136e95/s/0/s00003-img1.jpg',
// 			isActive: false
// 	},
// 	{
// 		name : 'Bonda',
// 		number : '001',
// 		work : 'Agent',
// 		img :
// 			'https://signaturebricks.com/media/catalog/product/cache/1/image/946x946/9df78eab33525d08d6e5fb8d27136e95/s/0/s00003-img1.jpg',
// 		isActive: true
// 	}
// ]


// const root = document.querySelector('.root')
// const source = document.querySelector('#about-me').innerHTML.trim();

// console.log(source)

// const nweWrite = Handlebars.compile(source)
// console.log(nweWrite)

// const writeMe = nweWrite(about)
// console.log(writeMe)


// const writeMe = about.reduce((acc, el) => acc + nweWrite(el), '')


// root.insertAdjacentHTML('afterbegin', writeMe)




// console.log(source)

// const writeMyCode = Handlebars.compile(source);
// console.log(writeMyCode)

// const markup = writeMyCode(about)
// console.log(markup)

// root.insertAdjacentHTML('afterbegin', markup);














//--------------------------------


// const list = document.querySelector('.team-list')

// const massHero = [
// 	{name : 'Betmen', hero : 'bird', joyful: true, strength:['black', 'bilioner'] },
// 	{name : 'supermen', hero : 'fly', joyful: false, strength:['fast', 'pritte'] },
// 	{name : 'slash', hero :' children', joyful: true, strength:['boy', 'fast'] }
// ]

// const give = document.querySelector('.team').innerHTML.trim()
// console.log(give)

// const write = Handlebars.compile(give);
// console.log(write)

// const show = write(massHero);

// console.log(show)

// list.insertAdjacentHTML('afterbegin', show)

//--------------------------------------------------









const about = [{
	img : 'https://signaturebricks.com/media/catalog/product/cache/1/image/946x946/9df78eab33525d08d6e5fb8d27136e95/s/0/s00003-img1.jpg',
	name : 'Bond',
	about : 'Agent',
	work : 'killer',
	done : true
},
{
	img : 'https://lc-imageresizer-live-s.legocdn.com/resize/?width=1600&imageUrl=https%3A%2F%2Fwww.lego.com%2Fr%2Fwww%2Fr%2Fportals%2F-%2Fmedia%2Fthemes%2Fmarvel-superheroes%2Fgrown-up%2Fcharacters%2Fspider-man.png%3Fl.r%3D292071479',
	name : 'Spider',
	about : 'Agent',
	work : 'killer',
	done : true
},
{
	img : 'https://img.brickowl.com/files/image_cache/larger/lego-batman-crooked-angry-mouth-with-yellow-utility-belt-minifigure-25.jpg',
	name : 'Batman',
	about : 'Agent',
	work : 'killer',
	done : true
},
{
	img : 'https://img.escapade.co.uk/SALEHIRE/Large/887451-ninja-turtle-michelangelo-2nd-costume-1.jpg',
	name : 'miki',
	about : 'Agent',
	work : 'killer',
	done : true
}]





const box = document.querySelector('#box').innerHTML.trim(),
list = document.querySelector('.list'),
btn = document.querySelector('.btn');

const compik = Handlebars.compile(box)

const newNumber = btn.value;
console.log(newNumber)

const newAbout = about.splice(0,newNumber)

console.log(newAbout)

const res = compik(newAbout)



list.insertAdjacentHTML('afterbegin', res)


console.log(res)





// about.forEach(el => list.insertAdjacentHTML('afterbegin', compik(el)))


//-----------------------

let input = document.querySelector('.input');
let output = document.querySelector('.output')

let voc = {
	name: 'Maksim'
}


// input.addEventListener('keyup', function(){
// 	output.innerHTML = this.value.replace(/\{\{(\w*)\}\}/g, function(value){
// 		return voc[value]
// 	})
// })




input.addEventListener('keyup', function(){
	output.innerHTML = this.value.replace(/\{\{(\w*)\}\}/g, function(value) {
		return voc[value]
	})
})






const text = 'When I started hiring JavaScript developers to build applications, it really struck me how few of them understood how to harness JavaScript to build robust application architecture. With that in mind, I decided to write a book that would cover some JavaScript best practices, introduce people to prototypes, object composition, and at least the basic concepts of functional programming (enough to understand how to build and maintain a typical JavaScript application), and then apply those concepts to building some of the common concerns that spring up in the majority of applications, regardless of the application business domain.';

const pattern = /started/;

console.log(pattern.exec(text))



//-----------------------------




/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */ 
const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };
  
  /* 
    Необходимо создать функцию-конструктор Cashier.
    
    Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе): 
      - name - строка, имя кассира, передается при вызове конструктора
      
      - productDatabase - объект база данных продуктов, передается при вызове конструктора
      
      - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0 
      
      - getCustomerMoney(value) - метод, получает число, деньги покупателя, и записывает его в поле customerMoney.
      
      - countTotalPrice(order) - метод, получает объект списока покупок, считает общую стоимость покупок.
        🔔 Ключи объекта order есть в объекте productDatabase. Из order берем количество единиц продукта,
           а из productDatbase цену за одну штуку и умножаем, так получаем цену одного типа продукта в заказе.
           Чтобы посчитать цену для всех продуктов заказа используйте цикл, перебрав все ключи order.
       
      - countChange(totalPrice) - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
          * Обязательно проверьте что customerMoney не меньше чем значение totalPrice
          * Если денег было передано достаточно, возвращает разницу денег.
          * Если в customerMoney меньше денег чем в totalPrice, возвращает null 
          
      - onSuccess(change) - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${change}!`.
      
      - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'   
      
      - reset() - метод, сбрасывает поле customerMoney 0.
//   */
  
//   function Cashier(name, productDatabase) {
//     // 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта
//     this.name = name;
//     this.productDatabase = productDatabase;
//     this.customerMoney = 0;
//     this.getCustomerMoney = function (value) {

//       this.customerMoney = this.customerMoney + value;
//   }
//     this.countTotalPrice = function(order){
//       let summ = 0;
//       for (let key in order){
//         summ += order[key] * productDatabase[key];
//       }
//       return summ
//     }
  
//     this.countChange = function(){
//       if (totalPrice <= this.customerMoney) {
//         return   this.customerMoney - totalPrice
//     } else {
//         return null;
//     }
//     }
//     this.onSuccess = function(change){console.log(`Спасибо за покупку, ваша сдача ${change}!`)}
//     this.onError = function(change){console.log('Очень жаль, вам не хватает денег на покупки')};
//     this.reset = function(change){this.customerMoney = 0}

//   }
  
//   /* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
//   const order = {
//     bread: 2,
//     milk: 2,
//     apples: 1,
//     cheese: 1
//   };
  
//   /* Пример использования */
//   const mango = new Cashier('Mango', products);
  
//   // Проверяем исходные значения полей
//   console.log(mango.name); // Mango
//   console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
//   console.log(mango.customerMoney); // 0
  
//   // Вызываем метод countTotalPrice для подсчета общей суммы
//   // передавая order - список покупок пользователя
//   const totalPrice = mango.countTotalPrice(order);
  
//   // Проверям что посчитали
//   console.log(totalPrice); // 110
  
//   // Вызываем getCustomerMoney для запроса денег покупателя
//   mango.getCustomerMoney(310);
  
//   // Проверяем что в поле с деньгами пользователя
//   console.log(mango.customerMoney); // 300
  
//   // Вызываем countChange для подсчета сдачи
//   const change = mango.countChange();
  
//   // Проверяем что нам вернул countChange
//   console.log(change); // 190
  
//   // Проверяем результат подсчета денег
//   if(change !== null) {
//      // При успешном обслуживании вызываем метод onSuccess
//     mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
//   } else {
//     // При неудачном обслуживании вызываем метод onError   
//     mango.onError(); // Очень жаль, вам не хватает денег на покупки
//   }
  
//   // Вызываем reset при любом исходе обслуживания
//   mango.reset();
  
//   // Проверяем значения после reset
//   console.log(mango.customerMoney); // 0


const key = '+38 (068) 8132740'

const word = /\d/;


console.log(word.match(key))
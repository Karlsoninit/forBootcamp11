/*
 * Напиши класс Car с указанными свойствами и методами
*/

// class Car {
//     constructor({ speed = 0,maxSpeed = 0, running, distance = 0 }) {
//         this.speed = speed;
//         this.maxSpeed = maxSpeed;
//         this.running = false;
//         this.distance = distance;
//       /*
//         Добавь свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
//           - maxSpeed - для хранения максимальной скорости 
//           - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//           - distance - содержит общий киллометраж, изначально с 0
//       */
//     }
  
//     turnOn() {
//         return this.running = true;
//       // Добавь код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//     }
  
//     turnOff() {
//         return this.running = false;
//       // Добавь код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//     }
  
//     accelerate(spd) {
//         if(spd > this.maxSpeed ) {
//             return this.maxSpeed
//         }
//        return  this.speed = spd
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//     }
  
//     decelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     }
  
//     drive(hours) {
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//     }
//   }
  
//   const car = new Car({ maxSpeed: 100 });
  
//   console.log(car.turnOn());
//   console.log(car.turnOff());
//   console.log(car.accelerate(90));

  //-----------------------------------


  /*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/
 
// class Car  {
//     constructor ({maxSpeed = 0, price = 0}){
//         this.maxSpeed = maxSpeed;
//         this.price = price;
//     }

//     get value(){
//         return this.price
//     }

//     set value(value) {
//        return  this.price = value;
//     }
// }


// const car = new Car({ maxSpeed: 50, price: 2000 });
// console.log(car.value); // 2000



// car.value = 4000;
// console.log(car.value); // 4000


//-----------------------


let box = document.querySelector('.box');
box.textContent = 'hello';
// let showBox = box.children;
console.log(box);

let inp = document.querySelector('.inp');
console.log(inp.value)
console.log(inp);
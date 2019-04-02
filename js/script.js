'use strict'



//============== && || ===================

// const a = 20;
// const result = a < 10 || a < 30;
// console.log(result);

// console.log(false)


// let funy;

// const inputUser = prompt('enter your name');

// if(inputUser === 'Maksim') {
//     funy = 'cry';
// } else {
//     funy = 'laugh';
// }
// console.log(funy);


// inputUser === 'Maksim' ? funy = 'cry' : funy = 'laugh';

// console.log(funy);



// const login = 'Bond';
// const password = '007';



// const inputLogin = prompt('Enter login');

// if (inputLogin === login) {
//     const inputPassword = prompt('Enter password');

//     if (inputPassword === password) {

//         const day = Number(prompt('day'));

//         switch (day) {
//             case 1:
//                 alert('Monday');
//                 break;
//             case 2:
//                 alert('Thusday');
//                 break;
//             case 3:
//                 alert('Wednesday');
//                 break;
//             default:
//                 console.error('error');
//         }
//     } else {
//         alert('error');
//     }

// } else {
//     alert('error')
// }



// let day = 'monday';
// let number = +prompt('Enter number');

// if (number === 1 ) {
//     day = 'Monday';
//     alert('Monday')
// } else if (number === 2) {
//     day = 'Thusady';
//     alert('Thusday')
// } else if (number === 3) {
//     alert('Wednesday');
// } else {
//     console.error('error')
// }

// switch(number) {
//     case 1:
//     alert('Monday'); 
//     // break;
//     case 2:
//     alert('Thusday');
//     // break;
//     case 3:
//     alert('Wednesday');
//     // break;
//     default:
//     console.error('error');
// }








const name = Number(prompt('num'));
if(Number.isInteger(name)){
    console.log('ok');
} else {
    console.log('no');
}
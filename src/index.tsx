import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





//work whis data
//в тайп скрипт типы данных нельзя переприсвоить,
//если в переменной лежит намбер а мы хотим заменить на строкунапример
//let a = 10;
//a = 'Vit';

// let a = {
//     name: 'Vit',
//     number: 10,
//     address: {
//         country: 'Belarus',
//         city: 'Minsk'
//     }
// };
//
// let users  = [
//     {
//         name: 'Vit',
//         number: 10,
//         address: {
//             country: 'Belarus',
//             city: 'Minsk'
//         }
//     },
//     {
//         name: 'Vera',
//         number: 14,
//         address: {
//             country: 'Belarus',
//             city: 'Minsk'
//         }
//     }
// ];
//
// console.log(users[0]['address']['city']);
//
//
// let emptyVariable: number;
// emptyVariable = 'str';
// emptyVariable = 10;
// emptyVariable = true;
//
// let emptyVariable2: any;
// emptyVariable2 = 'str';
// emptyVariable2 = 10;
// emptyVariable2 = true;
//
// let emptyVariable3: Array<number>;//don't work
// emptyVariable3 = [1, 2, 3, 4, 5];
// emptyVariable3 = [];
// emptyVariable3 = ['Vit', 'like', 'programming'];
//
// let emptyVariable4: Array<number | string>;//work
// emptyVariable4 = [1, 2, 3, 4, 5];
// emptyVariable4 = [];
// emptyVariable4 = ['Vit', 'like', 'programming'];






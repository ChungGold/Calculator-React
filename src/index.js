import ReactDOM from 'react-dom';
// import { useState, useRef } from 'react'
import { App } from './App';

ReactDOM.render(
    <App />
  ,document.getElementById('root')
);

let buttons = document.getElementsByClassName('button');
let display = document.getElementById('calcDisplay');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    if (buttons[i].innerHTML === 'RESET') {
      display.innerHTML = ""
    } else {
      display.innerHTML += `
      ${buttons[i].innerHTML}
      `
    }
  })
}

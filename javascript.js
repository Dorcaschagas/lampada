//variaveis

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function lampOn(){
    // alert('teste')
    lamp.src = './img/ligada.jpg';
}

function lampOff(){
    // alert('teste')
    lamp.src = './img/desligada.jpg';
}

function lampbroken(){
    // alert('teste')
    lamp.src = './img/quebrada.jpg';
}

// function islampBroken(){
//     return lamp.src.indexOf ('quebrada') > -1
// }

//"ouvindo o click"
turnOn.addEventListener ('click', lampOn); // quando clicar, mudar img
turnOff.addEventListener ('click', lampOff); // quando clicar, mudar img
lamp.addEventListener ('mouseover', lampOn); // quando clicar, mudar img
lamp.addEventListener ('mouseleave', lampOff); // quando clicar, mudar img
lamp.addEventListener('dblclick', lampbroken);
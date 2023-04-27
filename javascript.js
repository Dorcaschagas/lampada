//variaveis

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const botao = document.getElementById('botao')

function OnOff(){
    if(botao.textContent == 'Ligar'){
        lampOn();
        botao.textContent = 'Delisgar'
    } else {
        lampOff();
        botao.textContent = 'Ligar'
    }
}

function lampOn(){
    if( ! islampBroken()){
         lamp.src = './img/ligada.jpg';
    }
}

function lampOff(){
    if( ! islampBroken()){
        lamp.src = './img/desligada.jpg';
    }
}

function lampbroken(){
    lamp.src = './img/quebrada.jpg';
}

function islampBroken(){
    return lamp.src.indexOf ('quebrada') > -1
}


//"ouvindo o click"
botao.addEventListener('click', OnOff)
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener('dblclick', lampbroken);
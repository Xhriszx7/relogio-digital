const horasElem = document.getElementById('horas');
const minutosElem = document.getElementById('minutos');
const segundosElem = document.getElementById('segundos');

function updateTime() {
    let dateToday = new Date();
    let horasAtual = dateToday.getHours();
    let minutosAtual = dateToday.getMinutes();
    let segundosAtual = dateToday.getSeconds();
    
    if (horasAtual < 10) horasAtual = '0' + horasAtual;
    if (minutosAtual < 10) minutosAtual = '0' + minutosAtual;
    if (segundosAtual < 10) segundosAtual = '0' + segundosAtual;
    
    horasElem.textContent = horasAtual;
    minutosElem.textContent = minutosAtual;
    segundosElem.textContent = segundosAtual;
}

const relogio = setInterval(updateTime, 1000);
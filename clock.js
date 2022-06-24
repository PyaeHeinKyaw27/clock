setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}


function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

const button = document.querySelector("button");
const clock = document.querySelector(".clock");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const color = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

button.addEventListener('click', changeB)
button.addEventListener('click', changeH)
button.addEventListener('click', changeM)
button.addEventListener('click', changeS)

function changeB() {
    const colorIndex = parseInt(Math.random() * color.length)
    clock.style.backgroundColor = color[colorIndex]
}

function changeH() {
    const colorI = parseInt(Math.random() * color.length)
    hour.style.backgroundColor = color[colorI]
}

function changeM() {
    const colorIn = parseInt(Math.random() * color.length)
    minute.style.backgroundColor = color[colorIn]
}

function changeS() {
    const colorInd = parseInt(Math.random() * color.length)
    second.style.backgroundColor = color[colorInd]
}
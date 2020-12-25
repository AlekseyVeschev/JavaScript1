"use strict"
//?Задание
const link = document.getElementById('four')
console.log(link)

const classOne = document.getElementsByClassName("one")
console.log(classOne)

const cardLinkEl = document.querySelector(".card-body")
const cardLink = cardLinkEl.querySelectorAll(".card-link")
console.log(cardLink)

const title = document.title
console.log(title)

const elementMt = document.getElementsByClassName("mt-0")
console.log("parentNode", elementMt[0].parentNode)

const divLesson = document.querySelector(".lesson")
const h3 = document.createElement("h3")
h3.innerText = "hello world"
divLesson.appendChild(h3)
console.log("divLesson", divLesson)

const warningEl = document.querySelector('.btn-outline-warning')
console.log("warningEl", warningEl)
warningEl.remove()

const buttonInfo = document.querySelector(".btn-info")
buttonInfo.innerText = "Кнопка"
console.log("buttonInfo", buttonInfo)
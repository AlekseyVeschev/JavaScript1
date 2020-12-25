"use strict"

document.addEventListener("DOMContentLoaded", function () {
   alert("все теги добавлены на страницу")
})

window.addEventListener("load", function () {
   alert("все картинки загружены")
})

const button = document.querySelector(".btn")
button.addEventListener("click", function () {
   alert("КЛИК")
})

const textarea = document.querySelector("textarea")
textarea.addEventListener("mouseover", function () {
   console.log("вы навели на textarea")
})
"use strict"

const ul = document.querySelector("ul")
console.log("ul", ul.classList)
ul.classList.add('one')

const navEl = document.querySelector(".nav-link")
console.log("navEl", navEl.classList.toggle(".active"))

const dropdownEl = document.querySelector(".dropdown-menu")
dropdownEl.classList.remove("dropdown-menu")
console.log("dropdownEl", dropdownEl.classList)

const menuEl = document.querySelector(".menu")
menuEl.insertAdjacentHTML("afterbegin", "<a href='#'>link</a>")
console.log("menuEl", menuEl)


const button = document.querySelector(".close")
console.log("data-dismiss", button.getAttribute("data-dismiss"))
console.log("aria-label", button.getAttribute("aria-label"))

const h1 = document.querySelector("h1")
h1.setAttribute("data-one", "один")
h1.setAttribute("data-two", "два")
console.log("h1", h1)

const idElement = document.getElementById("title")
idElement.id = "другое"
console.log("idElement", idElement)
"use strict"
//?Задание 1
//?Задание 1.1

function Product(name, price) {
   this.name = name;
   this.price = price;
}
Product.prototype.make25PercentDiscount = function (discount) {
   this.price = this.price / 100 * (100 - discount)
}

const Product1 = new Product("apple", 200)

console.log("Product1.price", Product1.price)
Product1.make25PercentDiscount(25)
console.log("Product1.price", Product1.price)

//?Задание 1.2
function Post(author, text, date) {
   this.author = author;
   this.text = text;
   this.date = date
}
Post.prototype.edit = function (newText) {
   this.text = newText
}
function AttachedPost(author, text, date) {
   Post.call(this, author, text, date)
   this.highlighted = false
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
   this.highlighted = true
}

const AttachedPost1 = new AttachedPost("Alex", "JS", "21.12")

console.log("AttachedPost1", AttachedPost1.text)
AttachedPost1.edit("JavaScript")
console.log("AttachedPost1", AttachedPost1.text)

console.log("AttachedPost1", AttachedPost1.highlighted)
AttachedPost1.makeTextHighlighted()
console.log("AttachedPost1", AttachedPost1.highlighted)

"use strict"
//?Задание 1
//?Задание 1.1
class Product {
   constructor(name, price) {
      this.name = name;
      this.price = price;
   }
   make25PercentDiscount(discount) {
      this.price = this.price / 100 * (100 - discount)
   }
}

const Product2 = new Product("apple", 200)

console.log(Product2.price)
Product2.make25PercentDiscount(25)
console.log(Product2.price)

//?Задание 1.2
class Post {
   constructor(author, text, date) {
      this.author = author;
      this.text = text;
      this.date = date
   }
   edit(newText) {
      this.text = newText
   }
}
class AttachedPost extends Post {
   constructor(author, text, date) {
      super(author, text, date)
      this.highlighted = false
   }
   makeTextHighlighted() {
      this.highlighted = true
   }
}

const AttachedPost2 = new AttachedPost("Alex", "JS", "21.12")

console.log(AttachedPost2.text)
AttachedPost2.edit("JavaScript")
console.log(AttachedPost2.text)

console.log(AttachedPost2.highlighted)
AttachedPost2.makeTextHighlighted()
console.log(AttachedPost2.highlighted)
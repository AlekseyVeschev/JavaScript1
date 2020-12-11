//?задание 1
//пример 1 
//*Префиксная форма инкримента (возвращает новое значение)
//let a = 1, b = 1, c, d; c = ++a;
//alert(c); 
// ответ: 2 

//пример 2 
//*Постфиксная форма инкримента (возвращает старое значение)
//d = b++;
//alert(d); 
//ответ: 1 

//пример 3 
//* потому,что в третьей строке кода "a" увеличивается на 1
//*вырожение "++а" равно "a = a + 1"; c = 2 + 3
//c = 2 + ++a;
//alert(c); 
//ответ: 5 

//пример 4
//*как и в третьем примере,только "b" возвращает ещё старое значение.
//d = 2 + b++;
//alert(d); //ответ: 4
//*в строке 3,16 "a" увеличивается на 1
//alert(a); //3 
//*в строке 9,22 "b" увеличивается на 1
//alert(b); //3

//?задание 2
//*(a *= 2) равно (a = a * 2); ответ: a = 4,x = 5
//let a = 2;
//let x = 1 + (a *= 2);

//?задание 3
/*
let a = 5
let b = 4
if (a >= 0 && b >= 0) {
   console.log(a - b)
};
if (a < 0 && b < 0) {
   console.log(a * b)
};
if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
   console.log(a + b)
};
*/

//?задание 4+5
/*
function addition(a, b) {
   return a + b
};
function subtraction(a, b) {
   return a - b
};
function division(a, b) {
   return Math.round((a / b) * 100) / 100;
};
function multiplication(a, b) {
   return a * b
};


//?задание
function mathOperation(arg1, arg2, operation) {
   switch (operation) {
      case "+":
         return addition(arg1, arg2)
      case "-":
         return subtraction(arg1, arg2)
      case "*":
         return multiplication(arg1, arg2)
      case "/":
         return division(arg1, arg2)
      default:
         console.log("Введите корректный оператор")
   }
}
console.log(mathOperation(5, 6, "*"))

*/

//?задание 6
/*
let summ = prompt("Вы хотите положить на счет в банке: ")
let number = Number(summ % 10)
switch (number) {
   case 0:
   case 5:
   case 6:
   case 7:
   case 8:
   case 9:
      alert(`Ваша сумма в ${summ} рублей успешно зачислена.`)
      break;
   case 1:
      alert(`Ваша сумма в ${summ} рубль успешно зачислена.`)
      break;
   case 2:
   case 3:
   case 4:
      alert(`Ваша сумма в ${summ} рубля успешно зачислена.`)
      break;
   default:
      alert("Это не деньги(((")
}
*/







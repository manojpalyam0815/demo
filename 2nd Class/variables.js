//let, var &const
// we dont need to create datatypes while creating variables, so we can assign any value whether a string
// boolean or a number to a variables . So the javascript is called Loosely typed Language
let a = 5
console.log(a)

const b= 6
console.log(b)

var c = 9
console.log(c)

a=7;
console.log(a)

//b will be declared as const , So the page will stop here and it will shoe it as an error
/* b=7
console.log(b) */

c=9
console.log(c)


let x=4
let X=6
console.log(x,X) //javascript is Case Sensitive


let manoj= "manoj"
let _manoj= "manoj"
let $manoj = "manoj"
console.log($manoj)

//not valid names are
//let 1aa ==> Names cannot be start with Integers or numbers
//let @bb==> It will not start with @ symbol
// let let ==> We cant use tismethod to a program

//industry standard named to a camel case (Which means capitalising the next word on an elemant)

let manojKing
let helloWorld
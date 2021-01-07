/*x=2;
console.log(x);
var x;*/

// In Variable Hoisting , variable is declared at the top...//

/*function f1(){
    a=9;
    b=10;
    c=a*b;
    console.log(c);
    var a;
    var b;
    var c;
}
f1(); // prints the output of function.(local variable)*/


var a;
var b;
var c;
function f1(){
    a=10;
    b=8;
    c=a%b;
    console.log(c);
}
f1();




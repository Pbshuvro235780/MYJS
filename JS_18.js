const person = {
name : " Alice ",
age : 25 ,
greet : function () {
console .log ("Hello , " + this . name ) ;
}
}; 

person . greet () ; // Hello , Alice
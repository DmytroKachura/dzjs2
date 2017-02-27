var a = 1;
var b = 1;
var c;
var fib = prompt("Enter");
document.write(a + "<br>");
document.write(b + "<br>");

for(var i = 3; i <= fib; i++) {
    c = a + b;
    a = b;
    b = c;
    document.write(c+'<br>');
}
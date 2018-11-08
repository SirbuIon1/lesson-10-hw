var myCurentAge = 26;

console.log('for loop');
for (var i = 3; i <= myCurentAge; i += 3) {
    console.log('i = ', i);
    var a = i;
}
if (a % 3 === 0) {
    alert("for loop age is: " + a);
}
console.log('while');
var x = 3;
while (x < myCurentAge) {
    console.log('x = ', x);
    var b = x;
    x += 3;
}
alert("while loop age is  " + b);
console.log('do while');
var n = 3;
do {
    console.log('n=', n);
    n += 3;
    if (n > 24) { break; }
    var c = n;
} while (n < myCurentAge);
alert("do while loop " + c);
console.log('for in');
var m = ['0', '21', '22', '3', '14', '15', '16', '7', '8', 9, 10, 11, 2, 13, 4, 5, 6, 17, 18, 19, 20, 1, 12, 23, 24, 25];
var d;
for (d in m) {
    if (m[d] % 3 === 0) {
        var y = m[d];
        console.log('d', d, 'index = ', m[d]);
    }
} alert("for in loop " + y);
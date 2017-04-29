/*jslint devel: true*/

var name = prompt('Jak masz na imię?');
alert('Witaj, ' + name);
console.log('Witaj, ' + name);

var a = prompt('Podaj długość podstawy trójkąta (w cm)');
var h = prompt('Podaj wysokość trójkąta (w cm)');
var triangleArea = a * h / 2;
alert('Pole trójkąta wynosi ' + triangleArea + ' cm.');
console.log('Pole trójkąta o podstawie a = ' + a + ' i wysokości h = ' + h + ' wynosi ' + triangleArea);

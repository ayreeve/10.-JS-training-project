/*jslint devel: true*/

var name = prompt('Jak masz na imię?');
alert('Witaj, ' + name);
console.log('Witaj, ' + name);

var a = prompt('Podaj długość podstawy trójkąta (w cm)');
var h = prompt('Podaj wysokość trójkąta (w cm)');
var triangleArea = a * h / 2;
alert('Pole trójkąta wynosi ' + triangleArea + ' cm.');
console.log('Pole trójkąta o podstawie a = ' + a + ' i wysokości h = ' + h + ' wynosi ' + triangleArea);

var x = 1,
    y = 2,
    value = (x * x) + (2 * x * y) - (y * y);

var value = value >= 0 ? console.log('Wynik działania (x * x) + (2 * x * y) - (y * y) (równy ' + value + ') jest liczbą dodatnią.') : console.log('Wynik działania (x * x) + (2 * x * y) - (y * y) (równy ' + value + ') jest liczbą ujemną.');

function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
        return a * h / 2;
    } else {
        return 'Nieprawidłowe dane';
    }
}

console.log(getTriangleArea(10, 6));

var triangle1Area = console.log(getTriangleArea(5, 2));
var triangle2Area = console.log(getTriangleArea(99, 789));
var traingle3Area = console.log(getTriangleArea(12, 71));

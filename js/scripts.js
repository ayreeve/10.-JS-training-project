// jslint devel: true

// welcome 
var name = prompt('Jak masz na imię?');
alert('Witaj, ' + name);

console.log('Witaj, ' + name);

// triangle area
var a = prompt('Podaj długość podstawy trójkąta (w cm)'),
    h = prompt('Podaj wysokość trójkąta (w cm)'),
    triangleArea = a * h / 2;
alert('Pole trójkąta wynosi ' + triangleArea + ' cm.');

console.log('Pole trójkąta o podstawie a = ' + a + ' i wysokości h = ' + h + ' wynosi ' + triangleArea);

// operation
var x = 1,
    y = 2,
    value = (x * x) + (2 * x * y) - (y * y);
if (value >= 0) {
    console.log('Wynik działania (x * x) + (2 * x * y) - (y * y) (równy ' + value + ') jest liczbą dodatnią.');
} else {
    console.log('Wynik działania (x * x) + (2 * x * y) - (y * y) (równy ' + value + ') jest liczbą ujemną.');
}

// triangle area conditional statement
function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
        return a * h / 2;
    } else {
        return 'Nieprawidłowe dane';
    }
}

console.log(getTriangleArea(10, 6));

var triangle1Area = console.log(getTriangleArea(5, 2)),
    triangle2Area = console.log(getTriangleArea(99, 789)),
    triangle3Area = console.log(getTriangleArea(12, 71));

// array
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
    allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}

console.log(allNames);

// strings
var text = 'Papugi koszą trawę, unosząc się nad ziemią na czerwonych dywanach',
    animal = 'Zielone słonie',
    animalUpper = animal.toUpperCase(),
    subjectChange = text.replace('Papugi', animalUpper);

console.log(subjectChange.slice(0, subjectChange.length / 2));


// tree
function drawTree(n) {
    for (var i = 1; i <= n; i++) {
        var star = '';
        var space = '';
        for (var j = 1; j < 2 * i; j++) {
            star += '*';
        }
        for (var k = i; k < n; k++) {
            space += ' ';
        }
        console.log(space + star);
    }
}

drawTree(5);

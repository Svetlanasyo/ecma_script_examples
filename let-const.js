
let name = 'Jane';

/* Można zmieniać znaczenie zmiennej, jej typ */
name = 'Bob';
name = 1;
name = [1,2,3];

console.log(name);

const list_name = ['Jane', 'Daniel'];
/* Nie można zmienić typ, jeżeli znaczenie zmiennej jest typem prostym, to nie można zmienić,
w typach złożonych można zmienić zgodnie z funkcjonalem do dannego typu.*/

list_name.push('Adrian');

console.log(list_name)


const person = {
    name: 'Ann',
    age: 25
};

person.name = 'Adriana';

/* Obszar dostępności*/
/* W tym przypadku jest tylko jeden obszar pamięci w którym przechowuję się znaczenie zmiennej i. Dopóki wykona
się funkcja setTimeout znaczenie i bedzie równo 3, bo znaczenia 0,1,2 nie przechwywują się. Wynik będzie (3,3,3)*/
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, i*100)
}

/* W tym przypadku zmiennai istnieje w bloku funkcji i dla kazdej iteracji jest tworzone swoje miejsce w pamieci. Wynik będzie (0,1,2)*/
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, i*100)
}

/* Best practice: Używać modyfikator CONST, a LET tylko w przypadkach kiedy znaczenie powinno byc zmienione */
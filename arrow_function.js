function square(x) {
    return x*x;
}

const sq = (x) => x*x;

// W przypadku, jeżeli mamy tylko jeden parametr to może być tak
const sq1 = x => x*x;

// W przypadku, jeżeli funkcja zawiera więcej wierszy to musi być użyty {} i słowo kluczowe RETURN
const sq2 = (x) => {
    return x*x;
};

console.log(sq(3));
console.log(sq1(3));
console.log(sq2(3));
console.log(square(3));

const arr = ['1', '3', '2', '4'];

const result = arr
    .map((el) => parseInt(el))
    .filter((num) =>num%2)
    .reduce((max, value) => Math.max(max, value));

console.log(result);

const greeter = {
    greet: function (name) {
        console.log('Hello', name)
    },

    greetAll: function (names) {
        /* W srodku funkcji znaczenie this gini, dla tego kod w komentarzu nie wykona się
        names.forEach(function (name) {
            this.greet(name)
        }); */
        names.forEach((name)=>{this.greet(name)})
    }
};

greeter.greetAll(['Bob', 'Mark', 'Pete']);
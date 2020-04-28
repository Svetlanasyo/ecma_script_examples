class Animal {
    constructor(name, voice) {
        this.name=name;
        this.voice=voice;
    }

    say() {
        console.log(this.name, ' goes ', this.voice);
    }
}

//duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
class Bird extends Animal {
    //Inicjalizacja propertisów
    count = 1;
    //funkcja w klasie która przywiązana do objektu
    inc = () => {
        this.count += Bird.incrementStep;
        console.log(this.count);
    }
    //pola statyczne
    static incrementStep = 2;

    //metody statyczne
    static incrementAll = function(arr) {
        arr.forEach((el) => el.inc());
    }

    constructor(name, voice, canFly) {
        super(name, voice);
        super.say();
        this.canFly = canFly;
    }

    say() {
        console.log('Birds don\'t like to talk');
    }
}

const duck = new Bird('Duck', 'quack', true);
duck.say();

console.log(duck.count);
duck.inc();
setTimeout(duck.inc, 1000);
Bird.incrementAll([]);
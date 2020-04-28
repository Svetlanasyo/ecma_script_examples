//setPrototype
const animal = {
    say() {console.log(this.name, ' goes ', this.voice)}
};

const dog = {
    name: 'dog',
    voice: 'woof'
};
Object.setPrototypeOf(dog, animal);

const cat = {
    name: 'cat',
    voice: 'meow'
};
Object.setPrototypeOf(cat, animal);

//Object.create
const cow = Object.create(animal);
cow.name = 'cow';
cow.voice = 'muuuu';

function createAnimal(name, voice) {
    const result = Object.create(animal);
    result.name = name;
    result.voice = voice;
    return result;
}
const mouse = createAnimal('Mouse', 'squark');

//new
function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
}
Animal.prototype.say = function() {console.log(this.name, ' goes ', this.voice)};

const chicken = new Animal('Chicken', 'Pi-Pi');
dog.say();
cat.say();
cow.say();
mouse.say();
chicken.say();

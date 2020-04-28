//create object
const x = 10;
const y = 30;

const point = {
    x: x,
    y: y,

    draw: function () {
        console.log(point);
    }
};

point.draw();

const pointECMA = {
    x,
    y,

    draw() {
        console.log(pointECMA);
    }
};
pointECMA.draw();

const prefix = '_blah_';

const data = {
    [prefix + 'name']: 'Bob',
    [prefix + 'age']: 23
};
console.log(data);

//funkcja kopiowania propertisów z jednego objektu do drugiego
const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};

const opts = {
    user: 'john',
    password: 'utopia'
};

const res = Object.assign({}, defaults, opts);
console.log(res);

//shallowCopy
const person = {
    name: 'Bob',
    friends: ['Ann', 'John']
};
const shallowCopy = Object.assign({}, person);
person.friends.push('Jane');

console.log(shallowCopy);
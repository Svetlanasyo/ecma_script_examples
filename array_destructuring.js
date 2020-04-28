const fib = [1,1,2,3,5,8,13];

//dostajemy pierwsze trzy znaczenia
const [a,b,c] = fib;
console.log(a,b,c);

//dostajemy 2 i 4 znaczenie
const [,second,,forth] = fib;
console.log(second,forth);

const line = [[10,17],[14,7]];

const [[p1x, p1y], [p2x,p2y]] = line;
console.log(p1x, p1y, p2x, p2y); //10 17 14 7

//default parameters
const people = ['cris', 'sandra'];
const [a1, b1, c1 = 'guest'] = people;
console.log(a1, b1, c1); //cris sandra guest

// rest parameters
const peopleRest = ['cris', 'sandra', 'adam'];
const [aRest, ...others] = peopleRest;
console.log(aRest, others); //cris [ 'sandra', 'adam' ]

//Mamy objekt który zawiera zwierząt i to co oni mówią, chcemy znależć wszystkich zwierząt którzy mówią "squeak"
const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
};

const res = Object.entries(dict);
console.log(res); //[[ 'duck', 'quack' ], [ 'dog', 'wuff' ], [ 'mouse', 'squeak' ], [ 'hamster', 'squeak' ]]

const result = res.filter((arr) => arr[1] === 'squeak')
    .map((el) => el[0]);
console.log(result); //[ 'mouse', 'hamster' ]

const result2 = res.filter(([, value]) => value === 'squeak')
    .map(([key]) => key);
console.log(result2); //[ 'mouse', 'hamster' ]

//Get array items if array is a object property
const shape = {
    type: 'segment',
    coordinates: {
        start: [10, 15],
        end: [17, 15]
    }
};

const {coordinates: {start:[startX, startY], end:[endX, endY]}} = shape;
console.log('stratX=',startX, ' startY=', startY, ' endX=', endX, ' endY=',endY) //stratX= 10  startY= 15  endX= 17  endY= 15
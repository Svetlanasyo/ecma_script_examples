function max(a, b, ... numbers) {
    console.log(a, b, numbers);
}

max(1,2,3);
//=> 1 2 [3]
max(1);
//=> 1 undefined []
max();
//=> undefined undefined []

/*!!! Parameter rest (...) powinien byc po wszystkich paramentrach i NIE MOŻNA mieć więcej niż 1 rest parametr*/
function fetchOrders(count = 10, start = 0) {
    console.log('Getting', count, 'orders starting from', start);
}

fetchOrders(15, 3);
/* !!! JS przypisuję znaczenia parametrów z lewa na prawo, dla tego parametry ze znaczeniem defoltowym
* powinni być napisane na koncu */

function fetchOrders1(count = 10, start) {
    console.log('Getting', count, 'orders starting from', start);
}
fetchOrders1(undefined, 1);
fetchOrders1(null, 1);

// parametr defoltowy - objekt
function findProducts(opts = {minPrice:10, maxPrice:20}) {
    console.log(opts);
}

findProducts();
findProducts({});
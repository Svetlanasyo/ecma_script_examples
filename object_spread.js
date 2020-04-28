const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};

const opts = {
    user: 'john',
    password: 'utopia'
};

const result = {... defaults, ...opts};
console.log(result);

const port = 8080;
const result2 = {... defaults, ...opts, port};
console.log(result2);

const result3 = {... defaults, ...opts, port, connect(){console.log('Hello')}};
console.log(result3);
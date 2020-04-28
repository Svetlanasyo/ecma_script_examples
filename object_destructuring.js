const person = {
    firstName:'Peter',
    lastName: 'Smith',
    age:27,
    role:'admin'
};

//const firstName = person.firstName;
//const lastName = person.lastName;

const {firstName, lastName} = person;
console.log(firstName, lastName);

const {age, ...Name}=person;
console.log(age);
console.log(Name);

const person2 = {
    name: {
        first:'Anna',
        last:'Kowalska'
    },
    age:28
};
const{name: {first, last}} = person2;
console.log(first, last);

//Rename consts
const{name: {first:firstNameRename, last:lastNameRename}} = person2;
console.log(firstNameRename, lastNameRename);

//default (in case there is not parameters in objects)
const {role = 'user'} = person;
console.log(role);

/* !!! NIE PRAWIDLOWO
const { permissions: {role='user'}} = person;
console.log(role);
*/

/* Można */
const { permissions: {role1='user'} = {}} = person;
console.log(role1);

function connect({
    host='localhost',
    port=1829,
    user= 'peter'
}) {
    console.log('User: ', user, 'Port: ', port, 'Host: ', host);
}

connect({}); //User:  peter Port:  1829 Host:  localhost
connect({port:1111}); //User:  peter Port:  1111 Host:  localhost
//Error connect();

function connect2({
                     host='localhost',
                     port=1829,
                     user= 'peter'
                 }={}) {
    console.log('User: ', user, 'Port: ', port, 'Host: ', host);
}
connect2();


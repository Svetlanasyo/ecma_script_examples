const user = 'Bob';
const num = 17;
const txt = 'Hello, ' + user + ' you have ' + num + ' letters in your box';

const txtECMA = `Hello ${user} you have ${num} letters in your box`;

console.log(txt); //Hello, Bob you have 17 letters in your box
console.log(txtECMA); //Hello Bob you have 17 letters in your box

const dateECMA = `Today is ${Date.now()}`; //Today is 1586807825402
console.log(dateECMA);

const html =
    '<ul>' +
    '<li>Item One</li>' +
    '<li>Item Two</li>' +
    '</ul>';

const templateHtml = `
    <ul>
        <li>Item One</li>
        <li>Item Two</li>
    </ul>
`;

console.log(templateHtml); /*
    <ul>
        <li>Item One</li>
        <li>Item Two</li>
    </ul> */

console.log(html); //<ul><li>Item One</li><li>Item Two</li></ul>

const items = ['tea', 'coffee'];
const templateHtml2 = `
    <ul>
        <li>${items[0]}</li>
        <li>${items[1]}</li>
    </ul>
`;

console.log(templateHtml2); /*
   <ul>
        <li>tea</li>
        <li>coffee</li>
    </ul> */
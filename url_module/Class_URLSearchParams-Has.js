const myURL = new URL('https://example.org/?a=b&c=d&a=34');
let has_a= myURL.searchParams.has('a');
console.log("Has A: " + has_a);
// Prints: 'Has A: true'

let has_name= myURL.searchParams.has('name');
console.log("Has Name: " + has_name);
// Prints: 'Has Name: false'


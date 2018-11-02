const myURL = new URL('https://example.org/?a=b&c=d&a=34');
let a= myURL.searchParams.get('a');
console.log("a: " + a);
// Prints:
//  a: b

const myURL = new URL('https://example.org/?a=b&c=d&a=34');
let allParams= myURL.searchParams.getAll('a');
console.log("allParams:");
console.log(allParams);
// Prints:
// allParams:
// [ 'b', '34' ]
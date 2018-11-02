
const myURL1 = new URL('/foo', 'https://example.org/');
console.log("myURL1: " + myURL1);
// https://example.org/foo

const myURL2 = new URL({ toString: () => 'https://example.org/' });
console.log("myURL2: " + myURL2);
// https://example.org/

const myURL3 = new URL('https://你好你好');
console.log("myURL3: " + myURL3);
// https://xn--6qqa088eba/


let myURL4 = new URL('http://anotherExample.org/', 'https://example.org/');
console.log("1: myURL4: " + myURL4);
// http://anotherexample.org/

myURL4 = new URL('https://anotherExample.org/', 'https://example.org/');
console.log("2: myURL4: " + myURL4);
// https://anotherexample.org/

myURL4 = new URL('foo://anotherExample.org/', 'https://example.org/');
console.log("3: myURL4: " + myURL4);
// foo://anotherExample.org/

myURL4 = new URL('http:anotherExample.org/', 'https://example.org/');
console.log("4: myURL4: " + myURL4);
// http://anotherexample.org/

myURL4 = new URL('https:anotherExample.org/', 'https://example.org/');
console.log("5: myURL4: " + myURL4);
// https://example.org/anotherExample.org/

myURL4 = new URL('foo:anotherExample.org/', 'https://example.org/');
console.log("6: myURL4: " + myURL4);
// foo:anotherExample.org/

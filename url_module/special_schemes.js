const u1 = new URL('http://example.org');
u1.protocol = 'https';
console.log(u1.href);
// https://example.org


const u2 = new URL('http://example.org');
u2.protocol = 'fish';
console.log(u2.href);
// http://example.org


const u3 = new URL('fish://example.org');
u3.protocol = 'http';
console.log(u3.href);
// fish://example.org

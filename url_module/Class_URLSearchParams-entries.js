let params;

// Using an array
params = new URLSearchParams([
  ['user', 'abc'],
  ['query', 'first'],
  ['query', 'second'],
  ['first_name', 'abc'],
  ['last_name', 'xyz']
]);
console.log(params.toString());
// Prints 'user=abc&query=first&query=second&first_name=abc&last_name=xyz'

// Get entries from object
console.log(params.entries());
// Prints "URLSearchParams Iterator {
//  [ 'user', 'abc' ],
//  [ 'query', 'first' ],
//  [ 'query', 'second' ],
//  [ 'first_name', 'abc' ],
//  [ 'last_name', 'xyz' ] }"

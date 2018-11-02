let params;

// Using an array
params = new URLSearchParams([
  ['user', 'abc'],
  ['query', 'first'],
  ['query', 'second']
]);
console.log(params.toString());
// Prints 'user=abc&query=first&query=second'

// Appent to object
params.append("first_name","abc");
console.log(params.toString());
// Prints 'user=abc&query=first&query=second&first_name=abc

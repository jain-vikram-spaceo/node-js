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

// Delete from object
params.delete("first_name");
console.log(params.toString());
// Prints 'user=abc&query=first&query=second&last_name=xyz'

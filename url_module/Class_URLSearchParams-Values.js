const params = new URLSearchParams('foo=bar&xyz=baz');
for (const value of params.values()) {
  console.log(value);
}
// Prints:
//    bar
//    baz

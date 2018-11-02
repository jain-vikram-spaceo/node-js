const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  console.log('event');
  if (event === 'event') {
	  console.log('newListener=>event==event');
    // Insert a new listener in front
    myEmitter.on('event', () => {
	  console.log('newListener=>myEmitter=>on=>event');
      console.log('B');
    });
  }
});

console.log('myEmitter=>on=>event');
myEmitter.on('event', () => {
  console.log('A');
});


console.log('myEmitter=>event');
myEmitter.emit('event');

// Prints:
//   B
//   A
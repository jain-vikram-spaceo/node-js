var events = require('events');
var eventEmitter = new events.EventEmitter();
const util = require('util');

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
   console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');

//deplricated 
console.log(eventListeners + " Listner(s) listening to connection event");
//new events
//console.log(eventEmitter.listenerCount("connection") + " Listner(s) listening to connection event");
//listeners
//console.log(util.inspect(eventEmitter.listeners('connection')));

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

//deplricated 
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

//new events
//console.log(eventEmitter.listenerCount("connection") + " Listner(s) listening to connection event");
//listeners
//console.log(util.inspect(eventEmitter.listeners('connection')));

console.log("Program Ended.");
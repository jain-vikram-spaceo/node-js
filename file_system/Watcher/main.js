var fs = require("fs");

// Example when handled through fs.watch() listener
fs.watch('./test/', { encoding: 'buffer' }, (eventType, filename) => {
  if (filename) {
    console.log("======buffer===");
    console.log(filename);   
	console.log(filename.toString());  
	console.log(eventType); 
  }
});

fs.watch('./test/', { encoding: 'utf-8' }, (eventType, filename) => {
  if (filename) {
	console.log("======utf-8===");
    console.log(filename);   
	console.log(filename.toString());  
	console.log(eventType); 
  }
});

fs.watch('./test/', { encoding: 'utf-8' }, (eventType, filename) => {
  if (filename) {
	console.log("======utf-8===");
    console.log(filename);   
	console.log(filename.toString());  
	console.log(eventType); 
  }
});
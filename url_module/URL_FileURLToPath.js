const url = require('url');
let new_url="";

//new URL('file:///C:/path/').pathname;    // Incorrect: /C:/path/
new_url= url.fileURLToPath('file:///C:/path/');       // Correct:   C:\path\ (Windows)
console.log("1) new_url: " + new_url);

//new URL('file://nas/foo.txt').pathname;  // Incorrect: /foo.txt
new_url= url.fileURLToPath('file://nas/foo.txt');     // Correct:   \\nas\foo.txt (Windows)
console.log("2) new_url: " + new_url);

//new URL('file:///你好.txt').pathname;    // Incorrect: /%E4%BD%A0%E5%A5%BD.txt
//new_url= url.fileURLToPath('file:///你好.txt');       // Correct:   /你好.txt (POSIX)
//console.log("3) new_url: " + new_url);

//new URL('file:///hello world').pathname; // Incorrect: /hello%20world
//new_url= url.fileURLToPath('file:///hello world');    // Correct:   /hello world (POSIX)
//console.log("4) new_url: " + new_url);
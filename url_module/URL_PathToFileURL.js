const url = require('url');
let new_url="";

//new URL(__filename);                // Incorrect: throws (POSIX)
//new URL(__filename);                // Incorrect: C:\... (Windows)
new_url= url.pathToFileURL(__filename);          // Correct:   file:///... (POSIX)
console.log("1) new_url: " + new_url);

new_url = url.pathToFileURL(__filename);          // Correct:   file:///C:/... (Windows)
console.log("2) new_url: " + new_url);

//new URL('/foo#1', 'file:');         // Incorrect: file:///foo#1
new_url= url.pathToFileURL('/foo#1');            // Correct:   file:///foo%231 (POSIX)
console.log("3) new_url: " + new_url);

//new URL('/some/path%.js', 'file:'); // Incorrect: file:///some/path%
new_url= url.pathToFileURL('/some/path%.js');    // Correct:   file:///some/path%25 (POSIX)
console.log("4) new_url: " + new_url);
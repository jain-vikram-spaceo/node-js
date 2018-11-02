var fs = require("fs");

console.log("Going to read directory /temp/file_system/Dir");
fs.readdir("/temp/file_system/Dir/",function(err, files) {
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file) {
      console.log( file );
   });
});
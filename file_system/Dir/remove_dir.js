var fs = require("fs");

console.log("Going to delete directory /tmp/test");
fs.rmdir("/temp/file_system/Dir/test",function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Going to read directory /tmp");
   
   fs.readdir("/temp/file_system/CreateDir/",function(err, files) {
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file) {
         console.log( file );
      });
   });
});
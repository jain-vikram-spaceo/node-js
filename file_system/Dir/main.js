var fs = require("fs");

console.log("Going to create directory /temp/file_system/Dir/test");
fs.mkdir('/temp/file_system/Dir/test',function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});
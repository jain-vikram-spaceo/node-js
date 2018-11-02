const fs = require('fs');
const fsPromises = fs.promises;

console.log(fs.readFileSync('input.txt', 'utf8'));
// Prints: Node.js

async function doTruncate() {
  let filehandle = null;
  try {
    filehandle = await fsPromises.open('input.txt', 'r+');
    await filehandle.truncate(4);
  } finally {
    if (filehandle) {
      // close the file if it is opened.
      await filehandle.close();
    }
  }
  console.log(fs.readFileSync('input.txt', 'utf8'));  // Prints: Node
}

doTruncate().catch(console.error);

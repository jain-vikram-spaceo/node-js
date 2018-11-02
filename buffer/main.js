console.log("===============");
//var buf_unint = new Buffer(10);
var buf_unint = new Buffer.alloc(10);
console.log("buf_unint : ");console.log(buf_unint);

console.log()
console.log("===============");
//var buf_array = new Buffer([10, 20, 30, 40, 50]);
var buf_array = new Buffer.from([10, 20, 30, 40, 50]);
console.log("buf_array : ");console.log(buf_array);

console.log()
console.log("===============");
//var buf_str = new Buffer("Simply Easy Learning", "utf-8");
var buf_str = new Buffer.from("Simply Easy Learning", "utf-8");
console.log("buf_str : ");console.log(buf_str);

console.log()
console.log("===============");
//buf_str_write = new Buffer(256);
buf_str_write = new Buffer.alloc(256);
len_str_write = buf_str_write.write("Simply Easy Learning");
console.log("Octets written : "+  len_str_write);
console.log("buf_str_write : ");console.log(buf_str_write);console.log(buf_str_write);console.log(buf_str_write.toString());

console.log()
console.log("===============");
//buf_str_write_2 = new Buffer(256);
buf_str_write_2 = new Buffer.alloc(256);
len_str_write_2 = buf_str_write_2.write("Simply Easy Learning", 6);
console.log("Octets written : "+  len_str_write_2);
console.log("buf_str_write_2 : ");console.log(len_str_write_2);console.log(buf_str_write_2);console.log(buf_str_write_2.toString());

console.log()
console.log("===============");
//buf_str_write_3 = new Buffer(256);
buf_str_write_3 = new Buffer.alloc(256);
len_str_write_3 = buf_str_write_3.write("Simply Easy Learning", 6, 15);
console.log("Octets written : "+  len_str_write_2);
console.log("buf_str_write_2 : ");console.log(len_str_write_3);console.log(buf_str_write_3);console.log(buf_str_write_3.toString());

console.log()
console.log("===============");
//buf_str_write_4 = new Buffer(256);
buf_str_write_4 = new Buffer.alloc(256);
len_str_write_4 = buf_str_write_4.write("Simply Easy Learning", 6, 15, 'ascii');
console.log("Octets written : "+  len_str_write_2);
console.log("len_str_write_4 : ");console.log(len_str_write_4);console.log(buf_str_write_4);console.log(buf_str_write_4.toString());

console.log()
console.log("=====Reading from Buffers==========");
//buf = new Buffer(26);
buf = new Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}
console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

console.log()
console.log("=====Convert Buffer to JSON=========");
//buf = new Buffer('Simply Easy Learning');
buf = new Buffer.from('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);

console.log()
console.log("===== Concatenate Buffers==========");
//var buffer1 = new Buffer('TutorialsPoint ');
//var buffer2 = new Buffer('Simply Easy Learning');
var buffer1 = new Buffer.from('TutorialsPoint ');
var buffer2 = new Buffer.from('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());


console.log()
console.log("===== Compare Buffers==========");
//buffer1 = new Buffer('ABC');
//buffer2 = new Buffer('ABCD');
buffer1 = new Buffer.from('ABC');
buffer2 = new Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);
}

console.log()
console.log("=====  Copy Buffer=========");
 //buffer1 = new Buffer('ABC');
  buffer1 = new Buffer.from('ABC');

//copy a buffer
 //buffer2 = new Buffer(3);
  buffer2 = new Buffer.alloc(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

console.log()
console.log("=====  Slice  Buffer=========");
// buffer1 = new Buffer('TutorialsPoint');
  buffer1 = new Buffer.from('TutorialsPoint');
//slicing a buffer
 buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());

console.log()
console.log("=====   Buffer Length=========");
 //buffer = new Buffer('TutorialsPoint');
  buffer = new Buffer.from('TutorialsPoint');

//length of the buffer
console.log("buffer length: " + buffer.length);

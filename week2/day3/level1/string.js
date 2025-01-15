function getLength (str){
    console.log("Original String:", str);
    console.log("Length:", str.length)
}

getLength("Hello World");

function findIndexOf(str, target){
    console.log("Original String:", Str);
    console.log("Index:", str.indexOf(target));
}

findIndexOf("Hello World","World");

function findLastIndexOf(str, target){
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
}

findLastIndexOf("Hello World","World");

function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start,end));
}
getSlice("Hello World", 0, 5);

function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.substr(start,end));
}
getSubstring("Hello World", 0, 5);

const str = "hello world";
const str1 = str.toUpperCase();
const str2 = str.toLowerCase();
console.log(str.replace("world", "javascript"));

function splitString (str, separator){
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
}
splitString("Hello World"," ");

function trimString(str){
    console.log("Original String:", str);
    console.log("After trim:", str.trim( ));
}
trimString,String("Hello World");





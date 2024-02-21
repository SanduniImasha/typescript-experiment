"use strict";
//Data types
Object.defineProperty(exports, "__esModule", { value: true });
var title = "hi";
var f_name = "John";
var l_name = "Peter";
var x = 10;
console.log(x);
console.log(f_name, l_name);
console.log(title);
//Arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list1[0]);
console.log(list2[2]);
var pets = ["dog", "cat", "cow"];
console.table(pets);
//undefined
var t = undefined;
console.log("undefined is ".concat(t));
//null
var p = null;
console.log("null is ".concat(p));
//let a:string;
//a=null;
var topic;
//console.log(topic);
//Tuple
var tuple;
tuple = [12, 'Hello', 53];
console.log(tuple[0], tuple[1]);
console.log(tuple[0]);
console.log(tuple[2]);
console.log(tuple[1].substring(1));
//enum
var color;
(function (color) {
    color[color["blue"] = 0] = "blue";
    color[color["red"] = 1] = "red";
    color[color["black"] = 2] = "black";
})(color || (color = {}));
var c = color.red;
console.log(c);
console.log(color.blue);
console.log(color.black);
var s = color[2];
console.log(s);
//unknown
var notSure = 5;
console.log(notSure);
//any
var anyValue;
anyValue = 10;
anyValue = "ABC";
anyValue = true;
//function
function myMain() {
    console.log("This is my first function");
}
myMain();
var User = [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' }
];
User.push({ id: 4, name: 'four' }, { id: 5, name: 'five' });
//access for one element
var separateId1 = User[0].id;
console.log('\nDisplay array id eparated them by comma \n');
console.log(separateId1);
var firstName = User[0].name;
console.log(firstName);
function userDetails(Array) {
    console.log("*******Display Array*********");
    console.table(Array);
    console.log(Array);
    //use .map and .join
    var separateName1 = Array.map(function (p) { return p.name; });
    console.log('\n Display array names\n');
    console.log(separateName1);
    var separateName = Array.map(function (p) { return p.name; }).join(',');
    console.log('\n Display array names separated them by comma\n');
    console.log(separateName);
    var separateId = Array.map(function (p) { return p.id; }).join(',');
    console.log('\nDisplay array id eparated them by comma \n');
    console.log(separateId);
}
userDetails(User);
var members = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Peter' },
    { id: 3, name: 'Candy' },
    { id: 4, name: 'Berry' },
    { id: 5, name: 'Paul' }
];
function getMember(id) {
    return members.find(function (member) { return member.id === id; });
}
var member = getMember(2);
console.log(member);

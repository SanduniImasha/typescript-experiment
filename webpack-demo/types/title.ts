//Data types

let title: string = "hi";
let f_name:string ="John";
let l_name:string = "Peter";
let x:number = 10;
console.log(x);
console.log(f_name , l_name);
console.log(title);

//Arrays
let list1:number[]=[1,2,3];
let list2:Array<number>=[1,2,3];
console.log(list1[0]);
console.log(list2[2]);

let pets:Array<string>=["dog","cat","cow"];
console.table(pets);
  
//undefined
let t:undefined=undefined;
console.log(`undefined is ${t}`);

//null
let p:null=null;
console.log(`null is ${p}`);

//let a:string;
//a=null;
let topic:string|null;
//console.log(topic);

//Tuple
let tuple:[number,string,number];
tuple = [12,'Hello',53];
console.log(tuple[0], tuple[1]);
console.log(tuple[0]);
console.log(tuple[2]);
console.log(tuple[1].substring(1));

//enum
enum color {blue,red,black,}
let c:color = color.red;
console.log(c);
console.log(color.blue);
console.log(color.black);

let s:string=color[2];
console.log(s);

//unknown
let notSure:unknown=5;
console.log(notSure);

//any
let anyValue:any;
anyValue = 10;
anyValue = "ABC";
anyValue = true;

//function
function myMain():void{
    console.log(`This is my first function`);
}
myMain();
const User = [
    {id:1 , name:'One'},
    {id:2,name:'Two'},
    {id:3,name:'Three'}
];
User.push ({id:4,name:'four'},
           {id:5,name:'five'}
)

//access for one element
const separateId1=User[0].id;
    console.log('\nDisplay array id eparated them by comma \n');
    console.log(separateId1);

const firstName=User[0].name;
    console.log(firstName);

function userDetails(Array:{id:number, name:string}[]):void{
    console.log("*******Display Array*********")
    console.table(Array);   
    console.log(Array);

    //use .map and .join
    const separateName1=Array.map(p=>p.name);
    console.log('\n Display array names\n');
    console.log(separateName1);
    const separateName=Array.map(p=>p.name).join(',');
    console.log('\n Display array names separated them by comma\n');
    console.log(separateName);
    const separateId=Array.map(p=>p.id).join(',');
    console.log('\nDisplay array id eparated them by comma \n');
    console.log(separateId);
}
userDetails(User);

// Custom type Array

export type Member = {id:number,name:string};

const members:Member[] = [
    {id:1,name:'John'},
    {id:2,name:'Peter'},
    {id:3,name:'Candy'},
    {id:4,name:'Berry'},
    {id:5,name:'Paul'}
];

function getMember(id:number):Member|undefined{
    return members.find(member=>member.id===id);
}
const member = getMember(2);
console.log(member);

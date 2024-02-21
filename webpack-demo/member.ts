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

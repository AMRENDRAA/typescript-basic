// let num :number=100;
// let str: string="xzcjhjhxz";
// let abc :boolean=false;
// console.warn(num);
// console.warn(str);
// console.warn(abc);
// function add(a,b){
//     return a+b;
// }
// let a= add(1,'2');
// console.warn(a);
// type inference 
let c=11;
//object -> collection of key value pair  -->; is object type 
//, is seperate by ,
const d:object={
    name:'Abds',
    saas:11,
}
console.warn(d)


// array
let arr=["str","sks","sakcjba"];
console.warn(arr)

//enum -> group of constant which assign value 
enum role{
    pandit ,jatin ,rathi 
} 
console.warn(role)
//union
let data :number | string;
function combine(a:number|string,b :number|string )
{
    if( typeof a==='number' && b==='number')
    {
        return(a+b);
    }
    else
    {
        return a.toString()+b.toString();

    }
    

}
console.warn(combine(1,2));
// to create config file type tsc -init
// to compile multiple files  of ts tsc-w
// class implementation
class users{
    name :'';
    email:'';


addUser(user)
{
    return '$ (user) is added '
}
}
let user1 =new users;
console.log(user1.addUser('pandit'))
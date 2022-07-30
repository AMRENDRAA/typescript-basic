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
var c = 11;
//object -> collection of key value pair  -->; is object type 
//, is seperate by ,
var d = {
    name: 'Abds',
    saas: 11
};
console.warn(d);
// array
var arr = ["str", "sks", "sakcjba"];
console.warn(arr);
//enum -> group of constant which assign value 
var role;
(function (role) {
    role[role["pandit"] = 0] = "pandit";
    role[role["jatin"] = 1] = "jatin";
    role[role["rathi"] = 2] = "rathi";
})(role || (role = {}));
console.warn(role);
//union
var data;
function combine(a, b) {
    if (typeof a === 'number' && b === 'number') {
        return (a + b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.warn(combine(1, 2));
// to create config file type tsc -init
// to compile multiple files  of ts tsc-w
// class implementation
var users = /** @class */ (function () {
    function users() {
    }
    users.prototype.addUser = function (user) {
        return '$ (user) is added ';
    };
    return users;
}());
var user1 = new users;
console.log(user1.addUser('pandit'));

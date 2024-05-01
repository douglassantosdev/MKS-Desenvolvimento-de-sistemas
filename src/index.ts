//string, boolean, number, ...
let x:number = 10;

x = 25;

console.log(x);

// inferencia x annotation
let y = 12;
// y = 'teste'

let z:number = 12;

// tipos basicos
let firstName = 'Douglas';
let age:number = 27;
const isAdmin:boolean = true;

const myNumber:number[] = [1, 2, 3];

console.log(myNumber.filter);

//tuplas 

let myTuple: [number, string, string[]]

myTuple = [5, 'teste', ['a', 'b']]

// generics
function showArraysItens<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`Item ${item}`);
    });
}

// classes
class User {
    name
    role
    isApproved

    constructor(name: string, role:string, isApproved:boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}

const zeca = new User('Zeca', 'Admin', true);

console.log(zeca);

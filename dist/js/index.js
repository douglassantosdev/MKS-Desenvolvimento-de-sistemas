"use strict";
let x = 10;
x = 25;
console.log(x);
let y = 12;
let z = 12;
let firstName = 'Douglas';
let age = 27;
const isAdmin = true;
const myNumber = [1, 2, 3];
console.log(myNumber.filter);
let myTuple;
myTuple = [5, 'teste', ['a', 'b']];
function showArraysItens(arr) {
    arr.forEach((item) => {
        console.log(`Item ${item}`);
    });
}
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}
const zeca = new User('Zeca', 'Admin', true);
console.log(zeca);

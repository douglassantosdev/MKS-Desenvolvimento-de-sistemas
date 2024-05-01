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
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car('VW', 4);
fusca.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar('Audi', 4, 2.0);
console.log(a4);
a4.showBrand();

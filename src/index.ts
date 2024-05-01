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

//interface em classes
interface Ivehicle {
    brand: string;
    showBrand(): void
}

class Car implements Ivehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}

const fusca = new Car('VW', 4);

fusca.showBrand();


// herança

class SuperCar extends Car {
    engine;

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;

    }
}

const a4 = new SuperCar('Audi', 4, 2.0);

console.log(a4);

a4.showBrand();

// decorators





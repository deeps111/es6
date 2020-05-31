class Animal {
    constructor(name,color){
        this.name = name;
        this.color = color ;
    }

    speak() {
        console.log(`hii ${this.name} ur color is ${this.color}`);
    }
}

let lion = new Animal("Lion","Brown");

console.log(lion);
lion.speak();

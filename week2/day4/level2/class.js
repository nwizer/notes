class Animal {
    constructor (name){
        this.name = name;
    }
    static mytype(){
        console.log("Animal")
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

let dog = new Animal ("dog");

function cats(input) {
    
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        Meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let cats = [];
    for (const i of input) {
        let [name, age] = i.split(' ');
        cats.push(new Cat(name, age));
    }

    for (const cat of cats) {
        cat.Meow();
    }
}

cats(['Mellow 2', 'Tom 5'])
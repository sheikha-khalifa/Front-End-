class Animal {
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log(`${this.name} is an animal`);
    }
}

class Rabbit extends Animal {
    constructor(name, speed) {
        super(name);
        this.speed = speed;
    }

    Run() {
        console.log(`${this.name} runs with speed ${this.speed} m/h`);
    }
}

let data = new Animal("Rabbit");
data.print(); // Outputs: Rabbit is an animal

let data2 = new Rabbit("Fast Rabbit", 25);
data2.Run(); // Outputs: Fast Rabbit runs with speed 25 m/h
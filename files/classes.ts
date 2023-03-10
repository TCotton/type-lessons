class Fruit {
    name: string;
    color!: string;
    sweetness!: number;
    constructor(name: string, color?: string, sweetness?: number) {
        this.name = name;
        if (color) {
            this.color = color;
        }
        if (sweetness || sweetness === 0) {
            this.sweetness = sweetness;
        }
    }
    fullName() {
        const isSweet = this.sweetness > 50;
        return `${isSweet ? "Sweet " : ""}${this.color} ${this.name}`;
    }
}

typeof Fruit; // "function"
const appled = new Fruit("Apple", "red", 80); // Type Error: Value of type 'typeof Fruit' is not callable. Did you mean to include 'new'?
const banana = new Fruit("Banana", "yellow", 70); // This works

banana.fullName(); // "Sweet yellow Banana"

class NotFruit {
    name: string; // `public` modifier is implied
    public sweetness: number;
    constructor(name: string, sweetness: number) {
        this.name = name;
        this.sweetness = sweetness;
    }

    public sayName() {
        console.log(this.name);
    }
}
const a = new NotFruit("Apple", 80);
a.name = "Banana";

a.sayName(); // "Banana"
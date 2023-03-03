interface EdibleThing {
    name: string;
}

interface Fruit extends EdibleThing {
    color: string;
}

const apple: Fruit = { name: "Apple", color: "red" };

const foodBasket: EdibleThing[] = [];
foodBasket.push(apple);
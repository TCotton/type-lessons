interface CoordinateInterface {
    x: number;
    y: number;
}
type CoordinateTuple = [number, number];

type Coordinate = CoordinateInterface | CoordinateTuple;

function extractXY(point: Coordinate): CoordinateInterface {
    if (Array.isArray(point)) {
        return { x: point[0], y: point[1] };
    } else {
        return point;
    }
}

function measureDistance(
    point1: Coordinate,
    point2: Coordinate,
): number {
    const { x: x1, y: y1 } = extractXY(point1);
    const { x: x2, y: y2 } = extractXY(point2);
    // Distance Formula
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

interface Fruit {
    name: string;
    sweetness: number;
}

function getSweetness(fruit?: Fruit): number {
    const sweetness = fruit?.sweetness; // const sweetness: number | undefined
    if (sweetness) {
        return sweetness;
    }
    throw Error("'sweetness' is undefined");
}

interface Fruit {
    name: string;
    sweetness: number;
}
interface Vegetable {
    name: string;
    hasSeeds: boolean;
}
type EdibleThing = Fruit | Vegetable;

function sayName(food: EdibleThing) {
    console.log(food.name);
}
// @ts-nocheck
type LinkedList = {
    head: LinkedListNode;
    size: () => number;
    clear: () => void;
    getFirst: () => LinkedListNode;
    getLast: () => LinkedListNode;
};
type LinkedListNode = {
    value: string;
    next?: LinkedListNode;
};

type FruitList = string[];

const fruit: FruitList = ["Apple", "Orange"];
const duplicateList: string[] = fruit;
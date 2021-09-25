const DoublyLinkedList = require("../DoubleList");

let list = new DoublyLinkedList();

test("Initialized list should be empty", () => {
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.size).toBe(0);

    let str = list.toPrint();
    expect(str).toBe('');
});

test("Adding one element to empty list should make it the head", ()=> {
    list.add(1);

    expect(list.head.data).toBe(1);
    expect(list.toPrint()).toBe("1 -> ");
});

test("Nodes should be added to the end of the list", () => {
    list.add(2);
    expect(list.tail.data).toBe(2);
    list.add(3);
    expect(list.tail.data).toBe(3);
    list.add(4);
    expect(list.tail.data).toBe(4);
    list.add(5);
    expect(list.tail.data).toBe(5);

    expect(list.head.data).toBe(1);
    expect(list.toPrint()).toBe('1 -> 2 -> 3 -> 4 -> 5 -> ');
});
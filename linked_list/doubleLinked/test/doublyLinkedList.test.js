const DoublyLinkedList = require("../DoubleList");

let list = new DoublyLinkedList();

test("Initialized list should be empty", () => {
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.size).toBe(0);

    let str = list.toPrint();
    expect(str).toBe('');
});

test("Adding one element to empty list should make it the head", () => {
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

    expect(list.size).toBe(5);
});

test("Find method should return the correct (and first) index for a given data point", () => {
    // 0-offset -> eg. value three should be found at index 2
    expect(list.find(1)).toBe(0);
    expect(list.find(2)).toBe(1);
    expect(list.find(3)).toBe(2);
    expect(list.find(4)).toBe(3);
    expect(list.find(5)).toBe(4);
});

test("Adding a node with an invalid index should return -1", ()=>{
   expect(list.addByIndex(1, -1)).toBe(-1);
    expect(list.addByIndex(1, 6)).toBe(-1);
});

test("Adding a node with index 0 should make that node the new head",
    ()=>{
        list.addByIndex(19, 0);
        expect(list.head.data).toBe(19);
        expect(list.toPrint()).toBe('19 -> 1 -> 2 -> 3 -> 4 -> 5 -> ');

        expect(list.head.next.data).toBe(1);
        const next = list.head.next;
        expect(next.prev).toBe(list.head);
    });

test("Adding a node with an index equal to this size of the list should make that node the new tail",
    ()=>{
        list.addByIndex(20, 6);
        expect(list.tail.data).toBe(20);
        expect(list.tail.prev.data).toBe(5);
        expect(list.toPrint()).toBe('19 -> 1 -> 2 -> 3 -> 4 -> 5 -> 20 -> ');
    });

test("Adding a node by index should insert the node at that index", () => {
    list.addByIndex(21, 1);
    expect(list.size).toBe(8);
    expect(list.toPrint()).toBe('19 -> 21 -> 1 -> 2 -> 3 -> 4 -> 5 -> 20 -> ');
})
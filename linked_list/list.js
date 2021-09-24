import ListNode from "./ListNode";

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
}

// Fn to add a new node to end of the list
LinkedList.prototype.add = function (data) {
	// Create a new node with provided data
	const newNode = new ListNode(data);
	let currentNode = this.head;

	// If list is empty, the new element becomes the head
	if (!this.head) {
		this.head = newNode;
	} else {
		while (currentNode.next) {
			currentNode = currentNode.next;
		}
		currentNode.next = newNode;
	}
	this.size++;
};

// Fn to insert a new  node at a given location
LinkedList.prototype.insertAt = function (data, index) {
	// Check that provided index is valid, and log to console if not
	if (index < 0 || index > this.size) {
		console.log(`Index with value ${index} is out of bounds.`);
	} else {
		// Create a new node to insert
		const newNode = new ListNode(data);

		// if index = 0, make the new element the head
		if (index === 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			let currentNode = this.head;
			let prevNode = null;
			let counter = 0;
			// find index
			while (counter < index) {
				prevNode = currentNode;
				currentNode = currentNode.next;
				counter++;
			}
			// add the new node
			prevNode.next = newNode;
			newNode.next = currentNode;
		}
		// update size of list
		this.size++;
	}
};

// Fn to remove a node at a given index
LinkedList.prototype.removeByIndex = function (index) {
	// Check that provided index is valid, and log to console if not
	if (index < 0 || index >= this.size) {
		console.log(`Index with value ${index} is out of bounds.`);
	} else {
		// Find node in question and remove
		let currentNode = this.head;
		let prevNode = currentNode;
		let counter = 0;
		// search for the index
		while (counter < index) {
			prevNode = currentNode;
			currentNode = currentNode.next;
			counter++;
		}
		// delete node
		prevNode.next = currentNode.next;
	}
	// Update size
	this.size--;
};

// Fn to remove a node with a particular value
// Removes only the first instance
// return 1 on success, -1 if data isn't found;
LinkedList.prototype.removeByValue = function (data) {
	let curr = this.head;
	let prev = null;

	// iterate to correct location
	while(curr != null){
		if(curr.data === data){
			if(!prev) this.head = curr.next;
			else{
				prev.next = curr.next;
			}
			this.size--;
			return 1;
		}
		prev = curr;
		curr = curr.next;
	}
	return -1;
};

// Fn to remove all nodes with a particular value
// returns -1 if data is not found, 1 on success
LinkedList.prototype.removeAllByValue = function (data) {
	let curr = this.head;
	let prev = null;
	let success = false;

	// iterate to correct location
	while(curr != null){
		if(curr.data === data){
			if(!prev) this.head = curr.next;
			else{
				prev.next = curr.next;
			}
			success = true;
			this.size--;
		}
		prev = curr;
		curr = curr.next;
	}
	return success ? 1 : -1;
};

// Fn that checks if list is empty
LinkedList.prototype.isEmpty = function () {
	if (this.size === 0) return true;

	return false;
};

// Fn to print size of list to console
LinkedList.prototype.printSize = function () {
	console.log(this.size);
};

// Fn that prints the data from all nodes to console
LinkedList.prototype.printList = function () {
	let currentNode = this.head;
	let returnString = "";

	while (currentNode) {
		returnString += currentNode.data + " -> ";
		currentNode = currentNode.next;
	}

	console.log(returnString);
};

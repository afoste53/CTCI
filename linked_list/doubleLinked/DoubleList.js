DoublyLinkedNode = require('./DoubleNode.js');

class DoublyLinkedList {
	constructor(){
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
}

// add new node with given data to end of list
DoublyLinkedList.prototype.add = function(data){
	const node = new DoublyLinkedNode(data);

	if(!this.head) this.head = node;
	else{
		this.tail.next = node;
		node.prev = this.tail;
	}

	this.tail = node;
	this.size++;
}

// insert new node at given index
DoublyLinkedList.prototype.addByIndex = function(data, index){
	const node = new DoublyLinkedNode(data);

	if(index < 0 || index > this.size){
		return -1;
	}else if(index === 0){
		// handle insert at head
		const next = this.head;
		this.head = node;
		this.head.next = next;
		next.prev = node;
	}else if(index === this.size){
		// handle insert at tail
		const prev = this.tail;
		prev.next = node;

		node.prev = prev;
		this.tail = node;
	}else{
		let idx = 1;
		let curr = this.head;

		while(idx < index){
			curr = curr.next;
			idx ++;
		}

		let next = curr.next;
		curr.next = node;
		next.prev = node;

		node.prev = curr;
		node.next = next;
	}
	this.size++;
}

// find the index of the node that contains the given data
DoublyLinkedList.prototype.find = function(data){
	if(!this.head) return -1;
	else{
		if(data === this.head.data)return 0;
		else{
			let index = 1;
			let curr = this.head.next;

			while(curr.data !== data && curr){
				curr = curr.next;
				index++;
			}

			return index;
		}
	}
}



// Fn that prints the data from all nodes to console
DoublyLinkedList.prototype.toPrint = function(){
		let currentNode = this.head;
		let returnString = "";

		while (currentNode) {
			returnString += currentNode.data + " -> ";
			currentNode = currentNode.next;
		}

		return returnString;
}

module.exports = DoublyLinkedList;
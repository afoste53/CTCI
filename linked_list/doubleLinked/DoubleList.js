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
	console.log(node)

	if(!this.head) this.head = node;
	else{
		this.tail.next = node;
		node.prev = this.tail;
	}

	this.tail = node;
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
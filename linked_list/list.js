import Node from './node.js';

class LinkedList {
	constructor(){
		this.head = null;
		this.size = 0;
	}

        
	// add element to end of list
	add(data){
		let node = new Node(data);

		if(this.head === null){
			this.head = node;
		}else {
			let curr = this.head;
			while(curr.next){
				curr = curr.next; 
			}

			curr.next = node;
		}
		this.size++;
	}		

	// insert new node at specific index
	insertAt(data, index){
		// check to see if index is out of bounds
		if(index < 0 || index > this.size){
			console.log('Index out of bounds');
		}

		let node = new Node(data);
		let curr = null;
		let prev = null;

		curr = this.head;

		if(index === 0) {
			node.next = head;
			this.head.prev = node;
			this.head = node;
		}else {
			curr = this.head;

			// go find the correct location
			for(let i = 0; i < index; i++){
				prev = curr;
				curr = curr.next;
			}

			// do the actual inserting;
			node.next = curr;
			node.prev = prev;

			prev.next = node;
			curr.prev = node;
		}
		this.size++;

	}
        
	
	// remove element from a given index
	removeAt(index){
	
	}
	
	// remove the node with the given value
	removeData(data){

	}
	
}

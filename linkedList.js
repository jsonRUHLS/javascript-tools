// example of linked list in javascript
const list = {
	head: {
		value: 6,
		next: {
			value: 10,
			next: {
				value: 12,
				next: {
					value: 3,
					next: null,
				},
			},
		},
	},
};
console.log(list.head.next.next.value); // 12

//Path: linkedList.js
//example of linked list in javascript
export class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

export class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);

console.log(myLinkedList);

// return the number of nodes present in the linked list
export function size() {
	let count = 0;
	let node = this.head;
	while (node) {
		count++;
		node = node.next;
	}
	return count;
}

// empty the linked list
export function clear() {
	this.head = null;
	this.tail = null;
	this.length = 0;
}

// return the last node of the linked list
export function getLast() {
	let lastNode = this.head;
	if (lastNode) {
		while (lastNode.next) {
			lastNode = lastNode.next;
		}
	}
	return lastNode;
}

// return the first node of the linked list
export function getFirst() {
    return this.head;
}

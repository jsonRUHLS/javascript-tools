import { size } from './linked-list__size.function.js';
import { clear } from './linked-list__clear.function.js';
import { getFirst } from './linked-list__get-first.function.js';
import { getLast } from './linked-list__get-last.function.js';

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

// return the number of nodes present in the linked list
console.log(size(myLinkedList));

// return the first node of the linked list
console.log(getFirst(myLinkedList));

// return the last node of the linked list
console.log(getLast(myLinkedList));

// empty the linked list
console.log(clear(myLinkedList));

console.log(myLinkedList);

import {size} from './linked-list__size.function.mjs';
import {clearLinkedList} from './linked-list__clear.function.mjs';
import {getFirst} from './linked-list__get-first.function.mjs';
import {getLast} from './linked-list__get-last.function.mjs';

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
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
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
console.log('size: ', size(myLinkedList));

// return the first node of the linked list
console.log('getFirst: ', getFirst(myLinkedList));

// return the last node of the linked list
console.log('getLast: ', getLast(myLinkedList));
console.log(myLinkedList);

// empty the linked list
console.log('clear: ', clearLinkedList(myLinkedList));
console.log(myLinkedList);

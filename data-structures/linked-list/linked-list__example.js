import {size} from './linked-list__size.function.js';
import {clearLinkedList} from './linked-list__clear.function.js';
import {getFirst} from './linked-list__get-first.function.js';
import {getLast} from './linked-list__get-last.function.js';
import {LinkedList} from './linked-list.class.js';

// example of linked list in javascript
// const list = {
// 	head: {
// 		value: 6,
// 		next: {
// 			value: 10,
// 			next: {
// 				value: 12,
// 				next: {
// 					value: 3,
// 					next: null,
// 				},
// 			},
// 		},
// 	},
// };
// console.log(list.head.next.next.value); // 12

export const myLinkedList = new LinkedList(10);

// insert new nodes at the end of the linked list
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

// insert a node at the front of the linked list
myLinkedList.prepend(49);
console.log('after inserting new node to front: ', myLinkedList);

// empty the linked list
console.log('clear: ', clearLinkedList(myLinkedList));
console.log(myLinkedList);

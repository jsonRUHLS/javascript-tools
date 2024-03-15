// return the number of nodes present in the linked list
export const size = (linkedList) => {
	let count = 0;
	let node = linkedList.head;
	while (node) {
		count++;
		node = node.next;
	}
	return count;
};

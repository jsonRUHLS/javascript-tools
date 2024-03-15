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

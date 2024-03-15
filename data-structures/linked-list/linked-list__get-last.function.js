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

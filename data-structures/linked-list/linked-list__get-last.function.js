// return the last node of the linked list
export const getLast = (linkedList) => {
	let lastNode = linkedList.head;
	if (lastNode) {
		while (lastNode.next) {
			lastNode = lastNode.next;
		}
	}
	return lastNode;
};

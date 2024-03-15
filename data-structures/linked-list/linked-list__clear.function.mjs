// empty the linked list
export const clearLinkedList = (linkedList) => {
	linkedList.head = null;
	linkedList.tail = null;
	linkedList.length = 0;
	return 'Linked list is cleared.';
};

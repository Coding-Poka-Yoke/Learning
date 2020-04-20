package com.learning.dataStructure;

public class SingeLinkedList {

	public static SingleLinkedListNode createNewNode(int data) {
		return new SingleLinkedListNode(data);
	}
	
	public static SingleLinkedListNode insertAtEnd(SingleLinkedListNode head, int data) {
		SingleLinkedListNode lastNode = head;
		while(lastNode.next != null) {
			lastNode = lastNode.next;
		}
		lastNode.next = createNewNode(data);
		return head;
	}
	
	public static SingleLinkedListNode insertAtFront(SingleLinkedListNode head, int data) {
		SingleLinkedListNode newNode = createNewNode(data);
		newNode.next = head;
		return newNode;
	}
	
	public static void insertAfterGivenData(SingleLinkedListNode head, int data, int givenData) {
		SingleLinkedListNode currentNode = getCurrentNode(head, givenData);
		addNewNode(currentNode, data);
	}
	
	public static SingleLinkedListNode insertBeforeGivenData(SingleLinkedListNode head, int data, int givenData) {
		if(head.data == data) {
			return insertAtFront(head, data);
		}
		SingleLinkedListNode previousNode = getPreviousNode(head, givenData);
		addNewNode(previousNode, data);
		return head;
	}
	
	public static SingleLinkedListNode insertAtPosition(SingleLinkedListNode head, int data, int position) {
		if(position == 1) {
			return insertAtFront(head, data);
		}
		SingleLinkedListNode previousNode = getPreviousNodeUsingPosition(head, position);
		addNewNode(previousNode, data);
		return head;
	}
	
	public static void addNewNode(SingleLinkedListNode node, int data) {
		SingleLinkedListNode newNode = createNewNode(data);
		newNode.next = node.next;
		node.next = newNode;
	}
	
	public static SingleLinkedListNode getCurrentNode(SingleLinkedListNode head, int data) {
		SingleLinkedListNode currentNode = head;
		while(currentNode.data != data) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}
	
	public static SingleLinkedListNode getPreviousNode(SingleLinkedListNode head, int data) {
		SingleLinkedListNode currentNode = head;
		SingleLinkedListNode previousNode = null;
		while(currentNode.data != data) {
			previousNode = currentNode;
			currentNode = currentNode.next;
		}
		return previousNode;
	}
	
	public static SingleLinkedListNode getPreviousNodeUsingPosition(SingleLinkedListNode head, int position) {
		SingleLinkedListNode previousNode = head;
		for(int i = 0; (i < position - 2) && (previousNode != null); i++) {
			previousNode = previousNode.next;
		}
		return previousNode;
	}
	
	public static SingleLinkedListNode deleteEndNode(SingleLinkedListNode head) {
		if(head.next == null) {
			return null;
		}
		SingleLinkedListNode lastNode = head;
		SingleLinkedListNode lastPreviousNode = null;
		while(lastNode.next != null) {
			lastPreviousNode = lastNode;
			lastNode = lastNode.next;
		}
		lastPreviousNode.next = null;
		return head;
	}
	
	public static SingleLinkedListNode deleteByGivenData(SingleLinkedListNode head, int data) {
		if(head.data == data) {
			return head.next;
		}
		SingleLinkedListNode currentNode = getCurrentNode(head, data);
		SingleLinkedListNode previousNode = getPreviousNode(head, data);
		previousNode.next = currentNode.next;
		return head;
	}
	
	public static SingleLinkedListNode deleteByPosition(SingleLinkedListNode head, int position) {
		if(position == 1) {
			return head.next;
		}
		SingleLinkedListNode currentNode = head;
		SingleLinkedListNode previousNode = null;
		for(int i = 0; (i < position - 1) && (currentNode != null); i++) {
			previousNode = currentNode;
			currentNode = currentNode.next;
		}
		previousNode.next = currentNode.next;
		return head;
	}
	
	public static void printLinkedList(SingleLinkedListNode head) {
		SingleLinkedListNode start = head;
		while(start != null) {
			System.out.print(start.data + " ");
			start = start.next;
		}
	}
	
	public static void printLinkedListReverse(SingleLinkedListNode head) {
		if(head == null) {
			return;
		}
		printLinkedListReverse(head.next);
		System.out.print(head.data + " ");
	}
	
	public static void main(String[] args) {
		
		SingleLinkedListNode head = null; 
		
		int[] arr = new int[] {1, 2, 3};
		
		for(int i = 0; i < arr.length; i++) {
			if(head == null) {
				head = createNewNode(arr[i]);
			} else {
				insertAtEnd(head, arr[i]);
			}
		}
		
		head = insertAtFront(head, 4);
		
		insertAfterGivenData(head, 5, 2);
		
		head = insertBeforeGivenData(head, 6, 2);
		
		head = insertAtPosition(head, 7, 3);
		
		printLinkedList(head);
		
		System.out.println();
		
		printLinkedListReverse(head);
		
		System.out.println();
		
		printLinkedList(head);
		
		head = deleteEndNode(head);
		
		System.out.println();
		
		printLinkedList(head);
		
		head = deleteByGivenData(head, 7);
		
		System.out.println();
		
		printLinkedList(head);
		
		head = deleteByPosition(head, 3);
		
		System.out.println();
		
		printLinkedList(head);
		
	}
	
}

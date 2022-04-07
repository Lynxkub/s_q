class Node{
    constructor(val) {
        this.val= val;
        this.next = null
        this.previous = null
    }
}


class Queue {

    constructor() {
        this.head = null
        this.tail = null
    }

    enqueue(item) {
        let newNode = new Node(item);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return newNode;
    }

    dequeue() {
        if(!this.head) {
            throw new Error('Cannot dequeue from an empty queue')
        }
        if(!this.head.next) {
            this.head = null;
            this.tail = null;
            return 'Queue is empty'
        }
        this.head = this.head.next;
    }

    peek() {
        if(!this.head) {
            throw new Error('Queue is empty')
        }
        return this.head
    }

    isEmpty() {
        if(!this.head){
            return true;
        }
        return false
    }
}


class Stack {

    constructor() {
        this.head = null;
        this.tail = null;
        
    }

    push(item){
        let newNode = new Node(item);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return newNode
        }
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    pop() {
        if(!this.head){
            throw new Error('This stack is empty')
        }
        if(!this.tail.previous){
            this.head=null;
            this.tail=null;
            return "Stack is empty"
        }
        let end = this.tail.previous
        end.next = null
        this.tail = end
    }

    peek() {
        if(!this.head) {
            throw new Error('This stack is empty')
        }
        return this.head
    }

    isEmpty() {
        if(!this.head) {
            return true
        }
        return false
    }
}
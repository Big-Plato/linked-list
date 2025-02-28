class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append = (value) => {
        const node = new Node(value);
        const tail = this.tail();
        if (this.head === null) { 
            this.head = node;
        } else if (tail.next === null) { 
            tail.next = node;
        }
        return node;
    }

    prepend = (value) => {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    size = () => {
        let count = 0;
        let temp = this.head;

        while (temp !== null) {
            temp = temp.next;
            count++;
        }
        return count;
    }

    head = () => {
        return this.head;
    }

    tail = () => {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    at = (index) => {
        let temp = this.head;
        let count = 0;

        while (count < index) {  
            temp = temp.next;
            if (temp === null) {
                throw new Error("Index: Out of Bounds");
            }
            count++;
        }
        return temp;
    }

    pop = () => {
        const tail = this.tail();

        if (!this.head) {
            throw new Error("Can't delete");
        }

        if (this.head.next === null) {
            this.head = this.head.next;
            return;
        }

        let cur = this.head; 
        let prev = null; 

        while (cur !== null) {
            prev = cur;
            cur = cur.next;

            if (cur === tail) {
                prev.next = cur.next;
            }
        }
        
    }

    contains = (value) => {                
        let cur = this.head;
        
        while (cur !== null) {
            if (cur.value === value) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    } 

    find = (value) => { 
        let count = 0;
        let cur = this.head;
        const size = this.size();

        while (count <= size) {
            if (cur.value === value) {
                return count;
            }
            count++;
            cur = cur.next;
        }
        return null;      
    }

    toString = () => { 
        let cur = this.head;
        let result = "";
        while (cur) {
            result += `( ${cur.value} ) -> `;
            cur = cur.next;
        }
        result += 'null';
        return result;
    }

    insertAt = (value, index) => {
        let cur = this.head;
        let prev = null;
        const node = new Node(value);
        let count = 0;
        const size = this.size();

        if (index < 0 || index > size + 1) {
            throw new Error("Index: Out of Bounds");
        }

        if (index === 0) {
            this.prepend(value);
        }

        while (count < index) {
            prev = cur;
            cur = cur.next;
            count++;
        }
       
        prev.next = node;
        node.next = cur;

    }

    removeAt = (index) => {
        let cur = this.head;
        let prev = null;
        let count = 0; 

        while (count < index) {
            prev = cur;
            cur = cur.next;
            count++;
        }

        if (count === index) {
            prev.next = cur.next;
            console.log(count)
            return;
        }        
    }
}

class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
} 
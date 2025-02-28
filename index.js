class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  /**
   * Adds a new node to the end of the list.
   * @param {*} value - The value to be added.
   * @returns {Node} - The created node.
   */
  append = (value) => {
    const node = new Node(value);
    const tail = this.tail();
    if (this.head === null) {
      this.head = node;
    } else {
      const tail = this.tail();
      tail.next = node;
    }
    return node;
  };

  /**
   * Adds a new node to the beginning of the list.
   * @param {*} value - The value to be added.
   */
  prepend = (value) => {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  };

  /**
   * Returns the size of the list.
   * @returns {number} - The number of nodes in the list.
   */
  size = () => {
    let count = 0;
    let temp = this.head;

    while (temp !== null) {
      temp = temp.next;
      count++;
    }
    return count;
  };

  /**
   * Returns the head node of the list.
   * @returns {Node} - The head node.
   */
  getHead = () => {
    return this.head;
  };

  /**
   * Returns the last node of the list.
   * @returns {Node} - The last node.
   */
  tail = () => {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  };

  /**
   * Returns the node at the specified index.
   * @param {number} index - The index of the node.
   * @returns {Node} - The node at the index.
   * @throws {Error} - If the index is invalid.
   */
  at = (index) => {
    if (index <= 0) {
      throw new Error("Index: Negative");
    }
    let temp = this.head;
    let count = 0;

    while (count < index) {
      if (temp === null) {
        throw new Error("Index: Out of Bounds");
      }
      temp = temp.next;
      count++;
    }

    if (temp === null) {
      throw new Error("Index: Out of Bounds");
    }
    return temp;
  };

  /**
   * Removes the last node from the list.
   * @throws {Error} - If the list is empty.
   */
  pop = () => {
    if (!this.head) {
      throw new Error("Can't delete");
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let cur = this.head;
    let prev = null;

    while (cur.next !== null) {
      prev = cur;
      cur = cur.next;
    }

    prev.next = null;
  };

  /**
   * Checks if the list contains a value.
   * @param {*} value - The value to check.
   * @returns {boolean} - True if the value exists, False otherwise.
   */
  contains = (value) => {
    let cur = this.head;

    while (cur !== null) {
      if (cur.value === value) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  };

  /**
   * Returns the index of the node with the specified value.
   * @param {*} value - The value to find.
   * @returns {number|null} - The index of the node or null if not found.
   */
  find = (value) => {
    let count = 0;
    let cur = this.head;

    while (cur !== null) {
      if (cur.value === value) {
        return `Index of ${value} is ${count}`;
      }
      count++;
      cur = cur.next;
    }
    return null;
  };

  /**
   * Returns a string representation of the list.
   * @returns {string} - The string representation of the list.
   */
  toString = () => {
    let cur = this.head;
    let result = "";
    while (cur) {
      result += `( ${cur.value} ) -> `;
      cur = cur.next;
    }
    return `${result} + null`;
  };

  /**
   * Inserts a new node at the specified position.
   * @param {*} value - The value to be inserted.
   * @param {number} index - The position where the value will be inserted.
   * @throws {Error} - If the index is invalid.
   */
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
      return;
    }

    while (count < index) {
      prev = cur;
      cur = cur.next;
      count++;
    }

    prev.next = node;
    node.next = cur;
  };

  /**
   * Removes a node at the specified position.
   * @param {number} index - The position where the value will be inserted.
   * @throws {Error} - If the index is invalid.
   */
  removeAt = (index) => {
    const size = this.size();

    if (index < 0 || index >= size) {
      throw new Error("Index: Out of Bounds");
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

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
      console.log(count);
      return;
    }
  };
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

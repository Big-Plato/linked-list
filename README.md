# Linked List Implementation in JavaScript

This repository contains a simple implementation of a singly linked list in JavaScript. The linked list is a fundamental data structure that consists of nodes, where each node contains data and a reference (or link) to the next node in the sequence.

## Features

- **Append**: Add a new node to the end of the list.
- **Prepend**: Add a new node to the beginning of the list.
- **Size**: Get the number of nodes in the list.
- **Head**: Get the first node of the list.
- **Tail**: Get the last node of the list.
- **At**: Get the node at a specific index.
- **Pop**: Remove the last node from the list.
- **Contains**: Check if the list contains a specific value.
- **Find**: Find the index of a node with a specific value.
- **ToString**: Get a string representation of the list.
- **InsertAt**: Insert a new node at a specific index.
- **RemoveAt**: Remove a node at a specific index.

## Usage

To use the linked list, simply clone the repository and import the `LinkedList` class into your project.

```javascript
// Import the LinkedList class
const LinkedList = require('./path/to/LinkedList');

// Create a new linked list
const list = new LinkedList();

// Append nodes to the list
list.append(10);
list.append(20);
list.append(30);

// Prepend a node to the list
list.prepend(5);

// Get the size of the list
console.log(list.size()); // Output: 4

// Get the head node
console.log(list.getHead()); // Output: Node { value: 5, next: Node { value: 10, next: ... } }

// Get the tail node
console.log(list.tail()); // Output: Node { value: 30, next: null }

// Get the node at a specific index
console.log(list.at(2)); // Output: Node { value: 20, next: Node { value: 30, next: null } }

// Remove the last node
list.pop();

// Check if the list contains a value
console.log(list.contains(20)); // Output: true

// Find the index of a value
console.log(list.find(20)); // Output: Index of 20 is 1

// Get a string representation of the list
console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 20 ) -> null

// Insert a node at a specific index
list.insertAt(15, 2);

// Remove a node at a specific index
list.removeAt(1);
```

## Installation
Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

Navigate to the project directory:
```bash
cd linked-list
```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvements.

## License
This project is licensed under the MIT License.


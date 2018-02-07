function Node(data) {
    this.data = data;
    this.next = null;
}

Node.prototype.appendToTail = function (data) {
    const newNode = new Node(data);
    let currentNode = this;
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;
};

Node.prototype.lastNode = function () {
    let currentNode = this;
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    return currentNode;
};

Node.prototype.deleteNextNode = function () {
    this.next = this.next.next;
};

Node.prototype.printList = function () {
    let currentNode = this;
    while (currentNode.next) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
    console.log(currentNode.data);
};

function generateTestList(length) {
    let headOfList = new Node(0);
    for (let i = 1; i < length; i++) {
        headOfList.appendToTail(i);
    }
    return headOfList;
}

// let testList = new Node(0); testList.appendToTail(1);
// testList.appendToTail(2); console.log(testList.lastNode())
// testList.printList();

let genList = generateTestList(10);
genList.printList();
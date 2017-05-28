var LinkedList = function() {

  var list = {};
  list.head = null;
  list.tail = null;

  //Time Complexity:
  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  //Time Complexity:
  list.removeHead = function() {
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
  };

  //Time Complexity:
  list.contains = function(target) {
    var results = false;
    var currentNode = list.head;
    while(currentNode){
      if(currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return results;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

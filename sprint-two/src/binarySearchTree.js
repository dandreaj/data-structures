var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;

  _.extend(newBinaryTree, binaryTreeMethods);
  return newBinaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  if(this === undefined) {
    new BinarySearchTree(value);
  } else {
      if(value < this.value) {
      this.left = value;
    } else {
      this.right = value;
  }
  }


};

binaryTreeMethods.contains = function() {

};

binaryTreeMethods.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */


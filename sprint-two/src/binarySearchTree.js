var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;

  _.extend(newBinaryTree, binaryTreeMethods);
  return newBinaryTree;
};

var binaryTreeMethods = {};
//Time Complexity: O(log (n))
binaryTreeMethods.insert = function(value) {
  var node = BinarySearchTree(value);

  var findNodeLocation = function(tree){
    if (value < tree.value) {
      if (tree.left === null) {
        tree.left = node;
      } else {
        findNodeLocation(tree.left);
      }
    }
    if (value > tree.value) {
      if (tree.right === null) {
        tree.right = node;
      } else {
        findNodeLocation(tree.right);
      }
    }
  };

  findNodeLocation(this);

};

//Time Complexity: O(log (n))
binaryTreeMethods.contains = function(target) {

  var results = false;

  var matchesTarget = function(tree, target) {
    if(target === tree.value) {
      results = true;
    } else if(target < tree.value && tree.left !== null) {
      matchesTarget(tree.left, target);
    } else if(target > tree.value && tree.right !== null){
      matchesTarget(tree.right, target);
    }
  };

  matchesTarget(this, target);
  return results;
};

//Time Complexity: O(n)
binaryTreeMethods.depthFirstLog = function(callback) {

  var runFunction = function(tree, callback) {
    callback(tree.value);
    if(tree.left !== null) {
      runFunction(tree.left, callback);
    }
    if(tree.right !== null) {
      runFunction(tree.right, callback);
    }
  };

  runFunction(this,callback);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


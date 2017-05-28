var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // Tree has a value and parent property, define parent somewhere!
  // your code here
  newTree.children = []; //Array of objects (other trees)
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  parent.children.push(child); //Who is this child's parent?!
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

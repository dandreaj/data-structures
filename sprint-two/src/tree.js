

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
 var child = new Tree(value); //Do we need new?
 this.children.push(child);
};

treeMethods.removeChild = function(index) {
  this.children.splice(index,1);
};
treeMethods.contains = function(target) {
    if (this.value === target){
        return true;
     }
     if(this.children.length === 0){
        return false;
    }

    return _.some(this.children, function(child){
        return child.contains(target);
    });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
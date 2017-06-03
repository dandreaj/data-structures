
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var results = false;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      results = true;
    }
  }
  return results;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodes = this.nodes;
  var index = nodes.indexOf(node);
  nodes.splice(index, 1);
  for(var i=0; i<this.edges.length; i++) {
    if(this.edges[i][0] === node || this.edges[i][1] === node) {
      this.edges.splice(i,1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var target = JSON.stringify([fromNode, toNode]);
  for (var i = 0; i < this.edges.length; i++) {
    var currentEdge = JSON.stringify(this.edges[i]);
    var flippedEdge = JSON.stringify([this.edges[i][1], this.edges[i][0]]);
    if (currentEdge === target || flippedEdge === target) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for(var i=0;i<this.edges.length;i++) {
    var currentEdge = JSON.stringify(this.edges[i]);
    var target = JSON.stringify([fromNode, toNode]);
    if(currentEdge === target){
      this.edges.splice(i,1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



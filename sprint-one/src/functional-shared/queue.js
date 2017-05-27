var Queue = function() {
  var someInstance = {
    storage : {},
    count : 0,
    first: 0,
    last: 0
  };
  _.extend(someInstance,queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.count;
};

queueMethods.enqueue = function(value) {
  this.storage[this.last] = value;
  this.count++;
  this.last++;
};

queueMethods.dequeue = function() {
  if(this.count > 0) {
    var poppedItem = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    this.count--;
    return poppedItem;
  }
};



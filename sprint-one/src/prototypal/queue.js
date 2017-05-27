var Queue = function() {
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.first = 0;
  someInstance.last = 0;

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



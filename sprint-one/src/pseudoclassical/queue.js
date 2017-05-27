var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.first = 0;
  this.last = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function() {
  return this.count;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if(this.count > 0) {
    var poppedItem = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    this.count--;
    return poppedItem;
  }
};



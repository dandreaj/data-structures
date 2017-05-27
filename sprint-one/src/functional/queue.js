var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
    size++;
  };

  //{0:a} size =1 , first =0
  //{1:b} size =1 first=1


  someInstance.dequeue = function() {
    if(size > 0) {
      var popped_item = storage[first];
      delete storage[first];
      first++;
      size--;
      return popped_item;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

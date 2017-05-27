var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value; //storage.push(value) {0:value,1:value,2:value}
    size++;
  };

  someInstance.pop = function() {
    if (size > 0) {
      size--;
      var poppedItem = storage[size];
      delete storage[size];
      return poppedItem;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};



var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

/*var storage =[

  [["yassi", 6],["justin", 8]],          index 0
  [["jessica", 7]],                      index 1
  [["magee" , 9]]                        index 2

];

*/
//Time Complexity: O(1)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //check to see if  this._storage.get(index) returns true/undefined
  if (bucket === undefined) {
    this._storage.set(index, [[k,v]]);
  } else {
    for(var i = 0;i<bucket.length;i++) {
      if(bucket[i][0] === k){
        bucket[i][1] = v;
      } else {
        this._storage.get(index).push([k,v]);
      }
    }
  }
};

//Time Complexity: O(1)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i=0; i<bucket.length; i++){
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }

};

//Time Complexity: O(1)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i=0; i<bucket.length; i++){
    if (bucket[i][0] === k) {
      bucket.splice(i,1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



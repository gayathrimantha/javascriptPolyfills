//Map polyfill in javascript

//Creating a prototype with custom name
Array.prototype.myMap = function(callback) {
  //creating an empty array to return it as map returns a newArray
  let returnArray = [];
  //Applying the callback logic to each item
  for(let i=0; i<this.length;i++){
    if(callback){
      returnArray.push(callback(this[i]))
    }
  }
  //returning the array
  return returnArray;
}

//Map polyfill in javascript

//Creating a prototype with custom name
Array.prototype.myMap = function(callback) {
  let returnArray = [];
  for(let i=0; i<this.length;i++){
    if(callback){
      returnArray.push(callback(this[i]))
    }
  }
  return returnArray;
}

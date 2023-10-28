//Filter Polyfill in Javascript

Array.prototype.myFilter = function(callback){
  let returnArray = [];

  for(let i=0; i<this.length; i++){
    if(callback(this[i])){
      returnArray.push(this[i])
    }
  }
  return returnArray;
}

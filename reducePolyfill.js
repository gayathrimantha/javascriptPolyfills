Array.prototype.myReduce = function (callback, initialValue) { 
		let accumulator = initialValue; 

		for (let i = 0; i < this.length; i++) { 
			if (accumulator) { 
				accumulator = callback.call(undefined, 
					accumulator, this[i], i, this); 
			} 
			else { 
				accumulator = this[i]; 
			} 
    }
		return accumulator; 
	} 


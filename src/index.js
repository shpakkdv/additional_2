module.exports = function flatten(array) {
	var newArray = [], temp;

	if ( !(array instanceof Array) ) {
		return [];
	}


	if (array.every( function(item) { return !(item instanceof Array) } )) {
		return array;
	}

	for (let i = 0; i < array.length; i++) {
		if (array[i] instanceof Array) {
			temp = flatten(array[i]);
			if (temp !== []) {
				newArray = newArray.concat(temp);
			}
		} else {
			newArray.push(array[i]);	
		}
	}
	return newArray;
}
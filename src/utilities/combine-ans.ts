const combineAnS = ( array: string[], string: string ) => {
	let result: string = '';

	if ( typeof array === 'object' ) {
		for ( let i = 0; i < array.length; i++ ) {
			if ( i < array.length - 1 ) {
				result += array[i] + string;
			} else {
				result += array[i]
			}
		}
	}

	return result;
};

export default combineAnS;
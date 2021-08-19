const setPrefix = ( array: string[], string: string, separator: string ) => {
	const result: string[] = [];

	for ( let i = 0; i < array.length; i++ ) {
		result.push( `${array[i]} ${string}` );
	}

	return result.join( separator );
};

export default setPrefix;
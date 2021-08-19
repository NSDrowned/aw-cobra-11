const setSuffix = ( array: string[], string: string, separator: string ) => {
	const result: string[] = [];

	for ( let i = 0; i < array.length; i++ ) {
		result.push( `${string} ${array[i]}` );
	}

	return result.join( separator );
};

export default setSuffix;
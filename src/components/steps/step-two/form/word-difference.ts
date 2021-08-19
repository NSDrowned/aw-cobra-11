import levenshtein from 'js-levenshtein';

export const names = ['adelphia', 'aol', 'att', 'bellsouth', 'carolina.rr', 'centurylink', 'charter', 'cinci.rr', 'columbus.rr', 'comcast', 'cox', 'earthlink', 'embarqmail', 'facebook', 'gmail', 'hotmail', 'icloud', 'juno', 'live', 'mail', 'mass.rr', 'optonline', 'outlook', 'roadrunner', 'rocketmail', 'sbcglobal', 'tampabay.rr', 'verizon', 'yahoo', 'ymail', 'msn'];
export const domains = ['com', 'net', 'info', 'me'];

export const wordDifference = ( word: string, distance: number, wordList: string[] ) => {
	let lowDistance: number = 999;
	let newWord: string = '';

	for ( let i = 0; i < wordList.length; i++ ) {
		const wDistance = levenshtein( wordList[i], word );
		if ( wDistance === 0 ) {
			newWord = ''
			break;
		} else {
			if ( lowDistance > wDistance && wDistance < distance ) {
				lowDistance = wDistance;
				newWord = wordList[i];
			}
		}
	}

	return newWord;
};
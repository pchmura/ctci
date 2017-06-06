//Given a string, write a function to check if it is a permutation of a palindrome 


function isPermutationOfPalindrome(str){
	const hashTable = {};
	for(let i = 0; i < str.length; i++){
		let currentChar = str.charCodeAt(i);
		console.log(currentChar);
		if(hashTable[currentChar]) hashTable[currentChar] += 1;
		else{
			hashTable[currentChar] = 1;
		}
	}

	let hasOneOdd = false;
	for(let key in hashTable){
		if(hashTable[key] % 2  === 1){
			if(hasOneOdd){
				return false;
			}
			else{
				hasOneOdd = true;
			}
		}
	}

	return true;
}


console.log(isPermutationOfPalindrome("Tact Coa"));
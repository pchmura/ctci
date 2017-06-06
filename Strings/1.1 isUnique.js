// Impelement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structres

//using an object
function isUnique(str){
	let obj = {};
	for(let i = 0; i < str.length; i++){
		let currentChar = str.charAt(i);
		if(obj[currentChar]) return false;
		else{
			obj[currentChar] = i;
		}
	}

	return true;
} 

console.log(isUnique('abcd'));
console.log(isUnique('abcdc'));
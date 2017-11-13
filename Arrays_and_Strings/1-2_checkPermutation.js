//Given 2 strings, write a method to determine if one is a permutation of the other.

function sortString(str){
	let arr = str.split('');
	arr.sort();
	return arr.join('');
}

function checkPermutation(str1, str2){
	let sorted1 = sortString(str1);
	let sorted2 = sortString(str2);
	if(sorted1 === sorted2) return true;
	else return false;
	
}


console.log(checkPermutation("dog", "god"));
console.log(checkPermutation("    dog", "god"))
console.log(checkPermutation("dog", "g od"))
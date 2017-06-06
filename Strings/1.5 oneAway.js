// write a function that returns if a string is either 0 or 1 away from another
// you can remove, edit, or add a character


function isOneAway(str1, str2){
	//if its the same string return true
	if(str1 === str2) return true;
	//same length only can edit a char
	if(str1.length === str2.length){
		let diff = 0;
		for(let i = 0; i< str1.length; i++){
			if(str1.charAt(i) !== str2.charAt(i)){
				diff++;
				if(diff > 1) return false;
			}
		}
	}
	//can only add/remove a char
	let index1, index2 = 0;
	while(index1 < str1.length && index2 < str2.length){
		if(str.charAt(index1) !== str.charAt(index2)){
			
		}
	}

}


console.log(isOneAway('pale', 'ple'))
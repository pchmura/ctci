//write a method to replace all of the spaces in a string with '%20' in place using a char array

function URLify(str){
	str = str.trim();
	let url = "";
	for(let i = 0; i < str.length; i++){
		if(str.charAt(i)=== ' '){
			url += '%20';
		}
		else{
			url += str[i];
		}
	}
	return url;
}

console.log(URLify("Hello World        "))
console.log(URLify("HelloWorld"))
console.log(URLify("Hel lo Wor ld"))
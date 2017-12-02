//Assume you have a method isSubstring which checks if one word is a substring of another. 
//Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.
// ex. "waterbottle" is a rotation a rotation of "erbottlewat"

function isRotation(s1, s2){
   return  ((s2+s2).indexOf(s1)) > -1; 
}

console.log(isRotation('wat', 'atw'));
console.log(isRotation('this is', 'not a rotation'));
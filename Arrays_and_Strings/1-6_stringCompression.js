//Implement a method to perform basic string compression using the counts of repeated characters.
//For example, the string aabcccccaaa would become a2b1c5a3. 
//If the "compressed" string would not become smaller than the original string, your method should return the original string.
//You can assume the string has only upper and lowercase letters. 

function compressString(str){
    let currentLetterCount = 1;
    let currentLetter = str[0];
    let compressedString = "";

    for(let i = 1; i < str.length; i++){
        if(currentLetter !== str[i]){
            compressedString += (currentLetter + currentLetterCount);
                currentLetter = str[i];
                currentLetterCount = 1;
        }
        else{
            currentLetterCount++;
        }
    }

    compressedString += (currentLetter + currentLetterCount);
    
    return (compressedString.length > str.length) ? str : compressedString;
}


console.log(compressString('aabcccccaaa'));
console.log(compressString('aabaa'));
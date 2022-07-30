// Question no.-24:  Given a string, capitalize the first letter of each word.

// Input Format :  Given a strings str
// Output Format  :   Capitalize the first letter of each word then return the string.

// Sample Input:   This is a title
// Sample Output:  This Is A Title

// Sample Input:   capitalize every word
// Sample Output:   Capitalize Every word


function capitalization(str){
    let words = str.split(" ");
    var CapitalizedWords = [];  
        words.forEach(element => {  
            CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
        });  
        return CapitalizedWords.join(' ');  
    }
    console.log(capitalization('This is a title'))
    console.log(capitalization('capitalize every word'))
    exports.capitalization = capitalization
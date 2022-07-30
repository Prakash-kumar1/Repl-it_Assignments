// Question no.-23: Given a string sentence, reverse the string word by word

// Input Format  :  Given a strings str
// Output Format  :  Reveres the given string word by word then return the reversed string

// Sample Input:   the sky is blue
// Sample Output:   blue is sky the

// Sample Input:   hello   world!
// Sample Output:  world! hello


function reverse(str){
    return  str.split(' ').reverse().join(' ')
    }
    console.log(reverse("the sky is blue"));
    exports.reverse = reverse
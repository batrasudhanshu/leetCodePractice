class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
s=s.toLowerCase()
function isAlphaNumeric(c){
   return (c >= 'A' && c <= 'Z') || 
               (c >= 'a' && c <= 'z') || 
               (c >= '0' && c <= '9');
}
let cleanString='';
for(let i=0;i<s.length;i++){
    if(isAlphaNumeric(s[i])){
         cleanString += s[i];
    }
}
let reverseString=cleanString.split('').reverse().join('')
return (cleanString===reverseString)


    }
}

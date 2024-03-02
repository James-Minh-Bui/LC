// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

var reverseVowels = function(s) {
    let vowels = {
        'a':true, 
        'e':true, 
        'i':true, 
        'o':true, 
        'u':true,
        'A':true, 
        'E':true, 
        'I':true, 
        'O':true, 
        'U':true
    }
    let arr = [];
    for (let char of s) {
        if (vowels[char]) {
            arr.push(char)
        }
    }
    let result = s.split('');
    for (let i = 0;i < result.length; i++) {
        if (vowels[result[i]]) {
            result[i] = arr.pop()
        }
    }
    return result.join('')
};
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

var reverseWords = function(s) {
    s = s.trim()
    const words = []
    let curr = ""
    for (let i = 0; i < s.length; i++) {
       if (s[i] == ' ') {
           if (curr !== "") {
               words.push(curr)
               curr = ""
           }
       } 
       else {
           curr += s[i]
       } 
       if (i == s.length-1) words.push(curr)
    }
    let result = ''
    for (let i = words.length-1; i >= 0; i--) {
        result += words[i]
        if (i !== 0) result += ' '
    }
    return result
};

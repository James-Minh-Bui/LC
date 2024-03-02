// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s

// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d

var mergeAlternately = function(word1, word2) {
    if (word1.length === 0) return word2
    else if (word2.length === 0) return word1

    let merged = ''
    while (word1.length > 0 && word2.length > 0) {
        merged += word1[0] + word2[0]
        word1 = word1.slice(1)
        word2 = word2.slice(1)
        if (word1.length === 0) merged += word2
        if (word2.length === 0) merged += word1
    }
    return merged
};
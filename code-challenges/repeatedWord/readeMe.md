# Find First Repeated Word in a String

### Challenge
Write a function that takes in a string and using a Hash Table, finds the first repeating word

### Approach and Efficiency
- Efficiency is O(log(o)) 
- to complete this challenge we must first write a hash function to properly hash each word in the string, then the string must be split up into individual words and punctuation and finally, we can hash them out and check for crashes while they are being hashed. If there is a crash, that word is returned. If not we return null. 

### Solution
[Please see this link for the solution](repeatedWord.js)
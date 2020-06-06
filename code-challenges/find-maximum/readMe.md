# Challenge Summary
Extend the Binary Tree class to include a method that finds the max value within the tree. 

## Challenge Description
findMaximumValue takes in a tree and returns the highest value within the tree.

## Approach & Efficiency
To make the function work quickly, I called the preOrder function, which returns an array with the values of the tree, and then looped over the array with a for loop checking the values against the variable maxVal. If the value is larger than the current maxVal, I reset the value of maxVal to the current value being checked and returned maxVal once the for loop was finished. This gives us the 2 x the bigO(n)

I would like to write a function that is recursive and keeps track of a max value, but that is for another day. 

## Solution
<!-- Embedded whiteboard image -->
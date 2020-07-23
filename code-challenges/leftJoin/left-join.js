'use strict';

/*
PROBLEM DOMAIN:
  Write a function that left joins two hashmaps into one data structure.

  The first hashmap has a word strings as keys and a synonym as the value

  The second hashmap has a string as a key and the value is autonomous from the key

INPUT / OUTPUT:

PSEUDOCODE: 


BIG O


*/


//ALGORITHM AND CODE 

const hash = (key, hashMap) => {
  let sum = 0; 

  for (i in key) {
    let letter = key.charCodeAt(i);
    sum += letter;
  }

  sum *=599;
  return sum % hashMap;
}

function leftJoin(hash1, hash2) {
  for (let i = 0; i < hash2.length; i++){
    if(!hash2[i]) continue;
    else if (hash2[i].length){
      let right = hash2[i];
      let key = right[0];
      let value = right[1];

      let idx = has(key, hash1.length); 
      let left = hash1[idx];

      if(!left) {
        hash1[idx] = [key, null, value];
      } else if (left.next) {
        let current = left.prev

        while(current) {
          if (current[0] === key){
            current.push(value);
            break;
          }

          current = current.next;
        }
      }
    } else if (hash1[i].next) {
      //do something with the collision i guess
    }
  }
}

module.exports = leftJoin;